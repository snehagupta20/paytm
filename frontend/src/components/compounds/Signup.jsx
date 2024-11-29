import React from "react";
import { Heading } from "../atoms/Heading";
import { InputBox, Label } from "../atoms/InputBox";
import { Button } from "../atoms/Button";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const navigate = useNavigate();

    async function formSubmit(event){
        event.preventDefault();

        const formData = {
            firstName : event.target.firstName.value, 
            lastName : event.target.lastName.value, 
            username : event.target.username.value, 
            password : event.target.password.value
        }

        // console.log("form submitted",{...formData});

        try {

            const res = await axios.post( `${BACKEND_URL}/api/v1/user/signup` , formData);
            console.log("data form : ", res.data.message);


            const token = res.data.token;
            const userID = res.data.userID;
            const username = res.data.username;
            localStorage.setItem("token", `BEARER ${token}`);
            localStorage.setItem("userID", `${userID}`);
            localStorage.setItem("username", `${username}`);

            navigate('/home');

        } catch (error) {
            console.log("error in submitting form ",error);
        };
        
    }

    return(
        <div className="w-[25%] m-auto text-center">
            <div>
                <Heading>Sign Up</Heading>
                <p>Enter your information to create an account</p>
            </div>
            <form className="mt-8" onSubmit={formSubmit} >
                <Label classname="text-left">First Name</Label>
                <InputBox type="text" name="firstName">John</InputBox>

                <Label classname="text-left">Last Name</Label>
                <InputBox type="text" name="lastName">Doe</InputBox>

                <Label classname="text-left">Emal Id</Label>
                <InputBox type="email" name="username">johndoe@example.com</InputBox>

                <Label classname="text-left">Password</Label>
                <InputBox type="password" name="password"></InputBox>
                <Button classname="py-2 w-webkit-fill mr-0 mt-4">Sign Up</Button>
                <p className="m-2" >Alredy have an account? <NavLink to="/signin">Login</NavLink></p>
            </form>
        </div>
    )
};