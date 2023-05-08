import { Aside, Navbar, Section, Card, Footer } from "./components"
import { motion } from "framer-motion"
import { cards } from './data'
import { container } from './utils/motions'
function App() {
  return (
    <div className="App py-3">
      <div className="container mx-auto px-5">
        <Navbar />
        <main className='my-5 '>
          <div className="grid grid-cols-4 gap-5 ">
            <Section />
            <Aside />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex w-full my-5 mt-10 gap-5 flex-wrap lg:flex-nowrap">
            {cards.map((card, index) => (<Card key={card.id} index={index + 1} card={card} />))}
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
export default App
