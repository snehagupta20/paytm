import React, { useState } from "react";

export function InputBox({children, type, name}){
    return(
        <input name={name} required type={type} className=" border border-solid border-slate-300 rounded-md p-2 my-2 w-webkit-fill" placeholder={children}></input>
    )
};

export function Label({children, classname}){
    return(
        <label className={`block text-left font-semibold ${classname}`}>{children}</label>
    )
}
