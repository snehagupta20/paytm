import React from "react";

export function Button(props){
    return(
        <button type="submit" onClick={props.onClick} className={`px-4 w-auto bg-black text-white rounded-md ${props.classname}`}>
            {props.children}
        </button>
    )
};

export function GreenButton(props){
    return(
        <button onClick={props.onClick} className={`bg-green-500 text-white rounded-md px-4 w-webkit-fill py-2 ${props.classname}`}>{props.name}</button>
    )
};