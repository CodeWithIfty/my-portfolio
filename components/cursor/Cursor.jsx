"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  console.log(position);
  return (
    <motion.div
      className="w-[50px] h-[50px] rounded-full border-2 fixed border-[#FE7B67]  z-50 hidden xl:block"
      animate={{ x: position.x, y: position.y }}
    ></motion.div>
  );
};

export default Cursor;
