import { useState } from "react";
import { motion } from "framer-motion";

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.2,
      delay: 0.05 * i,
    },
  }),
};

export default function Logo({ i, title, url, small = true }) {
  const [show, setShow] = useState(false);
  return !small ? (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={i}
      className="relative flex items-center justify-center cursor-pointer w-max"
    >
      <p
        className={`absolute mb-[54px] bottom-0 py-1 px-2 rounded-md w-max bg-transGray text-white ${show ? "opacity-1" : "opacity-0"
          } transition-opacity duration-100`}
      >
        {title}
      </p>
      <img
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        src={url}
        alt=""
        className="max-h-12 max-w-12 hover:drop-shadow-md"
      />
    </motion.div>
  ) : (
    <div className="relative flex items-center justify-center cursor-pointer w-max">
      <p
        className={`absolute mb-10 bottom-0 py-1 px-2 rounded-md w-max bg-transGray text-white ${show ? "opacity-1" : "opacity-0"
          } transition-opacity duration-100`}
      >
        {title}
      </p>
      <img
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        src={url}
        alt=""
        className="max-h-8 max-w-8"
      />
    </div>
  );
}
