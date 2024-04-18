import { NAVBAR_DATA } from "@/other/data"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"

const MobileNav = ({ isOpen, setIsOpen }) => {

    useEffect(() => {
        const handleScrollLock = () => {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        };

        handleScrollLock();

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, }}
            className="mobile-nav"
            layout="position"
        >
            <div className="pt-6 cursor-pointer">
                <div className="flex flex-col gap-4 p-4 ">
                    {NAVBAR_DATA.map(item => (
                        <div key={item.id} className="p-2 ">
                            <Link onClick={() => { setIsOpen(false) }} href={item.href}>
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default MobileNav