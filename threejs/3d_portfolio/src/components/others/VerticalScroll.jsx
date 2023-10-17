import { useEffect, useState } from "react";

const ScrollProgress = ({ experienceRef }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      console.log(scrolled);

      const uparrow = document.querySelector(".up_arrow");

      if (scrolled > 1013) {
        uparrow?.classList.add("visible");
      } else {
        uparrow?.classList.remove("visible");
      }

      // if (Math.floor(scrolled) === scrollable) {
      //   console.log("You've reached the bottom!");
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ height: `${scrollProgress * 100}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
