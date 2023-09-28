import { scaleAnimate } from "../config/motion";
import { Serivce } from "../types";
import { motion } from "framer-motion";
const ServiceCard = ({
  service,
  index,
}: {
  service: Serivce;
  index: number;
}) => {
  return (
    <motion.figure
      variants={scaleAnimate(index * 0.3)}
      initial="initial"
      animate="finish"
      className="bg-white shadow rounded-md flex flex-col  card lg:px-8 p-5 pb-10 relative"
    >
      <span className="bg-dark-violet  rounded-full absolute service-image -top-10 inline-block p-5">
        <img src={service.image} alt={service.title} />
      </span>
      <figcaption className="mt-10 text-center">
        <h3 className="lg:text-2xl text-xl text-dark-violet font-bold">{service.title}</h3>
        <p className="lg:text-lg mt-5 text-gray-violet font-medium">
          {service.text}
        </p>
      </figcaption>
    </motion.figure>
  );
};
export default ServiceCard;
