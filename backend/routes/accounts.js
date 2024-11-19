import express from 'express';
import auth from '../middleware.js';
import { Accounts, User } from '../db.js';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/balance', auth, async (req, res) => {
    const userId = req.userId;
    console.log(userId);

    try{
        const balance = await Accounts.findOne({
            userId : userId,
        });

        console.log(balance);

        return res.status(200).json({
            balance : balance.balance,
        });

    } catch (error){
        return res.status(411).json({
            message : "user id not found",
            error : error
        })
    }
});


router.post('/transfer', auth, async (req, res) => {

    const session = await mongoose.startSession();

    session.startTransaction();

    const {to, amount} = req.body;

    const sender = await Accounts.findOne({userId : req.userId}).session(session);

    if(!sender || sender.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "insufficient balance 😲🫢"
        });
    };

    const reciever = await User.findOne({username : to}).session(session);
    const recieverAccount = await Accounts.findOne({userId : reciever._id}).session(session);

    if(!reciever){
        await session.abortTransaction();
        return res.status(400).json({
            message : "invalid accoutn 😒"
        });
    };

    await Accounts.updateOne({user : sender.userId}, {$inc : {balance : -amount}}).session(session);
    await Accounts.updateOne({user : recieverAccount.userId}, {$inc : {balance : +amount}}).session(session);

    await session.commitTransaction();
    res.json({
        message : "transfer successfull 😀",
        senderBalance : sender.balance,
        recieverBalance : recieverAccount.balance,
    });









});

const accountsRouter = router;
export default accountsRouter;