import { pop, sans } from '@/app/core';
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import Section from './components/Section';
import SocialBar from './components/SocialBar';
import SocialLink from './components/SocialLink';

export default function App() {
    return (
        <div className={`flex flex-col flex-shrink-0 justify-center items-center w-screen min-h-screen h-full p-5 bg-gradient-to-tr from-[--blue-1] to-[--blue-2] ${pop}`}>
            <Navbar />
            <Header />
            <br className="my-3 md:my-5" />
            <SocialBar>
                <SocialLink href='http://www.instagram.com/jnanada.pesu' logo='nf-md-instagram' />
                <SocialLink href='http://www.linkedin.com/company/jnanada-pesu' logo='nf-md-linkedin' />
                <SocialLink href='https://chat.whatsapp.com/K5n3u3HjKJM3RP8DU2bP7Q' logo='nf-md-whatsapp' />
                <SocialLink href='https://discord.gg/2wGm6szGhH' logo='nf-md-discord' />
                <SocialLink href='https://clubs.pes.edu/jnanada/' logo='nf-md-linkedin' />
                <SocialLink href='https://youtube.com/@JnanadaPESU' logo='nf-md-youtube' />
            </SocialBar>
            <br className="my-3 md:my-5" />
            <Section heading='' title=''>
                <p>
                    Welcome to the world of Jnanada, where the magic of Sanskrit breathes life into every moment at PES University! Picture yourself surrounded by the echoes of ancient wisdom as we delve deep into Sanskrit literature and scriptures, uncovering treasures that connect us to our roots.
                </p>
            </Section>
            <br />
            <Section heading={sans`vayaM ke smaH?`} title='Who are we?'>
                <p>
                    We are a bunch of enthusiastic students who 
                </p>
            </Section>
            <br />
            <Section heading={sans`vayaM kim kurmaH?`} title='What do we do?'>
                <p>
                    We create LLMs based on Sanskrit, conduct workshops to teach Sanskrit and other stuff.
                </p>
            </Section>
        </div>
    )
}
