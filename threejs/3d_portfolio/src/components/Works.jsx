// import React from "react";

// const Works = () => {
//   return <div>Works</div>;
// };

// export default Works;

import React, { useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import sparkles from "../assets/sparkles.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    // index * 0.5, to delay for each card, so one card after another will come
    <div variants={fadeIn("up", "spring", index * 0.1, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px]  w-[370px]"
      >
        <motion.div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* Adding another <div><img /></div>  we can use it for the live Website url for that project */}
            <div
              onClick={() => window.open(source_code_link, "_blank")} // _blank will open github in new link
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { scrollYProgress } = useScroll();
  const isScreenMd = window.matchMedia("(min-width: 768px)").matches;

  const scales = useTransform(scrollYProgress, [0, 1], [0, 1.5]);

  // console.log("Window scrollY = ", window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollable =
  //       document.documentElement.scrollHeight - window.innerHeight;
  //     const scrolled = window.scrollY;

  //     const sovaimg = document.querySelector(".sova-img");

  //     if (scrolled > 4009 && scrolled < 5500) {
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
    <motion.div>
      {/* through textVariant() up to down motion of text inside this motion.div or of any other page */}
      {/* we can pass delay value inside textVariant(5), 5sec delay, if we not passing anything, by default, it will be 0 */}

      {/* ref={ref}  inside motion.div just below */}
      <motion.div ref={ref} className="sova-img">
        <motion.img
          initial={{ x: -75, opacity: [0] }}
          animate={inView ? { x: 0, opacity: [0.2, 0.6, 1] } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="-z-10 sova-img 2xl:absolute hidden 2xl:block  2xl:right-[100%]"
          src={sparkles}
        />
      </motion.div>

      <div>
        <motion.div variants={textVariant()}>
          {/* <p className={`${styles.sectionSubText} `}>My work</p> */}
          <p
            className={`text-rose-500 text-xl inline-block cursor-pointer text-underline uppercase font-semibold`}
          >
            My work
          </p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <motion.div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)} // check motion.js fadeIn()
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </motion.div>

        <motion.div
          // style={{
          //   scale: scales,
          // }}
          style={isScreenMd ? { scale: scales } : {}}
        >
          <motion.div
            className="mt-20 flex justify-center items-center flex-wrap flex-row gap-7"
            // style={{
            //   scaleY: scrollYProgress,
            //   scale: scales,
            // }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Works, "projects");
