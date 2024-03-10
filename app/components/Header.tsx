"use client";

import Sanscript from '@indic-transliteration/sanscript';
import { nsd, pop, sans } from '@/app/core';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Header() {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                sans`|| vande saMskRRita mAtaram ||`
            ],
            typeSpeed: 20,
            showCursor: false,
        })
    }, []);
    return (
        <div className="mt-16 w-full relative flex flex-col items-center">
            <div className="relative -animate-bounce-custom">
                <img src="ring.png" alt="" className='animate-spin-custom md:w-[20rem] md:h-[20rem] h-60 w-60' />
                <span className={`absolute align-middle text-[--yellow] text-7xl md:text-8xl top-[43%] left-[36%] ${nsd}`}>
                    { sans`OM` }
                </span>
            </div>
            <h1 className={`text-4xl md:text-6xl text-[--yellow] mt-10 ${pop}`} ref={el}></h1>
        </div>
    )
}