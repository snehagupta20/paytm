import express from "express";
import {Accounts, User} from '../db.js';
import jwt from 'jsonwebtoken';
import zod from 'zod';

const router = express.Router();

// validate input using zod
const signupBody = zod.object({
    username:zod.string().email().toLowerCase(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string().min(6,{message: "min 6 chars req in pass"}),
});

// posting to db
router.post('/signup', async (req,res)=>{

    // checking if user alredy exisits
    const body = req.body;
    const userExists = await User.findOne(
        { username : body.username },
    )
    if(userExists){
        res.status(411).json({
            message : "Username alredy exists"
        })
    }

    // checking if rest of inputs are valid
    console.log(body);
    const {success, error} = signupBody.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "incorrect inputs"
            // error.issues.message
        })
    }
    

    // since all inputs correct, creating user
    const user = await User.create({
        username: body.username,
        firstName: body.firstName,
        lastName: body.lastName,
        password: body.password,
    });

    const account = await Accounts.create({
        userId : user._id,
        balance : (Math.random()*10000)+1,
    });

    const username = body.username;
    const userId = user._id;
    // const balance = Accounts.balance;
    const token = jwt.sign({username, userId}, process.env.JWT_SECRET ) ;

    return res.status(200).json({
        message: "user logged in successfully", 
        token: token,
        username : username,
        userId : userId,
    });


});

router.post('/signin', async (req, res) => {
    // check if user present in db
    const username = req.body.username;

    const userExist = await User.findOne({
        username: username,
        password: req.body.password
    })
    if(!userExist){
        return res.status(411).json({
            message: "error while logging in"
        })
    }

    const userId = userExist._id;

    const token = jwt.sign({username, userId}, process.env.JWT_SECRET);

    return res.status(200).json({
        token: token
    })

});

router.get('/bulk', async (req, res) => {
    try{
        const users = await User.find({ $or : [{firstName : req.body.firstName}, {lastName : req.body.lastName}]});

        console.log(users);

        return res.status(200).json({
            message : "successfully showed",
            users : users,
        })
    } catch(error){
        return res.status(411).json({
            message : "server error occured 🥲",
            error : error,
        });
    }
});


const userRouter = router;
export default userRouter;