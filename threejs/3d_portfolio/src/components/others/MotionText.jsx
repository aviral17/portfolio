import * as React from "react";
import { motion } from "framer-motion";
import "./motiontext.css";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

export const MotionText = () => (
  <div className="container">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item"
    >
      <motion.path
        d="M5.85 0L5.85-1.5 24.25-1.5 13.65-30.65 2.5 0 0.9 0 13.65-35.05 26.4 0 5.85 0ZM33.15-33.5L33.15-35 53.65-35 40.9 0.05 28.15-35 29.75-35 40.9-4.35 51.5-33.5 33.15-33.5ZM60.95-35L60.95 0 59.45 0 59.45-35 60.95-35ZM74.74 0L74.74-1.5 88.54-1.5 82.49-18.1 85.29-19.7Q88.74-21.6 88.74-25.75L88.74-25.75Q88.74-33.5 76.94-33.5L76.94-33.5 72.34-33.5 72.34 0 70.84 0 70.84-35 76.94-35Q83.54-35 86.89-32.58 90.24-30.15 90.24-25.75L90.24-25.75Q90.24-20.75 86.04-18.4L86.04-18.4 84.34-17.45 90.69 0 74.74 0ZM99.24 0L99.24-1.5 117.64-1.5 107.04-30.65 95.89 0 94.29 0 107.04-35.05 119.79 0 99.24 0ZM127.14-1.5L146.54-1.5 146.54 0 125.64 0 125.64-35 127.14-35 127.14-1.5Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 3, ease: "easeInOut" },
          //   fill: { duration: 3, ease: [0, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  </div>
);
