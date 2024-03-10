import React, { FC, ReactNode } from "react";

export interface LinkBarProps  {
    children: ReactNode;
}

export default function SocialBar({ children } : LinkBarProps)  {
    return (
        <div className="w-1/4 h-fit flex flex-row items-center justify-center text-3xl md:text-4xl my-5 space-x-7">
            { children }
        </div>
    )
}