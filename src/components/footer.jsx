import { Github, MailCheckIcon } from 'lucide-react';
import { Oswald } from 'next/font/google';
const font = Oswald({ subsets: ["latin"], weight: "700" });

const Footer = () => {
    return (
        <div className='p-10 flex justify-center flex-col items-center gap-4'>

            <div className=" flex items-center gap-3">
                <Github />
                <MailCheckIcon />
            </div>

            <div className="">
                <p className='text-xs'>
                    © 2024. All rights reserved by Malek.
                </p>
            </div>

        </div>
    )
}

export default Footer