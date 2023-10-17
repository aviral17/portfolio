import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (scrolled > 1013 && scrolled < 1783) {
        setActiveSection("about");
      } else if (scrolled > 1783 && scrolled < 3500) {
        setActiveSection("work");
      } else if (scrolled > 3998 && scrolled < 6000) {
        setActiveSection("projects");
      } else if (scrolled > 6275 && scrolled < 6778) {
        setActiveSection("contact");
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // By using fixed positioning, the Navbar component is taken out of the normal document flow, which means it will not be affected by its parent element's dimensions. If we remove the fixed positioning and use h-screen instead, the Navbar component will take up the full height of its parent element, which in this case is the bg-hero-pattern div.
    <nav
      className={`${styles.paddingX} w-[500px] flex items-center justify-center py-5 fixed top-0 z-10  right-10 `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Link to the top of the page as we will be using Higher Order Component */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* visit logo.com to create own logo */}

          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            XYZZ &nbsp;
            <span className="sm:block hidden"> | ABC Company</span>
          </p> */}
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-secondary" : "text-secondary"
              }  ${
                activeSection === nav.id ? `nav-${nav.id}` : "text-secondary"
              } hover:text-white text-[18px] font-medium hover:shadow-2xl hover:shadow-gray-200 cursor-pointer color-shape rounded-lg p-2 `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end translate-x-12 items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* For Mobile Navigation Bar   */}
          {/* My screen is big so to see Menu bar, I need to use responsive from inspect element or open inspect element and shrink window size  */}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
