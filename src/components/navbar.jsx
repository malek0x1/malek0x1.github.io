import { NAVBAR_DATA } from "@/other/data";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { AnimatePresence } from "framer-motion";
import { Oswald } from "next/font/google";
import { Sling as Hamburger } from 'hamburger-react'

const font = Oswald({ subsets: ["latin"], weight: "700" });
const Navbar = ({ isOpen, setIsOpen }) => {


    return (
        <div className=' w-full navbar'>
            <div className="flex items-center justify-between container py-4 px-5">
                <div className=" text-white">
                    <h3 className={`text-lg  ${font.className}`}>
                        MALEK MNEIMNEH
                    </h3>


                </div>
                <div className="" >
                    <div className="sm:hidden cursor-pointer" >
                        <Hamburger toggled={isOpen} toggle={setIsOpen} color="white" />
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
                    )}
                </AnimatePresence>



                <div className=" items-center gap-4 hidden sm:flex">
                    {NAVBAR_DATA.map(item => (
                        <Link className="text-white text-xs" key={item.id} href={item.href}>
                            {item.title}
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Navbar