import React from "react";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      {" "}
      {/* app__navbar is a clean css BEM methodology */}
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
        <p><a href='#home' style={{textDecoration: 'none'}}> <span>Micael</span></a> </p>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }} // x = from 300 to 0 (origin)
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {" "}
            {/* special type of div element, using framer motion */}
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            {/* {document.querySelectorAll('*')
                                .forEach(element => element.addEventListener('click', () => 
                                setToggle(false)
                            ))} */}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
