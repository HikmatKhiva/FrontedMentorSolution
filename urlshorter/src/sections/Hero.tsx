import { working } from "../assets";
import { motion } from "framer-motion";
import { fadeAnimate } from "../config/motion";
const Hero = () => {
  return (
    <section id="hero" className="py-10 font-poppins pb-28">
      <div className="container mx-auto flex flex-wrap-reverse items-center justify-between">
        <div className="md:w-1/2 text-center md:text-start">
          <motion.h1
            variants={fadeAnimate("left", 1, 1)}
            initial="initial"
            animate="finish"
            className="lg:text-6xl text-4xl font-medium"
          >
            More than just <br />
            shorter links
          </motion.h1>
          <motion.p
            variants={fadeAnimate("left", 1.6, 1)}
            initial="initial"
            animate="finish"
            className="lg:w-[70%] mt-1 mb-3 lg:text-lg text-gray-violet"
          >
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </motion.p>
          <motion.a
            variants={fadeAnimate("left", 2, 1)}
            initial="initial"
            animate="finish"
            className="inline-block bg-cyan hover:opacity-50 transition-all duration-300 text-white py-3 px-6 rounded-3xl"
            href=""
          >
            Get Started
          </motion.a>
        </div>
        <img
          className="md:w-1/2 w-full lg:translate-x-40 mb-5 md:mb-0 translate-x-10"
          src={working}
          alt="illustration-working"
        />
      </div>
    </section>
  );
};
export default Hero;