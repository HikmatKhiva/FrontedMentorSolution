import { fadeAnimate } from "../config/motion";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import { ShortLink } from "../types";
import { motion } from "framer-motion";
const Link = ({ link, index }: { link: ShortLink; index: number }) => {
  const [copied, copyToClipboard] = useCopyToClipboard();
  const handleCopy = () => copyToClipboard(link.full_short_link);
  return (
    <motion.div
      variants={fadeAnimate("top", index * 0.3, 1)}
      initial="initial"
      animate="finish"
      className="bg-white mt-3 rounded-md shadow overflow-x-hidden py-5 flex flex-wrap items-center justify-between"
    >
      <p className="lg:text-lg px-5  flex-grow  ">{link.original_link}</p>
      <span className="w-full left-0 md:hidden inline-block  border-gray border-b"></span>
      <div className="flex px-5 flex-grow flex-wrap gap-2 md:flex-grow-0 items-center mt-2">
        <p className="lg:text-lg flex-grow text-cyan">{link.full_short_link}</p>
        <button
          onClick={handleCopy}
          type="button"
          className={` ${
            !copied ? "bg-cyan" : "bg-dark-violet"
          } px-5 flex-grow w-full md:w-fit  text-white hover:opacity-70 transition-all duration-200 rounded-md font-bold py-3`}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </motion.div>
  );
};
export default Link;