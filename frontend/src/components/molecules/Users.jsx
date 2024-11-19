import React from "react";
import { SubHeading } from "../atoms/SubHeading";
import { SearchBox } from "../atoms/InputBox";

export function Users(){
    return(
        <div className=" px-6">
            <SubHeading>Users</SubHeading>
            <SearchBox></SearchBox>
        </div>
    )
}