import { web_3_Desktop } from '../assets'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Section = () => {
    return (
        <section className='col-span-4 lg:col-span-3'>
            <LazyLoadImage effect="blur" src={web_3_Desktop} className=' xl:h-[450px] w-full' alt="web-desktop" />
            <div className="flex gap-5 font-inter mt-5 flex-wrap lg:flex-nowrap">
                <div className="text-2xl md:text-4xl xl:text-6xl font-bold text-very-dark-blue">
                    <motion.h1
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: .8 }}
                    >The Bright Future of Web 3.0 ?</motion.h1>
                </div>
                <div className="flex flex-col justify-between">
                    <motion.p
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 6 }}
                        className='text-sm md:text-xl xl:text-2xl'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?</motion.p>
                    <div className="">
                        <motion.button
                            whileInView={{ translateX: [100, 0], opacity: [0, 1] }}
                            transition={{ duration: .9, type: 'tween' }}
                            className='bg-soft-red text-sm md:text-base mt-2 xl:text-lg self-start uppercase tracking-wide hover:bg-black  transition-all duration-300 text-white px-5 py-3 '>
                            Read more
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section