import { motion } from "framer-motion";

const fadeInVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
};

export default function About() {
  return (
    <motion.main
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="about"
      className="flex md:flex-row flex-col md:gap-6 items-center md:items-start"
    >
      <h1 className="w-72 bg-gradient-to-r from-pink to-yellow bg-clip-text inline-block text-transparent">
        About Me
      </h1>
      <p className="text-justify flex-1 text-[14px] md:text-[16px]">
        With over a decade of formal art education, I am deeply passionate about
        the intersection of art and technology. Today, I combine the best of
        both worlds by designing and developing products that are not only
        functional but also meaningful and enjoyable.
        <br />
        <br />
        My forte lies in full-stack engineering, but am always eager to step
        beyond my comfort zone, exploring new technology and industries to
        broaden my perspectives.
        <br />
        <br />
        This year, I embarked on NUS Overseas College (NOC) in Stockholm, which
        is an incredibly valuable opportunity, allowing me to immerse in the
        local start-up ecosystem, as well as hone my technical skills as a
        software developer at Kisi, where I’m contributing to real-world
        projects and learning from an innovative team.
        <br />
        <br />
        Outside of tech, I’m an avid backpacker and hiker. I love exploring new
        places and perspectives — something that continues to shape both my
        personal growth and creative approach to problem-solving.
      </p>
    </motion.main>
  );
}
