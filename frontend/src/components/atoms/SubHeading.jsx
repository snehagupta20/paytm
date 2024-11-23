import React from "react";

export function SubHeading(props){
    return(
        <h1 className={`mr-4 font-bold text-lg ${props.classname}`}>{props.name || props.children}</h1>
    )
};

export function Title({children}){
    return(
        <h2 className="font-semibold text-lg mx-4">{children}</h2>
    )
};