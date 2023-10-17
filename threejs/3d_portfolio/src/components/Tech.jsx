import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas"; // balls
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import cyberpunkk from "../assets/cyberpunkk.png";
// import sova from "../assets/sova.png";
import sovaa from "../assets/sovaa.png";
import star from "../assets/3d/reverse1.png";

import { useInView } from "react-intersection-observer";

const Tech = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollable =
  //       document.documentElement.scrollHeight - window.innerHeight;
  //     const scrolled = window.scrollY;

  //     const sovaimg = document.querySelector(".sova-img");

  //     if (scrolled > 4009 && scrolled < 5580) {
  //       sovaimg?.classList.add("pos");
  //     } else {
  //       sovaimg?.classList.remove("pos");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="flex flex-row flex-wrap">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* <motion.img
        src={star}
        className="absolute w-[400px] h-[400px] -z-10 -top-[2px] left-[465px]"
        // animate={{ rotateX: -190 }}
      /> */}

      <motion.div ref={ref}>
        {/* <motion.img
          initial={{ x: -50, opacity: [0] }}
          animate={{ x: 0, opacity: [1] }}
          // whileInView={{ x: [-50, 0], opacity: [0, 0.5, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={cyberpunkk}
          alt="profile_circle"
          className="absolute -z-10 -right-[5vw] w-[200vw]"
        /> */}

        <motion.img
          initial={{ x: -75, opacity: [0] }}
          animate={inView ? { x: 0, opacity: [0.2, 0.6, 1] } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          src={sovaa}
          alt="profile_circle"
          className="sova-img absolute z-10 -right-[5vw] w-[2000px]"
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
