import { motion } from "framer-motion";
import { svgVariants } from "../config/motion";
const CloseSvg = () => {
  return (
    <motion.svg className="w-8" viewBox="-0.5 0 25 25">
      <motion.path
        variants={svgVariants}
        initial="start"
        animate="end"
        transition={{ duration: 0.3, delay: 0.2 }}
        d="M3 21.32L21 3.32001"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgVariants}
        initial="start"
        animate="end"
        transition={{ duration: 0.3 }}
        d="M3 3.32001L21 21.32"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </motion.svg>
  );
};
const OpenSvg = () => {
  return (
    <motion.svg className="w-8" viewBox="0 0 24 24">
      <motion.path
        variants={svgVariants}
        initial="start"
        animate="end"
        transition={{ duration: 0.8 }}
        d="M4 6H20M4 12H20M4 18H20"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </motion.svg>
  );
};
const WebSvg = () => {
  return (
    <motion.svg className="w-8" viewBox="0 0 60 60">
      <motion.path
        variants={svgVariants}
        initial="start"
        animate="end"
        transition={{ duration: 1,delay:.4 }}
        d="M30,53.5c-6.171,0-9.5-12.108-9.5-23.5S23.829,6.5,30,6.5,39.5,18.608,39.5,30,36.171,53.5,30,53.5Zm0-44c-2.714,0-6.5,7.8-6.5,20.5S27.286,50.5,30,50.5s6.5-7.8,6.5-20.5S32.714,9.5,30,9.5Z"
        fill="#fff"
      />
      <motion.path
        variants={svgVariants}
        initial="start"
        animate="end"
        transition={{ duration: 1,delay:.6 }}
        d="M50,23.5H10a1.5,1.5,0,0,1,0-3H50a1.5,1.5,0,0,1,0,3Z"
        fill="#fff"
      />
      <motion.path
        variants={svgVariants}
        initial="start"
        animate="end"
        transition={{ duration: 1,delay:.8 }}
        d="M50,39.5H10a1.5,1.5,0,0,1,0-3H50a1.5,1.5,0,0,1,0,3Z"
        fill="#fff"
      />
      <motion.path
        variants={svgVariants}
        initial="start"
        animate="end"
        transition={{ duration: 1,delay: 1}}
        d="M30,53.5A23.5,23.5,0,1,1,53.5,30,23.527,23.527,0,0,1,30,53.5Zm0-44A20.5,20.5,0,1,0,50.5,30,20.523,20.523,0,0,0,30,9.5Z"
        fill="#fff"
      />
      <motion.path
        variants={svgVariants}
        initial="start"
        animate="end"
        transition={{ duration: 1,delay:1.2 }}
        d="M8,31.5A1.5,1.5,0,0,1,6.5,30,23.527,23.527,0,0,1,30,6.5a1.5,1.5,0,0,1,0,3A20.523,20.523,0,0,0,9.5,30,1.5,1.5,0,0,1,8,31.5Z"
        fill="#fff"
      />
    </motion.svg>
  );
};
export { CloseSvg, OpenSvg, WebSvg };
