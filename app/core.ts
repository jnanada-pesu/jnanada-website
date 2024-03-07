import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import Sanscript from '@indic-transliteration/sanscript';

const notodev = Noto_Serif_Devanagari({ weight: '400', subsets: ['devanagari'] });
const poppins = Poppins({ weight: '400', subsets: ["devanagari"] });

export const nsd = notodev.className;
export const pop = poppins.className;

export const sans = (val:TemplateStringsArray) => Sanscript.t(val[0], "itrans", "devanagari");