import React from "react";

export function UserLogo({children}){
    return(
        <div className="h-12 w-12 bg-[#f5f5f5] rounded-[3rem] leading-[2.8rem]">
            <p className="text-center text-[1.2rem]">{children}</p>
        </div>
    )
};