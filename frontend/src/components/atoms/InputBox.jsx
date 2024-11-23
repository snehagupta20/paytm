import React, { useState } from "react";

export function InputBox({children}){
    return(
        <input type="text" className=" border border-solid border-slate-300 rounded-md p-2 my-2 w-webkit-fill" placeholder={children}></input>
    )
};