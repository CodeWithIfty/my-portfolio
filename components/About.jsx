import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  Calendar,
  Phone,
  PhoneCall,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import DevImg from "./DevImg";
import Image from "next/image";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Iftekhirull",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+880 1586-103550",
  },
  {
    icon: <MailIcon size={20} />,
    text: "codewithiftekhar@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on  15 Aug, 2004",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "DIploma in Mechatronics",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Rajshahi, Bangladesh",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "example univercity",
        qualification: "DIploma In Engineering",
        year: "2015 - 2018",
      },
      {
        university: "example univercity",
        qualification: "DIploma In Engineering",
        year: "2015 - 2018",
      },
      {
        university: "example univercity",
        qualification: "DIploma In Engineering",
        year: "2015 - 2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "example company",
        role: "DIploma In Engineering",
        years: "2015 - 2018",
      },
      {
        company: "example company",
        role: "DIploma In Engineering",
        years: "2015 - 2018",
      },
      {
        company: "example company",
        role: "DIploma In Engineering",
        years: "2015 - 2018",
      },
    ],
  },
];
const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front end development",
      },
      {
        name: "Javascript",
      },
      {
        name: "Backend development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] p-12 xl:p-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row ">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <div className="bg-hero_shape w-[380px] h-[380px] bg-center bg-cover  bg-no-repeat    blob"></div>
          </div>
          {/* Tabs */}
          <div className="flex-1 ">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tab content */}
              <div className="text-lg mt-12 xl:mt-8 ">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 mb-4">
                      UnMatched Service Quality for over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experience.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div className="">{item.text}</div>
                        </div>
                      ))}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div className="">English, Bangla, spanish, italian</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value="qualification">
                  <div className="">
                    <h3 className="h3 mb-8 text-center xl:text-left ">
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper*/}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  key={index}
                                  className="flex gap-x-8 group "
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4 ">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, year } = item;
                              return (
                                <div
                                  key={index}
                                  className="flex gap-x-8 group "
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4 ">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16 ">
                      <h4 className="text-xl font-semibold mb-2">SKills</h4>
                      <div className=" border-b border-border mb-4">
                        {/* Skills List */}
                      </div>
                      {getData(skillData, "skills").data.map((item, index) => {
                        const { name } = item;
                        return (
                          <div
                            key={index}
                            className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                          >
                            <div className="font-medium">{name}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Tools */}
                    <div className="">
                      <h4 className=" text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                    </div>
                    {/* Tools list */}
                    <div className="flex gap-x-8  justify-center xl:justify-start">
                      {getData(skillData, "tools").data.map((item, index) => {
                        const { imgPath } = item;
                        return (
                          <div className=" " key={index}>
                            <Image
                              src={imgPath}
                              width={48}
                              height={48}
                              alt=""
                              priority
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
