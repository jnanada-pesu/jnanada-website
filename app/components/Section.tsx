"use client";

import { pop, sans } from "@/app/core";
import { ReactNode } from "react";
import { Fade } from "react-awesome-reveal";

type AboutProps = {
    heading: string;
    title: string;
    children: ReactNode;
};

export default function Section({ heading, title, children } : AboutProps) {
    return (
        <div className={`my-7 md:my-10 w-full p-2 md:w-3/4 text-center ${pop}`}>
            <Fade direction="up" triggerOnce={true} fraction={1}>
                <h1 className={`text-4xl md:text-5xl text-[--yellow] mt-10 w-full cursor-pointer`} title={title}>
                    { heading }
                </h1>
            </Fade>
            <Fade triggerOnce={true} direction="left" cascade={true} className="text-xl md:text-2xl text-white mt-5 leading-2" fraction={1}>
                { children }
            </Fade>
        </div>
    )
}