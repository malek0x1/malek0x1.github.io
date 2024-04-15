import { Oswald } from 'next/font/google';
import { motion } from "framer-motion"

const font = Oswald({ subsets: ["latin"], weight: "700" });

const Hero = () => {
    const animationConfig = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true }

    }
    return (
        <div style={{ color: "#f1f1f1" }} className='p-10 mt-16 flex justify-center flex-col items-center gap-9'>
            <motion.h3
                {...animationConfig}
                transition={{ delay: 0.01 }}

                className={`sm:text-6xl text-5xl ${font.className}`}>Expert Front End Developer</motion.h3>
            <motion.p
                transition={{ delay: 0.2 }}
                {...animationConfig} className="text-1xl max-w-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas natus esse, fugit blanditiis deleniti ipsa, quasi ea</motion.p>
            <div className="flex">
                <motion.button
                    {...animationConfig}
                    transition={{ delay: 0.3 }}
                    className='rounded-sm py-3 px-12 bg-white text-black'>Featured Projects</motion.button>
            </div>
        </div>
    )
}

export default Hero