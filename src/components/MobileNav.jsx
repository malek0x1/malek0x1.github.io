import { NAVBAR_DATA } from "@/other/data"
import { motion } from "framer-motion"
import Link from "next/link"
import { RemoveScroll } from "react-remove-scroll"

const MobileNav = ({ setIsOpen }) => {


    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-nav"
        >
            <RemoveScroll>
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
            </RemoveScroll>
        </motion.div>
    )
}

export default MobileNav