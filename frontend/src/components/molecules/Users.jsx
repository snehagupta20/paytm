import React from "react";
import { SubHeading } from "../atoms/SubHeading";
import { SearchBox } from "../atoms/InputBox";
import { UserDetail } from "../atoms/UserDetail";

export function Users(){
    return(
        <div className=" px-6">
            <SubHeading>Users</SubHeading>
            <SearchBox></SearchBox>
            <div className="h-4"></div>
            <UserDetail name={"USER 1"}></UserDetail>
            <UserDetail name={"USER 2"}></UserDetail>
            <UserDetail name={"USER 3"}></UserDetail>
            <UserDetail name={"USER 4"}></UserDetail>
        </div>
    )
}