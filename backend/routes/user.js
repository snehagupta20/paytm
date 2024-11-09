import express from "express";
import User from '../db';
// import jwt from 'jsonwebtoken';
// import { JWT_SECRET } from "../config";
import zod from 'zod';

const router = express.Router();

// validate input using zod
const signupBody = zod.object({
    username:zod.string().toLowerCase(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string().min(6).toLowerCase(),
});

// posting to db
router.post('/signup', (req,res)=>{

    // checking if user alredy exisits
    const userExists = User.findOne(
        { username : req.body.username },
    )
    if(userExists){
        res.status(411).json({
            message : "Username alredy exists"
        })
    }

    // checking if pass is valid
    const password = req.body.password;
    console.log(password);
    if(!signupBody.safeParse(password)){
        return res.status(411).json({
            message: "min 6 chars req in password"
        })
    }

    // checking if rest of inputs are valid
    const body = req.body;
    console.log(body);
    const {success} = signupBody.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "incorrect inputs"
        })
    }
    

    // since all inputs correct, creating user
    const user = User.create({
        username: body.username,
        firstName: body.firstName,
        lastName: body.lastName,
        password: password,
    });


});


const userRouter = router;
export default userRouter;