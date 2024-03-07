import Sanscript from '@indic-transliteration/sanscript';
import { Noto_Serif_Devanagari } from 'next/font/google';

const nsd = Noto_Serif_Devanagari({ weight: '400', subsets: ['devanagari'] });

export default function App()   {
    return (
        <div className="flex flex-col justify-center items-center w-screen min-h-screen h-full bg-gradient-to-tr from-[--blue-1] to-[--blue-2]">
            <div className="relative -animate-bounce-custom">
                <img src="ring.png" alt="" className='animate-spin-custom md:w-[20rem] md:h-[20rem] h-60 w-60' />
                <span className={`absolute align-middle text-[--yellow] text-7xl md:text-8xl top-[43%] left-[36%] ${nsd.className}`}>
                    { Sanscript.t("OM", "itrans", "devanagari") }
                </span>
            </div>
            <h1 className={`text-5xl md:text-7xl text-[--yellow] mt-10 ${nsd.className}`}>
                { Sanscript.t("j~nAnadA ##PESU##", "itrans", "devanagari") }
            </h1>
        </div>
    )
}