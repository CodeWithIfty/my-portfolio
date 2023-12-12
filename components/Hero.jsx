import { Download, Send } from "lucide-react";
import Link from "next/link";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { Button } from "./ui/button";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";
import TypeWriter from "./TypeWriter";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-12  h-[95vh]  bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none flex justify-center items-center ">
      <div className="container mx-auto">
        <div className="">
          <div className="flex justify-between  ">
            {/* text  */}
            <div className="flex max-w-[600px] flex-col justify-center  mx-auto xl:mx-0 text-center xl:text-left mt-16">
              <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                Hello, I&apos;m
              </div>
              <h1 className="text-5xl font-bold mb-4 ">
                Md. Iftekhirull (Ifty)
              </h1>
              <div className="mb-6 xl:text-2xl text-xl uppercase font-bold max-w-[490px] text-primary">
                <TypeWriter />
              </div>
              {/* button */}
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <a href="#contact">
                  <Button className="gap-x-2">
                    Contact me <Send size={18} />
                  </Button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1soialGdx2Rip4M25L4H147XcjXOe1xQk/view?usp=sharing"
                  target="_blank"
                >
                  <Button variant="secondary" className="gap-x-2">
                    Download Resume <Download size={18} />
                  </Button>
                </a>
              </div>

              {/* socials */}
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </div>

            {/* image  */}
            <div className="hidden xl:flex relative">
              {/* Badge 1 */}
              {/* <Badge
              containerStyles="absolute top-[24%] right-[24rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years of Experience"
            />
    */}

              <div className="bg-hero_shape w-[380px] h-[380px] bg-center bg-cover  bg-no-repeat absolute  -top-1 -right-2 blob"></div>
            </div>
          </div>
          {/* Tech Stack */}
          <div className="mt-44 xl:flex  items-center  gap-x-16 hidden ">
            <h1 className="text-xl font-semibold border-r-2 border-black dark:border-white px-3">
              Tech Stack
            </h1>
            <div className="flex gap-x-10">
              <Image
                src="/hero/icons/html-5.png"
                width={32}
                height={32}
                alt=""
              />
              <Image
                src="/hero/icons/css-3.png"
                width={32}
                height={32}
                alt=""
              />
              <Image src="/hero/icons/js.png" width={32} height={32} alt="" />
              <Image
                src="/hero/icons/react.png"
                width={32}
                height={32}
                alt=""
              />
              <Image
                src="/hero/icons/node-js.png"
                width={32}
                height={32}
                alt=""
              />
              <Image
                src="/hero/icons/tailwind.png"
                width={32}
                height={32}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* icons */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
