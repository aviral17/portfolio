import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../hoc";
import "./others/footer.css";
// import logo1 from "../assets/logos/newlogo3.svg";
import logo1 from "../assets/logos/aviral5.svg";
import linkedin from "../assets/logos/linkedin1.png";
import bgblur from "../assets/tripguide.png";

const Footer = () => {
  const { scrollYProgress } = useScroll();
  const scales = useTransform(scrollYProgress, [0, 1], [0, 2.9]);

  return (
    <div>
      <div className="opacity-layer"></div>
      <div>
        <footer className="new_footer_area bg_color pt-[200px]">
          <div>
            <div className="relative left-[50px] -top-[50px] w-[100px] h-[100px]">
              <motion.div className="absolute inset-0 opacity-80  w-[250px] h-[250px]">
                <motion.img src={logo1} className="w-full h-full" />
              </motion.div>
            </div>
            <div className="flex space-x-10">
              <a href={`mailto:${import.meta.env.VITE_APP_EMAIL}`}>
                <div className="relative p-6 left-[50vh] -top-[4vh] border border-gray-900 rounded-2xl hover:bg-purple-700 w-[200px] hover:w-[250px] flex items-center justify-center h-[50px] bg-transparent cursor-pointer transition-all ease-in-out delay-400 duration-700">
                  <p
                    className={`text-white text-xl inline-block cursor-pointer text-underline-footer font-semibold`}
                  >
                    E-mail Me 📨
                  </p>
                </div>
              </a>

              <a
                href={import.meta.env.VITE_APP_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: "absolute", left: "calc(50vh - 280px)" }}
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="relative w-[60px] h-[60px]  p-2 left-[50vh] -top-[4.5vh]"
                />
              </a>
            </div>
          </div>

          <motion.div className="new_footer_top">
            <div className="footer_bg"></div>
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

// export default SectionWrapper(Footer, "footer");
export default Footer;
