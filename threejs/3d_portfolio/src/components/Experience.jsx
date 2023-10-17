import React, { useRef } from "react";
// https://www.npmjs.com/package/react-vertical-timeline-component
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { useInView } from "react-intersection-observer";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import thunderbolt from "../assets/thunderbolt.png";
import ScrollProgress from "./others/VerticalScroll";
import credit from "../assets/3d/credit.png";
import computer1 from "../assets/3d/headphone1.png";

// We are using useInView  as the name suggests, do some operations when in view
// But now after using this, the Card components of experiences get into same vertical alignment, so we used `position here`

// ****************************************************************************************************
const ExperienceCard = ({ experience, index }) => {
  // Use In View
  const { ref, inView } = useInView({
    threshold: 0, // Trigger animation when the card is 50% in view
    // triggerOnce: true, // Only trigger animation once
  });

  const animate = inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 };
  const position = index % 2 === 0 ? "left" : "right"; // alternate position

  const alternate = index % 2 === 0;

  // Use In View

  return (
    <motion.div ref={ref} animate={animate} transition={{ duration: 0.5 }}>
      <VerticalTimelineElement
        contentStyle={{
          // background: "#1d1836",
          background: "rgba(151, 19, 153, 0.9)",
          color: "#fff",
          borderRadius: "10px",
        }}
        // #232631 instead of violet
        contentArrowStyle={{ borderRight: "7px solid  violet" }}
        date={experience.date}
        iconStyle={{
          background: alternate ? "#111827" : "#cbd5e1",
          color: alternate ? "#f43f5e" : "blue",
        }} // {{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full font-bold text-lg">
            <p> {`</>`}</p>
          </div>
        }
        // icon={
        //   <div className="flex justify-center items-center w-full h-full">
        //     <img
        //       src={code} //{experience.icon}
        //       alt={experience.company_name}
        //       className="w-[60%] h-[60%] object-contain"
        //     />
        //   </div>
        // }
        position={position} // adding position prop
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </motion.div>
  );
};

// ****************************************************************************************************
// Check Notes.txt
const Experience = React.forwardRef((props, ref) => {
  const timelineRef = useRef(null);
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.5,
  // });

  return (
    <div>
      <motion.img
        src={credit}
        className="absolute w-[500px] h-[500px] left-[250px] top-[700px] rotate-[-50deg]"
      />
      <div>
        {/* I think textVariant() has no effect */}
        <motion.div variants={textVariant()}>
          {/* <p className={`${styles.sectionSubText} text-center`}> */}
          <p
            className={`text-rose-500 text-xl uppercase font-semibold text-center`}
          >
            <span className="hover:shadow-2xl inline-block cursor-pointer  text-underline hover:shadow-blue-300 rounded-lg">
              What I have done so far
            </span>
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            <span className="text-violet-600 text-[100px]">W</span>ork
            Experience.
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <div ref={ref} className="timeline-container">
            <ScrollProgress experienceRef={ref} />
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                  index={index} // adding index prop for position
                />
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <motion.img className="absolute -top-[1px] -z-10" src={thunderbolt} />
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
      </div>
    </div>
  );
});

export default SectionWrapper(Experience, "work");
