import { NAVBAR_DATA } from "@/other/data";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { AnimatePresence } from "framer-motion";
import { Oswald } from "next/font/google";

const font = Oswald({ subsets: ["latin"], weight: "700" });
const Navbar = ({ isOpen, setIsOpen }) => {


    const handleMobileNav = () => {
        setIsOpen(prev => !prev)
    }
    return (
        <div className=' w-full navbar'>
            <div className="flex items-center justify-between container py-4 px-5">
                <div className=" text-white">
                    <h3 className={`text-lg  ${font.className}`}>
                        MALEK MNEIMNEH
                    </h3>


                </div>
                <div className="" onClick={handleMobileNav}>
                    <AlignJustify color="white" className="sm:hidden cursor-pointer" />
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