import { scaleAnimate } from "../config/motion";
import { Social } from "../types";
import { motion } from "framer-motion";
const Social = ({ social, index }: { social: Social; index: number }) => {
  return (
    <a
      role="link"
      aria-label={`${social.title} link`}
      target="_blank"
      rel="noopener noreferrer"
      href={social.url}
    >
      <motion.img
        variants={scaleAnimate(index * 0.6)}
        initial="initial"
        animate="finish"
        src={social.image}
        alt={social.title}
      />
    </a>
  );
};
export default Social;