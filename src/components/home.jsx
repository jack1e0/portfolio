import { FaAngleDown, FaGithub, FaLinkedin } from "react-icons/fa6";
import Footer from "./footer";
import Header from "./header";
import About from "./about";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const handleScroll = (targetDiv) => {
    const element = document.getElementById(targetDiv);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <div
        ref={ref}
        className="flex flex-col lg:flex-row justify-start gap-10 lg:gap-24 w-full pt-32 md:pt-40 lg:pt-56 px-10 md:px-20 lg:px-24 xl:px-32 bg-bottom h-[110vh] sm:h-[120vh] md:h-[140vh]"
        style={{
          backgroundImage: "url(bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "40% 100%",
        }}
      >
        <div className="w-full flex justify-center lg:h-60 lg:w-60">
          <img src="profile.jpg" className="h-40 w-40 md:h-60 md:w-60 lg:max-h-full lg:max-w-full object-contain rounded-full" />
        </div>
        <div className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold ">
          <p>Hi,</p>
          <div className="flex flex-row items-center gap-10 text-6xl sm:text-7xl md:text-8xl xl:text-9xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              className="bg-gradient-to-r from-pink to-blue bg-clip-text inline-block text-transparent drop-shadow-lg"
            >
              i'm Jackie
            </motion.p>
            <button onClick={() => handleScroll("about")}>
              <FaAngleDown className="text-5xl text-blue" />
            </button>
          </div>

          <div className="text-3xl flex gap-5 pt-16 md:pt-24 text-dark">
            <a
              className="text-dark"
              href="https://www.linkedin.com/in/jackie-guo-7ba87a249/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-dark"
              href="https://github.com/jack1e0"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}
