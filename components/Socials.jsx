"use client";

import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://www.youtube.com/@CodeWithIftekhar",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/codewithifty/",
    name: <RiLinkedinFill />,
  },
  { path: "https://github.com/codewithifty", name: <RiGithubFill /> },
  {
    path: "https://www.facebook.com/codewithifty/",
    name: <RiFacebookBoxFill />,
  },
  { path: "/", name: <RiInstagramFill /> },
];
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link key={index} href={icon.path}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
