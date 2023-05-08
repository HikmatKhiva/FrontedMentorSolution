import { useState } from 'react'
import { logo, menu, menuClose } from '../assets'
import { navList } from '../data'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { fadeIn, container } from '../utils/motions'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = (): void => setMenuOpen(!menuOpen);
  return (
    <nav>
      <div className="flex justify-between items-center font-inter">
        {/* Logo */}
        <div>
          <LazyLoadImage effect="blur" src={logo} alt="logo" />
        </div>
        {/* nav list */}
        <button onClick={handleMenu} className='lg:hidden'>
          <img src={menu} alt="menu-bar" />
        </button>
        <div className={`flex lg:hidden fixed w-screen top-0 ${menuOpen ? 'right-0' : '-right-[100%]'} transition-all duration-300 z-10 h-screen `}>
          <div onClick={handleMenu} className="bg-transparent w-[30%]"></div>
          <div className="bg-white w-[70%]">
            <button onClick={handleMenu} className='absolute top-5 right-5'>
              <img src={menuClose} alt="menu-close" />
            </button>
            <motion.ul variants={container} animate="visible" initial="hidden" className='flex lg:items-center gap-4 mt-32 lg:pt-0 flex-col items-start'>
              {navList.map((item, index) => <motion.li variants={fadeIn(index * .2, .6, 'left')}
                className='ml-4 cursor-pointer hover:text-soft-orange transition-all duration-300 text-2xl lg:text-base'
                key={item + index}>
                {item}
              </motion.li>)}
            </motion.ul>
          </div>
        </div>
        <motion.ul variants={container} initial="hidden" animate="visible" className='hidden lg:flex gap-4'>
          {navList.map((item, index) => <motion.li variants={fadeIn(index * .2, .6, '')}
            className='ml-4 cursor-pointer hover:text-soft-orange transition-all duration-300 '
            key={item + index}>
            {item}
          </motion.li>)}
        </motion.ul>
      </div>
    </nav>
  )
}
export default Navbar