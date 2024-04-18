import { Github, MailIcon } from 'lucide-react';
import { Oswald } from 'next/font/google';
import Link from 'next/link';
const font = Oswald({ subsets: ["latin"], weight: "700" });

const Footer = () => {
    return (
        <div className='p-10 flex justify-center flex-col items-center gap-4'>

            <div className=" flex items-center gap-3">
                <Link href="https://github.com/malek0x1">
                    <Github size={17} />
                </Link>
                <Link href="mailto: malek0x1@gmail.com">
                    <MailIcon size={17} />
                </Link>
            </div>

            <div className="">
                <p
                    style={{ fontSize: "10px" }}
                    className=''>
                    &copy; 2024 Malek Mneimneh. All rights reserved.
                </p>
            </div>

        </div>
    )
}

export default Footer