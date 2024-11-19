import React, { useState } from "react";
import { SubHeading } from "../atoms/SubHeading";
import { SearchBox } from "../atoms/InputBox";
import { UserDetail } from "../atoms/UserDetail";
import JSON_DATA from '../../../public/contacts.json';

export function Users(){

    const [searchItem, setSearchItem] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(JSON_DATA.contacts);

    function handleInputChange(event){
        const searchTerm = event.target.value;

        setSearchItem(searchTerm);


        const filteredItems = JSON_DATA.contacts.filter(function(key){
            return key.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        setFilteredUsers(filteredItems);
    }

    return(
        <div className=" px-6">
            <SubHeading>Users</SubHeading>

            <input type="text" value={searchItem} onChange={handleInputChange} placeholder="Search Users..." className="border-2 border-solid border-slate-300 p-[0.5rem] mt-4 mr-4 w-webkit-fill rounded-lg"></input>

            <div className="h-4"></div>
            {

                filteredUsers.map(function(user){
                    return <UserDetail name={user.name} ></UserDetail>
                })
            }
            
        </div>
    )
}