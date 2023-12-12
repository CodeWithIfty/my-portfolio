"use client";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Github, Globe } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Survey Ocean",
    img: "https://i.ibb.co/0Gmxc2G/Screenshot-20.png",
    desc: " Excited to share the completion of my latest project – a comprehensive Polling and Survey application built using the MERN stack! 👨‍💻🚀",
    live: "https://survey-ocean.web.app/",
    client: "https://github.com/CodeWithIfty/survey-ocean-client",
    server: "https://github.com/CodeWithIfty/survey-ocean-server",
  },
  {
    id: 2,
    title: "Talent Hub",
    img: "https://i.ibb.co/K0kTW4M/Screenshot-21.png",
    desc: "Welcome to our MERN Web Marketplace application! This app is designed to help users post web development, digital marketing, and graphic design jobs and receive bids from other users. 👨‍💻🚀",
    live: "https://talenthub-c77ac.web.app/",
    client: "https://github.com/CodeWithIfty/talenthub-client",
    server: "https://github.com/CodeWithIfty/talenthub-server",
  },
  {
    id: 3,
    title: "Foody",
    img: "https://i.ibb.co/v4SZB2L/Screenshot-22.png",
    desc: "This is a brand-based website project focusing on Food and Beverage products. Users can explore and shop for their favorite brands, add products to their cart, and enjoy a seamless shopping experience.👨‍💻🚀",
    live: "https://b8a10-brandshop-client-s-3e90b.web.app/",
    client: "https://github.com/CodeWithIfty/brandShop-client-side",
    server: "https://github.com/CodeWithIfty/brandShop-server-side",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="portfolio">
      <div className="flex justify-center items-center w-full h-full overflow-hidden ">
        <div className="container xl:mx-auto grid xl:grid-cols-2 justify-center items-center gap-5 mt-40 mx-10">
          {/* Image */}
          <div
            className="rounded overflow-hidden drop-shadow-xl xl:col-span-1  border-2 border-primary shadow-black dark:shadow-white  "
            ref={ref}
          >
            <Image
              src={item.img}
              width={700}
              height={300}
              alt=""
              className="w-full h-full "
            />
          </div>
          {/* Text */}
          <motion.div
            className="xl:col-span-1  flex flex-col justify-center  items-center xl:items-start text-center xl:text-left   gap-2 mt-16 xl:mt-0"
            style={{ y }}
          >
            <h2 className="h1">{item.title}</h2>
            <p className="xl:text-xl ">{item.desc}</p>
            <div className="flex gap-x-4 p-2 bg-opacity-25">
              <a
                href={item.live}
                target="_blank"
                className="flex items-center text-lg gap-x-2 hover:text-primary"
              >
                <Globe className="text-sm" />
                Demo
              </a>
              <a
                href={item.client}
                target="_blank"
                className="flex items-center text-lg gap-x-2 hover:text-primary"
              >
                <Github className="text-sm" />
                Client
              </a>
              <a
                href={item.server}
                target="_blank"
                className="flex items-center text-lg gap-x-2 hover:text-primary"
              >
                <Github className="text-sm" />
                Server
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0 xl:pt-32 pt-[5rem] text-center  text-4xl">
        <h2 className="section-title mb-8 xl:mb-5 text-center mx-auto ">
          Featured Projects
        </h2>
        <motion.div className="h-2 bg-primary " style={{ scaleX }}></motion.div>
      </div>
      {items.map((item, index) => (
        <Single key={index} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
