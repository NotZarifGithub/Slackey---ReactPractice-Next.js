"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import Link from "next/link";

const HamburgerNavigation = () => { 

  const menuVariants = {
    initial: {
      y:"100%",
    },
    enter: {
      y:0,
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y:"100%",
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    }
  }
  
  const [isActive, setIsActive] = useState(false)
  
  return (
    <section>
      <div className='bg-fuchsia-700 h-[60vh] flex justify-center items-center '>

        {/* hamburger button */}
        <motion.button
          className={`bg-white rounded-2xl p-[15px] ${isActive ? 'hidden' : "inline"}`}
          whileHover={{ rotate: 180, scale: 1.2}}
          whileTap={{ scale: 1}}
          onClick={() => setIsActive(!isActive)}
        >
          <motion.div
            className="text-xl"         
          >
            <RxHamburgerMenu />
          </motion.div>
        </motion.button>

        {/* menu */}
        <AnimatePresence mode="popLayout">
          {isActive && 
            <motion.div
              className={`${isActive ? 'flex' : "hidden"} bg-white h-[60vh] w-full justify-center items-center relative text-center`}
              variants={menuVariants}
              initial="initial"
              animate={isActive ? 'enter' : "initial"}
              exit="exit"
            >

              {/* close button */}
              <motion.button
                className="absolute top-[70px]"
                onClick={() => setIsActive(!isActive)}
                whileHover={{scale: 2}}
              >
                <AiOutlineClose />
              </motion.button>
              <ul className="text-2xl uppercase">

                {/* home */}
                <Link href={'/'}>
                  <h1>
                    home
                  </h1>
                </Link>

                {/* works */}
                <Link href={'/'}>
                  <h1>
                    works
                  </h1>
                </Link>

                {/* project */}
                <Link href={'/'}>
                  <h1>
                    project
                  </h1>
                </Link>
                
                {/* contact */}
                <Link href={'/'}>
                  <h1>
                    contact
                  </h1>
                </Link>
              </ul>
            </motion.div>
          }    
        </AnimatePresence>
      </div>
    </section>
  )
}

export default HamburgerNavigation