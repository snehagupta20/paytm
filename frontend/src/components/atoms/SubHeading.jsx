import React from "react";

export function SubHeading({children}){
    return(
        <h1 className="mr-4 font-bold text-lg">{children}</h1>
    )
};

export function Title({children}){
    return(
        <h2 className="font-semibold text-lgg mx-4">{children}</h2>
    )
};