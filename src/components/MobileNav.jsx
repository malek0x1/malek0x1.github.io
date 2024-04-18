import { NAVBAR_DATA } from "@/other/data"
import { X } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const MobileNav = ({ setIsOpen }) => {


    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}


            className="fixed top-0 left-0 h-full w-full bg-white z-10">
            <div className="relative" onClick={() => { setIsOpen(false) }}>
                <X className="absolute right-6 top-6 cursor-pointer" />
            </div>

            <div className="pt-10 cursor-pointer">
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