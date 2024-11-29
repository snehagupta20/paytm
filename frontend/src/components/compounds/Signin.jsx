import React from "react";
import { Heading } from "../atoms/Heading";
import { InputBox, Label } from "../atoms/InputBox";
import { Button } from "../atoms/Button";
import { NavLink } from "react-router-dom";

export default function Signin(){
    return(
        <div className="w-[25%] m-auto text-center">
            <div>
                <Heading>Sign In</Heading>
                <p>Enter your credentials to access your account</p>
            </div>
            <form className="mt-8">
                <Label classname="text-left">Email Id</Label>
                <InputBox type="email">johndoe@example.com</InputBox>

                <Label classname="text-left">Password</Label>
                <InputBox type="password"></InputBox>

                <Button classname="py-2 w-webkit-fill mr-0 mt-4">Sign In</Button>
                <p className="m-2" >Don't have an account? <NavLink to="/signup">Sign Up</NavLink></p>
            </form>
        </div>
    )
};