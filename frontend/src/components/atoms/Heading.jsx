import React from "react";

export function Heading(props){
    return(
        <>
        <h1 className={`font-bold text-2xl ${props.classname}`} >{props.children || props.name}</h1>
        </>
    )
}

// export function Heading)