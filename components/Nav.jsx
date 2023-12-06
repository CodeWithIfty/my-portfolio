import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "my Projects" },
  { path: "/contact", name: "contact" },
];
const Nav = ({ containerStyles, linkStyles, underLineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${linkStyles} capitalize`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underLineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
