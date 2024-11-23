import React, { useState } from "react";
import { SubHeading } from "../atoms/SubHeading";
import { UserDetail } from "../atoms/UserDetail";
import JSON_DATA from '../../assets/contacts.json';
import SendMoney from "../compounds/SendMoney";

export function Users({showModal, handleModalChange, handleCloseModal}){


    // filtering items
    const [searchItem, setSearchItem] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(JSON_DATA.contacts);
    // setting the user for send money modal
    

    // handling input change in search bar
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

            <div className={`${showModal.show ? "opacity-30" : ""}`}>
            <SubHeading>Users</SubHeading>

            <input type="text" value={searchItem} onChange={handleInputChange} placeholder="Search Users..." className="border-2 border-solid border-slate-300 p-[0.5rem] mt-4 mr-4 w-webkit-fill rounded-lg"></input>

            <div className="h-4"></div>
            {
                filteredUsers.map(function(user){
                    return <UserDetail name={user.name} handleModalChange={handleModalChange} ></UserDetail>
                })
            }
            </div>

            {showModal.show && <SendMoney username={showModal.val} handleCloseModal={handleCloseModal} ></SendMoney>}
            
        </div>
    )
}