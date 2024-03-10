import React, { FC } from "react";

export interface LinkProps    {
    href: string;
    logo: string;
}

export default function SocialLink(props : LinkProps)  {
    return (
        <button className="text-[--yellow] hover:text-yellow-300 hover:scale-110 transition duration-300 ease-in-out">
            <a href={props.href} className={`nf ${props.logo}`}></a>
        </button>
    )
}