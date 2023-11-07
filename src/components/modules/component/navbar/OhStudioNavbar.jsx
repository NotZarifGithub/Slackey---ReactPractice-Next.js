"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const OhStudioNavbar = () => {

  const [link, setLink] = useState(0)
  
  return (
    <section className='h-[60vh] justify-center items-start text-center flex bg-[#c08ae3]'>

      <div className="py-[20px]">
        
        {/* navbar */}
        <div className='bg-[#f8f4f4] rounded-full p-[5px]'>
          <ul className='relative flex items-center justify-center gap-1 font-medium'>
            <li className=' py-[10px] px-[30px] z-10 ' onClick={() => setLink(1)}>
              <button className="capitalize">
                home  
              </button>  
            </li>
            <li className=' py-[10px] px-[30px] z-10' onClick={() => setLink(2)}>
              <button className="capitalize">
                profile  
              </button>  
            </li>
            <li className=' py-[10px] px-[30px] z-10' onClick={() => setLink(3)}>
              <button className="capitalize">
                contact
              </button>  
            </li>

            {/* sliding animation */}
            <motion.div 
              className='absolute bg-white py-[22px] px-[50px] rounded-full left-0'
              initial={{x: 0}}
              animate={{ x: link === 1 ? 0 : link === 2 ? 100 : link === 3 ? 210 : 0 }} 
              transition={{duration: 0.4, ease: [0.22, 1, 0.36, 1]}}
            >
            </motion.div>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OhStudioNavbar