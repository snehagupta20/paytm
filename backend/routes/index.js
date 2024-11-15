import express from 'express';
import userRouter from './user.js';
import accountsRouter from './accounts.js';
import zod from 'zod';
import auth from '../middleware.js';
import {User} from '../db.js';
// const userRouter = require('./user.js');

const router = express.Router();

router.use('/user', userRouter);
router.use('/account', accountsRouter);

const changeBody = zod.object({
    firstName : zod.string().optional(),
    lastName : zod.string().optional(),
    password : zod.string().min(6, {message : "password should be min of 6 chars"}).optional(),
});

router.patch('/user', auth, async (req, res) => {
    // router.use(auth);

    const updates = {};
    const userId = req.username;

    if(req.body.firstName){
        updates.firstName = req.body.firstName;
    }
    if(req.body.lastName){
        updates.lastName = req.body.lastName;
    }
    if(req.body.password){
        updates.password = req.body.password;
    }

    console.log(updates);

    // check if this info is valid or not. 
    // zod 
    const {success, errors} = changeBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message : "incorrect inputs",
            errors : errors,
        });
    }

    try{
        await User.updateOne({username : userId}, {$set : updates});
        return res.status(200).json({
            message : "user information updated successfuly 💅 ",
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            message : "server err",
            error : error,
        });
    }

});


const mainRouter = router;
export default mainRouter;