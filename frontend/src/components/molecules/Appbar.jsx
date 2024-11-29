import React from "react";
import { Heading } from "../atoms/Heading";
import UserLogo from "../atoms/UserLogo";
import {NavLink, useNavigate} from "react-router-dom";

export default function AppBar(){
    return(
        <nav className="flex justify-between items-center p-4 px-6" >
            <div>
                <Heading>Payments App</Heading>
            </div>
            <div className="flex items-center">
                <h2 className="font-semibold text-xl mr-5" >Hello, User</h2>
                <UserLogo dropdown="dropdown" color="bg-[#f5f5f5]">SG</UserLogo>
                <div className=" ml-4">
                    <NavLink className="mx-2" to="/signup">Sign Up</NavLink>
                    <NavLink className="" to="/signin">Sign In</NavLink>
                </div>
            </div>
        </nav>
    )
};