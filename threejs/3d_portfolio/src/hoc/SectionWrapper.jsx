import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { useEffect } from "react";

// The viewport prop defines the portion of the screen that triggers the animation. In this case, it is set to { once: true, amount: 0.25 }, which means that the animation will only trigger once when the wrapped component is within 25% of the viewport,   FOR more, check  Notes.txt

// StarWrapper function returning another function, thats why its HOC
// staggerContainer() function have hidden and show property  which is being used in  initial and whileInView,  For more, see staggerContainer() in Notes.txt

// useEffect(() => {
//   window.addEventListener("scroll", () => {
//     console.log("Scrolled");
//   });
// }, []);

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* we can use id or idName wherever we want in the application, it will work and show the component till that element where id/idName is being used */}
        {/* To scroll to next page like about page,  hash-span class has no effect in this */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;

/* regarding above <span></span> tag

When an ID is clicked, it triggers the default behavior of the browser, which is to scroll to the corresponding element with that ID. The `span` element with the ID specified in the SectionWrapper is placed above the About component, so when the ID is clicked, the browser scrolls to that position.

***** NOTE  *****
When you click the link with the href attribute set to "#about", the browser looks for an element on the page that has an id attribute with the value "about". When it finds that element, it scrolls the page to position the "about" section at the top of the viewport.

The span element in the link is just used for styling purposes and does not affect the functionality of the link itself.

*/
