import { Oswald } from 'next/font/google';

const headingFont = Oswald({ subsets: ["latin"], weight: "700" });

const SectionTitle = ({ title, color = "purple", classname = "" }) => {
    return (
        <h1
            style={color ? {
                color: `var(--${color})`
            } : {}
            }
            className={`text-4xl text-center mb-14 ${classname} ${headingFont.className}`}>{title}</h1>
    )
}

export default SectionTitle