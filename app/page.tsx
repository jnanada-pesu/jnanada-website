import { pop, sans } from '@/app/core';
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import Section from './components/Section';

export default function App() {
    return (
        <div className={`flex flex-col flex-shrink-0 justify-center items-center w-screen min-h-screen h-full p-5 bg-gradient-to-tr from-[--blue-1] to-[--blue-2] ${pop}`}>
            <Navbar />
            <Header />
            <br className="my-10" />
            <Section heading=''>
                <p>
                    Welcome to the world of Jnanada, where the magic of Sanskrit breathes life into every moment at PES University! Picture yourself surrounded by the echoes of ancient wisdom as we delve deep into Sanskrit literature and scriptures, uncovering treasures that connect us to our roots.
                </p>
            </Section>
            <Section heading={sans`vayaM ke smaH?`}>
                <p>
                    We are a bunch of enthusiastic students who 
                </p>
            </Section>
        </div>
    )
}