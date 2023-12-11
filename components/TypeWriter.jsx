"use client";
import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: ["Frond End Developer", "MERN Stack Developer"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriter;
