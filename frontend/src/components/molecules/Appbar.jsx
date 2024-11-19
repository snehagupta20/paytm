/*
PAYMENT NAVBAR
1. payments App heading - left
2. right:
    a. Hello, <name>
    b. logo with name's first letter

- what is react's component stucture?
*/

import React from "react";
import { AppHeading } from "../atoms/Heading";
import { UserLogo } from "../atoms/UserLogo";

export default function AppBar(){
    return(
        <nav className="flex justify-between p-4 px-6 items-center" >
            <div>
                <AppHeading></AppHeading>
            </div>
            <div className="flex items-center">
                <h2 className="font-semibold text-xl" >Hello, User</h2>
                <UserLogo></UserLogo>
            </div>
        </nav>
    )
};

/*
- padding around nav
- padding around div (hello user, U)
*/