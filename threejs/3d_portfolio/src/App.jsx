import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";
import SplashScreen from "./components/SplashScreen";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import up from "./assets/up3.png";
import { useRef, useState } from "react";

const App = () => {
  const [showApp, setShowApp] = useState(false);

  const experienceRef = useRef(null);

  return (
    <>
      <SplashScreen onFinished={() => setShowApp(true)} />
      {showApp && (
        <BrowserRouter>
          <div className="relative z-0 bg-primary">
            {/* herobg.png only for this div */}
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience ref={experienceRef} />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
            <Footer />

            <Link
              to="/"
              className="up_arrow"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <motion.img
                src={up}
                alt="Up arrow"
                className="fixed right-1 xl:right-24 bottom-24 z-50 w-[4em] h-[4em]"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                  },
                }}
              />
            </Link>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
