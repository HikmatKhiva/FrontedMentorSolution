import { CardI } from "../interface/interfaces"
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { fadeIn } from '../utils/motions'
const Card = ({ card, index }: CardI) => {
    const { body, img, title } = card
    return (
        <motion.div variants={fadeIn(index * .2, 1, 'left')} 
        className="flex-grow flex gap-1 lg:gap-0 items-stretch">
            <LazyLoadImage effect="blur" className="flex-grow md:w-[200px] md:h-[160px] h-[150px]" src={img} alt={title} />
            <div className="lg:ml-3">
                <span className="text-2xl xl:text-4xl text-grayish-blue">{'0' + index}</span>
                <h4 className="text-xl xl:text-2xl my-2 cursor-pointer hover:text-soft-orange duration-300 transition-all">{title}</h4>
                <p className="text-sm md:text-base xl:text-xl">{body}</p>
            </div>
        </motion.div>
    )
}

export default Card