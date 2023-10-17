import React from "react";
// https://www.npmjs.com/package/react-tilt
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import setting from "../assets/3d/setting.png";
// import computer1 from "../assets/3d/headphone1.png";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    {/* fadeIn(direction, type, delay, duration) */}
    {/* 0.5 * index ---> delay = 0.5s,1s,1.5s,.... so on for respective card, It will feel like these cards are coming one by one */}
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      {/*these are tilt options inside options={{}} */}
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="mb-10">
      <motion.img
        src={setting}
        className="absolute -z-10 top-[500px] left-[400px] w-[400px] h-[400px]"
      />

      {/* <motion.div ref={ref}>
        <motion.img
          initial={{ x: -75, opacity: [0] }}
          animate={
            inView ? { x: [-50, 100, 0], opacity: [0.2, 0.4, 0.7, 1] } : {}
          }
          transition={{ duration: 2.2, ease: "easeInOut" }}
          src={computer1}
          className="absolute -z-10 top-[100px] -left-[700px] w-[900px] h-[900px]"
          // animate={{ rotateY: 110 }}
        />
      </motion.div> */}

      <motion.div>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <p
          className={`text-rose-500 text-xl text-underline uppercase inline-block cursor-pointer font-semibold`}
        >
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      {/* fadeIn(direction, type, delay, duration) */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
