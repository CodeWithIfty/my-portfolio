"use client";
import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: ["MERN Stack Developer", "Youtuber", "Freelancer"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriter;
