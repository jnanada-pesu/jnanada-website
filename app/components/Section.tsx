"use client";

import { pop, sans } from "@/app/core";
import { ReactNode } from "react";
import { Fade } from "react-awesome-reveal";

type AboutProps = {
    heading: string;
    children: ReactNode;
};

export default function Section({ heading, children } : AboutProps) {
    return (
        <div className={`my-10 w-3/4 text-center ${pop}`}>
            <Fade direction="up" triggerOnce={true}>
                <h1 className={`text-5xl md:text-5xl text-[--yellow] mt-10 w-full cursor-pointer`} title="Who are we?">
                    { heading }
                </h1>
            </Fade>
            <Fade triggerOnce={true} direction="left" cascade={true} className="text-2xl text-white mt-5 leading-2" fraction={1}>
                { children }
            </Fade>
        </div>
    )
}