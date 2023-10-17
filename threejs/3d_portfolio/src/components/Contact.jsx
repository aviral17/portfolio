// https://www.emailjs.com/
// npm i react-type-animation

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";

import pic from "../assets/pic1.jpg";
import email1 from "../assets/email.png";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { useInView } from "react-intersection-observer";
import ball from "../assets/3d/ball.png";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only triggers once
  });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  const badSuspension = {
    hidden: {
      y: "-10vh", // Decides how low the notification jumps in the screen before going to original position
      opacity: 0,
      // transform: "scale(0) rotateX(-360deg)",
    },
    visible: {
      y: "5vh",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Aviral",
          from_email: form.email,
          to_email: "avi14320@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          // toast.success(
          //   "Thank you. I will get back to you as soon as possible."
          // );

          toast.dismiss();
          toast.custom(
            (t) => (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={badSuspension}
                className={`max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 z-50 `}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={pic}
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-2xl font-bold font-quick text-rose-500 ">
                        Aviral 😎
                      </p>

                      {/* <p className="mt-1 text-sm text-gray-500">
                        Thanks for reaching out! I appreciate your interest in
                        my work and I’m looking forward to connecting with you.
                        I’ll get back to you as soon as possible.
                      </p> */}
                      <TypeAnimation
                        cursor={false}
                        sequence={[
                          `Thanks for reaching out, ${form.name}! I appreciate your interest in my work and I’m looking forward to connecting with you. I’ll get back to you as soon as possible.`,
                        ]}
                        wrapper="p"
                        className="mt-1 text-sm text-gray-500"
                        speed={70}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={() => {
                      (e) => e.stopPropagation();
                      console.log("Close button clicked");
                      toast.dismiss(t.id);
                    }}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            ),
            { duration: 60000 }
          );

          // alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <span className="hash-span" id="contact">
        &nbsp;
      </span>
      {/* <motion.img
        src={ball}
        className="absolute top-[10px] -right-[700px] w-[300px] h-[300px]"
      /> */}
      <div
        className={`xl:mt-12 pb-20 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="relative bg-black-100 p-8  rounded-2xl mt-[147px] ml-[100px] md:ml-[500px] w-[300px] md:w-[398px]"
        >
          <motion.img
            ref={ref}
            src={email1}
            // variants={slideIn("down", "tween", 0.2, 1)}
            // variants={textVariant(0.8)}
            // whileInView={{ opacity: [0, 0.5, 1], x: [-200, 0] }}
            animate={animated ? { opacity: 1, x: [-200, 50, 0] } : {}}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute -left-[1vh] -top-[146px] z-10 w-40"
          />
          <p className={`${styles.sectionSubText} mt-6`}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          {/* Currently, we are not using ref or formRef */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-[10px] flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-p ${
                !form.name || !form.email || !form.message
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={!form.name || !form.email || !form.message}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
        <Toaster duration={0} position="top-center" />
      </div>
      <div className="opacity-layer pt-5 -z-10"></div>
    </div>
  );
};

// export default SectionWrapper(Contact, "contact");

export default Contact;
