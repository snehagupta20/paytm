import express from "express";
import {User} from '../db.js';
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

    const username = body.username;
    const token = jwt.sign({username}, process.env.JWT_SECRET ) ;

    return res.status(200).json({
        message: "user logged in successfully", 
        token: token,
    });


});

const signinBody = zod.object({
    username: zod.string().email().toLowerCase(),
    password: zod.string().min(6, {message: "min 6 char"}),
})

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

    const token = jwt.sign({username}, process.env.JWT_SECRET);

    return res.status(200).json({
        token: token
    })

});

 
/*
- get the firstname or lastname from user
- search the db for that first name & last name
- send repsonse to user w/ message & fn, ln & username
*/
router.get('/bulk', async (req, res) => {
    try{
        // const users = await User.find({ $and : [{firstName : /^req.firstName/ }, {lastName : /^req.lastName/}]});
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