"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className="h-full max-w-[1366px] m-auto flex gap-12 items-center"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="flex-1 flex flex-col gap-10 " variants={variants}>
        <motion.h1 className="h1 leading-10" variants={variants}>
          Lets work together
        </motion.h1>
        <motion.div className="" variants={variants}>
          <h2>Mail</h2>
          <span>codewithiftekhar@gmail.com</span>
        </motion.div>
        <motion.div className="" variants={variants}>
          <h2>Address</h2>
          <span>Rajshahi, Bangladesh</span>
        </motion.div>
        <motion.div className="" variants={variants}>
          <h2>Phone</h2>
          <span>+880 1586-103550</span>
        </motion.div>
      </motion.div>
      <div className="flex-1 relative">
        <motion.div
          className="absolute m-auto  stroke-orange-400"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width="450px"
            height="450px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M14.87 32a17.67 17.67 0 0 1 0-25"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M20 26.87a10.41 10.41 0 0 1 0-14.71"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="m28 30-5.43 5.43a8.77 8.77 0 0 0-2.57 6.2V52"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M40 56h9a3 3 0 0 0 3-3V19a3 3 0 0 0-3-3H31a3 3 0 0 0-3 3v19.33a2 2 0 0 0 3.42 1.42l4.46-4.45a3.23 3.23 0 0 1 4.41-.24 3.12 3.12 0 0 1 .12 4.53l-3.29 3.29a9.83 9.83 0 0 0-2.88 7 6.25 6.25 0 0 1-6.24 6.2"
            />
            <line x1="39" y1="52" x2="41" y2="52" />
            <line x1="36" y1="20" x2="44" y2="20" />
          </svg>
        </motion.div>
        <motion.form
          className="flex flex-col gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input
            type="text"
            required
            placeholder="Name"
            className="p-5 bg-transparent border border-white text-white rounded"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="p-5 bg-transparent border border-white text-white rounded"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="8"
            placeholder="messages"
            className="p-5 bg-transparent border border-white text-white rounded"
          ></textarea>
          <button className="border-none bg-primary p-5">Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
