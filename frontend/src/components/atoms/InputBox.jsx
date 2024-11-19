import React, { useState } from "react";
import JSON_DATA from '../../../public/contacts.json';

export function SearchBox(){
    

    return(
        <input type="text" value={searchItem} onChange={handleInputChange} placeholder="Search Users..." className="border-2 border-solid border-slate-300 p-[0.5rem] mt-4 mr-4 w-webkit-fill rounded-lg"></input>
    )
};