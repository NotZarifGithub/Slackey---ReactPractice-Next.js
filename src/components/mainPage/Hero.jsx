"use client"

import Link from "next/link"
import Button from "../ui/components/Button"
import { motion } from "framer-motion"
import AnimatedSections from "../ui/animation/AnimatedSections"

const Hero = () => {
  return (
    <AnimatedSections >
      <motion.section className='flex flex-col items-center justify-center gap-3 max-w-[650px] mx-auto z-10 px-[20px]'>
      <div className='bg-gradient-to-r from-[#3d205c] to-purple-400 px-[10px] py-[2px] rounded-lg'>
        <h2 className='font-bold text-white'>
          simplify your development experience
        </h2>
      </div>
      <div className=''>
        <h1 className='text-5xl font-black md:text-6xl '>
          Dynamic and Animated UI Components for <span className='bg-gradient-to-r from-[#3d205c] via-purple-400 to-[#3d205c] text-transparent bg-clip-text'>React and Tailwind CSS</span>
        </h1>  
      </div>
      <div>
        <p className='text-lg md:text-xl'>
          Engaging, Interactive, and Animated UI Elements for <span className='font-bold'> React</span> , <span className='font-bold'>Tailwind CSS</span> , <span className='font-bold'>Framer Motion</span>, and Beyond. Seamlessly integrate them into your code with just a couple of clicks.
        </p>
      </div>

      {/* buttons */}
      <div className='flex items-start w-full gap-3 py-[20px]'>
        <Link href={'/module'} className='px-[5px]'>
          <Button text={'see all components'} />
        </Link>
        <Link href={'/pricing'} className='px-[5px]'>
          <Button text={'buy now'}/>
        </Link>
      </div>
      </motion.section>
    </AnimatedSections>    
  )
}

export default Hero