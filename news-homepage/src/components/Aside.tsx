import AsideCard from "./AsideCard"
import { asideCard } from '../data'
import { motion } from 'framer-motion'
import { container } from '../utils/motions'
const Aside = () => {
  return (
    <aside className="col-span-4 lg:col-span-1 bg-very-dark-blue text-white font-inter p-5 lg:py-4 xl:py-8">
      <h2 className="text-2xl lg:text-4xl mb-4 text-soft-orange">New</h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {asideCard.map((card, index) => (
          <AsideCard key={card.id} index={index} card={card} />
        ))}
      </motion.div>
    </aside>
  )
}
export default Aside