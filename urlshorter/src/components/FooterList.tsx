import { scaleAnimate } from "../config/motion";
import { FooterLink } from "../types";
import { motion } from "framer-motion";
const FooterList = ({ links } : { links: FooterLink }) => {
  return (
    <ul className="w-full flex-grow sm:w-fit text-center sm:text-start">
      <li className="text-white font-bold mb-5 text-lg ">{links.title}</li>
      {links.links.map((link, index) => (
        <motion.li
          variants={scaleAnimate(index * .6)}
          initial="initial"
          animate="finish"
          className="mb-1"
          key={link.id}
        >
          <a
            className="text-gray-violet hover:text-cyan font-medium transition-all duration-300 text-lg"
            href={link.url}
          >
            {link.title}
          </a>
        </motion.li>
      ))}
    </ul>
  );
};
export default FooterList;