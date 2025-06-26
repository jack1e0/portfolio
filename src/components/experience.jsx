import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Logo from "./logo";
import { motion } from "framer-motion";
import { workList } from "./data";

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.05 * i,
    },
  }),
};

const Card = ({ title, company, date, desc, skills }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="cursor-pointer w-full bg-beige shadow-md rounded-lg overflow-hidden p-3 md:px-5 md:pr-10 mb-2  py-6 min-h-28 "
      onClick={() => setOpen(!open)}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-5">
          <div className="h-16 w-16 md:h-20 md:w-20 items-center flex justify-center">
            <img
              src={company.url}
              alt="logo"
              className="max-w-full max-h-full"
            />
          </div>
          <div className="flex flex-col md:pt-3">
            <p className="sm:text-lg md:text-xl font-semibold">{title}</p>
            <div className="md:text-lg text-dark block md:flex flex-row gap-5">
              <p className="font-semibold">{company.title}</p>
              <p className=" italic">{date}</p>
            </div>
          </div>
        </div>

        <FaAngleDown
          className={`${open ? "" : "-rotate-90"
            } mt-8 transition-all duration-300 ease-in-out`}
        />
      </div>
      {!open ? null : (
        <div className="ml-3 sm:ml-12 md:ml-24 pt-5">
          <p className="text-[14px] md:text-[16px]">
            {desc}
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {skills.map((skill, i) => (
              <Logo i={i} title={skill.title} url={skill.url} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Experience() {
  return (
    <main
      id="experience"
      className="lg:min-h-screen md:pb-32 flex flex-col items-center"
      style={{
        backgroundImage: 'url("bg2.png")',
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <h1 className="bg-gradient-to-r from-orange to-yellow bg-clip-text inline-block text-transparent">
        Work Experience
      </h1>
      <div className="w-full">
        {workList.map((work, i) => (
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
          >
            <Card
              title={work.title}
              company={work.company}
              date={work.date}
              desc={work.desc}
              skills={work.skills}
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
