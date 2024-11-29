import React from "react";
import { Heading } from "../atoms/Heading";
import { InputBox, Label } from "../atoms/InputBox";
import { Button } from "../atoms/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config";
import axios from "axios";

export default function Signin(){

    const navigate = useNavigate();

    async function formSubmit(event){
        event.preventDefault();

        // console.log(event);

        const formData = {
            username : event.target.username.value,
            password : event.target.password.value
        }

        console.log("form data ",formData);

        try{
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, formData);
            console.log("form data : ", res.data.message);

            const token = res.data.token;
            const userID = res.data.userID;
            const username = res.data.username;
            localStorage.setItem("token", `BEARER ${token}`);
            localStorage.setItem("userID", `${userID}`);
            localStorage.setItem("username", `${username}`);

            navigate('/home');
        } catch(error){
            console.log("error in submitting form ", error);
        };

        
    };

    return(
        <div className="w-[25%] m-auto text-center mt-[14%]">
            <div>
                <Heading>Sign In</Heading>
                <p>Enter your credentials to access your account</p>
            </div>
            <form className="mt-8" onSubmit={formSubmit} >
                <Label classname="text-left">Email Id</Label>
                <InputBox name="username" type="email">johndoe@example.com</InputBox>

                <Label classname="text-left">Password</Label>
                <InputBox name="password" type="password"></InputBox>

                <Button classname="py-2 w-webkit-fill mr-0 mt-4">Sign In</Button>
                <p className="m-2" >Don't have an account? <NavLink to="/signup">Sign Up</NavLink></p>
            </form>
        </div>
    )
};