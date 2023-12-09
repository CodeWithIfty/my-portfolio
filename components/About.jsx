import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  Calendar,
  Phone,
  PhoneCall,
  GraduationCap,
} from "lucide-react";

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
        qualification: "DIploma In Engineering",
        year: "2015 - 2018",
      },
      {
        company: "example company",
        qualification: "DIploma In Engineering",
        year: "2015 - 2018",
      },
      {
        company: "example company",
        qualification: "DIploma In Engineering",
        year: "2015 - 2018",
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
      </div>
    </section>
  );
};

export default About;
