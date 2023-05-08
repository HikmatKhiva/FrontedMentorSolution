import { AsideCardI } from "../interface/interfaces"
import { motion } from "framer-motion"
import { fadeIn } from '../utils/motions'
const AsideCard = ({ card, index }: AsideCardI) => {
    const { body, title } = card
    return (
        <motion.div
            variants={fadeIn(index * .4, 0.75,'bottom')}
            className="text-white font-inter pb-5 border-b border-grayish-blue mb-5 ">
            <h3 className="font-medium lg:text-xl xl:text-2xl mb-2 cursor-pointer hover:text-soft-orange transition-all duration-300">{title}</h3>
            <p className="text-grayish-blue text-xs xl:text-base">{body}</p>
        </motion.div>
    )
}
export default AsideCard