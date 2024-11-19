import React from "react";
import { SubHeading } from "../atoms/SubHeading";
import { SearchBox } from "../atoms/InputBox";
import { UserDetail } from "../atoms/UserDetail";
import JSON_DATA from '../../../public/contacts.json';

export function Users(){

    return(
        <div className=" px-6">
            <SubHeading>Users</SubHeading>
            <SearchBox></SearchBox>
            <div className="h-4"></div>
            {
                JSON_DATA.contacts.map(function(key){
                    return <UserDetail name={key.name} ></UserDetail>
                })
            }
            
        </div>
    )
}