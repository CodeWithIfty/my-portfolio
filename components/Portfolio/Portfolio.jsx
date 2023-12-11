"use client";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Survey Ocean",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Vero amet eius quam voluptatem molestias consequuntur illum ipsam ut! Vero amet eius quam voluptatem molestias consequuntur illum ipsam ut!",
  },
  {
    id: 2,
    title: "Survey Ocean",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Vero amet eius quam voluptatem molestias consequuntur illum ipsam ut! Vero amet eius quam voluptatem molestias consequuntur illum ipsam ut!",
  },
  {
    id: 3,
    title: "Survey Ocean",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Vero amet eius quam voluptatem molestias consequuntur illum ipsam ut! Vero amet eius quam voluptatem molestias consequuntur illum ipsam ut!",
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
      <div className="flex justify-center items-center w-full h-full overflow-hidden">
        <div className="max-w-[1366px] h-full  m-auto flex justify-center items-center gap-12">
          <div className="flex-[1] h-1/2" ref={ref}>
            <Image
              src={item.img}
              width={500}
              height={500}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div className="flex-[1] flex flex-col gap-7" style={{ y }}>
            <h2 className="text-7xl placeholder:">{item.title}</h2>
            <p className="text-gray-200 text-2xl">{item.desc}</p>
            <button className="px-4 py-2 border-y-primary">See Demo</button>
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
      <div className="sticky top-0 left-0 pt-32 text-center  text-4xl">
        <h2 className="section-title mb-8 xl:mb-5 text-center mx-auto ">
          Featured Projects
        </h2>
        <motion.div className="h-2 bg-white" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item, index) => (
        <Single key={index} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
