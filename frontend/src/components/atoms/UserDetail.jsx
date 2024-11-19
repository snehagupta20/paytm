import React from "react";
import { UserLogo } from "./UserLogo";
import { Button } from "./Button";
import { Title } from "./SubHeading";

export function UserDetail({name}){
    return(
        <div className="mt-4 flex justify-between">
            <div className="flex items-center">
                <UserLogo></UserLogo>
                <Title>{name}</Title>
            </div>
            <Button>Send Money</Button>
            
        </div>
    )
};