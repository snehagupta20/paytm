/*
PAYMENT NAVBAR
1. payments App heading - left
2. right:
    a. Hello, <name>
    b. logo with name's first letter

- what is react's component stucture?
*/

import React from "react";
import { Heading } from "../atoms/Heading";
import UserLogo from "../atoms/UserLogo";
// import { UserLogo } from "../atoms/UserLogo";

export default function AppBar(){
    return(
        <nav className="flex justify-between items-center p-4 px-6" >
            <div>
                <Heading>Payments App</Heading>
            </div>
            <div className="flex items-center">
                <h2 className="font-semibold text-xl mr-5" >Hello, User</h2>
                <UserLogo color="bg-[#f5f5f5]">SG</UserLogo>
            </div>
        </nav>
    )
};

/*
- padding around nav
- padding around div (hello user, U)
*/