import React from "react";

export function Button({children}){
    return(
        <button className="px-4 w-auto bg-black text-white rounded-md mr-4">
            {children}
        </button>
    )
};