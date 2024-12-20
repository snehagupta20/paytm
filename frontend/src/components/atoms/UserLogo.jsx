import React from "react";

export default function UserLogo(props){
    return(
        <button data-dropdown-toggle={props.dropdown} className={`h-12 w-12 rounded-[3rem] leading-[2.8rem] ${props.color}`}>
            <p className="text-center text-[1.2rem]">{props.children}</p>
        </button>
    )
};