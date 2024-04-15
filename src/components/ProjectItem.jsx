import { motion } from "framer-motion"
import Link from "next/link"

const ProjectItem = ({
    id,
    title,
    description,
    client,
    image,
    github,
    website,
    features
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-b-[#eee] pb-10"
        >
            <div className="flex sm:items-center flex-col sm:flex-row sm:gap-10 gap-4">
                <div className="flex-1 overflow-hidden">

                    <video
                        className="hover:scale-105 transition-all"
                        width={600}
                        height={600}
                        autoPlay
                        loop
                    >
                        <source src={image} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="flex-1 p-4 grid gap-8 ">
                    <h3 className="uppercase text-2xl">{title}</h3>
                    <div className="">
                        <div className="flex gap-2 opacity-50 mb-2">
                            <span className="text-xs">Client:</span>
                            <p className="text-xs">{client}</p>
                        </div>
                        <p className="text-xs text-gray-500 tracking-wide">
                            {description}
                        </p>
                    </div>
                    <div className="flex gap-3 justify-between flex-col">
                        <ul className="grid gap-4 ">
                            {features.map(item => (
                                <li key={item} className="text-xs projectItem--bullet">{item}</li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-6 my-6">
                            <Link className="w-full" href={website}>
                                <button className='hover:opacity-80 w-full rounded-sm bg-purple-500 text-white py-3 px-6 text-xs flex-1 sm:px-12 '>Visit Website</button>
                            </Link>
                            {github ? (
                                <Link className="w-full" href={github ? github : ""}>
                                    <button className={`hover:opacity-80 w-full rounded-sm bg-white text-purple-500 py-3 px-6 text-xs flex-1 sm:px-12 border border-purple-500 `}>Source Code</button>
                                </Link>
                            ) : (
                                <button className={`hover:opacity-80  rounded-sm bg-white text-purple-500 py-3 px-6 text-xs w-full  sm:px-12 border border-purple-500 ${!github && "cursor-not-allowed opacity-50"}`}>{"Rquire Invitation to Repo"}</button>
                            )}
                        </div>

                    </div>
                </div>


            </div>
        </motion.div>
    )
}

export default ProjectItem