"use client"

import { motion } from "framer-motion"
import { AiOutlineArrowUp } from "react-icons/ai"

const button1 = () => {

  return (
    <section className='relative flex items-center justify-center text-center h-[60vh] bg-black'>
      <motion.button 
        className='text-base font-medium uppercase border border-white/40 px-[20px] py-[10px] rounded-full text-white flex items-center gap-2 tracking-[2px]'
        initial={{scale: 1,}}
        whileHover={{boxShadow: "0 0 10px 3px rgba(255, 255, 255, 0.6)"}}
      >
        get in touch
        <motion.div
          initial={{rotate: 45}}
        >
          <AiOutlineArrowUp />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default button1