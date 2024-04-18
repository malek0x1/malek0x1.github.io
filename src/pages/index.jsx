import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { Noto_Sans } from "next/font/google";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProjectItem from "@/components/ProjectItem";
import { PROJECTS } from "@/other/data";
import SectionTitle from "@/components/SectionTitle";
import ContactUs from "@/components/ContactUs";
import { useState } from "react";
import Footer from "@/components/footer";

const font = Noto_Sans({ subsets: ["latin"], weight: "500" });

export default function Home() {
  const { scrollY } = useScroll();
  const maxScroll = 1000;
  const scaleX = useTransform(
    scrollY,
    [0, maxScroll],
    [0.7, 1],
    { clamp: true }
  );

  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <main className={`${font.className}`} style={{ minHeight: "600px", margin: "0px" }}>
      <div style={{ backgroundColor: `var(--background)` }} className="sm:pb-20 pb-4">
        <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
        <Hero />
        <div className="margin--below--hero">
          <div className="image-sequence" style={{ overflow: "hidden" }}>
            <motion.div style={{ scaleX }}>
              <motion.div
                className="image-sequence"
                style={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  alt=""
                  src="/3.svg"
                  layout="fill"
                // objectFit=""
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-2">
        <div id="about" className="about-us relative container max-w-3xl mt-20">
          <SectionTitle color="accent" title="About Me" />
          <p className="text-center max-w-3xl mx-auto text-xs">
            Experienced React.js Developer with a strong background in building dynamic and responsive web applications. Skilled in implementing clean, organized code and user-centric interfaces. Proven ability to collaborate effectively with development teams to deliver high-quality solutions. Demonstrates meticulous attention to detail and a proactive approach to problem-solving. Excels in optimizing front-end performance and enhancing user experiences.
          </p>
        </div>
      </div>
      <div id="projects" className="my-20 container mx-auto">
        <SectionTitle title="Featured Projects" />
        <div className="grid gap-20">
          {PROJECTS.map(item => (
            <ProjectItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <ContactUs />
      <Footer />
    </main>
  );
}
