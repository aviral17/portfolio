import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  parentRef,
}) => {
  const cardRef = useRef(null);

  const isScreenMd = window.matchMedia("(min-width: 768px)").matches;

  useEffect(() => {
    if (parentRef.current && cardRef.current && isScreenMd) {
      const handleMouseEnter = () => {
        if (index % 2 === 1) {
          cardRef.current.style.transform = "scale(1.19)";
        }
      };

      const handleMouseLeave = () => {
        if (index % 2 === 1) {
          cardRef.current.style.transform = "scale(1)";
        }
      };

      parentRef.current.addEventListener("mouseenter", handleMouseEnter);
      parentRef.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        parentRef.current.removeEventListener("mouseenter", handleMouseEnter);
        parentRef.current.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [index, parentRef, isScreenMd]);

  return (
    <motion.div
      ref={cardRef}
      // index * 0.5
      variants={fadeIn("", "spring", index * 0.6, 0.75)}
      // animate={index % 2 === 1 && isHovered ? { scale: 1.19 } : {}}
      // animate={index === 1 ? { scale: 1.19 } : {}}
      // whileHover={{ scale: 1.08 }} // 1.1
      transition={{ type: "spring", stiffness: 70, delay: 0.1 }}
      className={`bg-black-200 p-10 hover:shadow-lg hover:shadow-black rounded-3xl xs:w-[320px] w-full cursor-pointer feedback-card `}
      style={{ transition: "transform 0.5s ease-in-out" }}
    >
      <p className="text-white feedback-card-text font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>{" "}
              <span className="text-green-600">{name}</span>
            </p>
            <p className="mt-1 text-secondary feedback-card-texts text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const parentRef = useRef(null);
  return (
    <div
      ref={parentRef}
      className={`mt-12  bg-black-100 rounded-[20px] lg:h-[700px] group`}
    >
      {/* bg-tertiary */}
      <div
        className={`bg-[#4327e01c]  rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={`feedbacks-text text-testi ${styles.sectionHeadText}`}>
            Testimonials.
          </h2>
        </motion.div>
      </div>
      {/* ${styles.paddingX} gap-7 below class just before testimonials.map */}
      {/* className={`mt-5 lg:group-hover:-mt-20 transition-all duration-500 pb-14 sm:pl-8 pl-2 pr-2  flex flex-wrap gap-16`}  below div class */}
      <div
        className={`mt-5 lg:group-hover:-mt-20 transition-all duration-500 pb-14 flex items-center  flex-wrap gap-16`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            parentRef={parentRef}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
