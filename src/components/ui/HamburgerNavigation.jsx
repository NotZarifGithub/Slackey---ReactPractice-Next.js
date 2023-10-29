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
      <div className='bg-fuchsia-700 h-[60vh] flex justify-center items-center'>

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
              <ul className="flex flex-col gap-2 text-2xl uppercase">

                {/* home */}
                <Link href={'/'}>
                  <motion.h1
                    className="rounded-xl w-[120px]"
                    whileHover={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", scale: 1.3}}
                    whileTap={{scale: 1}}
                  >
                    home
                  </motion.h1>
                </Link>

                {/* works */}
                <Link href={'/'}>
                  <motion.h1
                    className="rounded-xl w-[120px]"
                    whileHover={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", scale: 1.3}}
                    whileTap={{scale: 1}}
                  >
                    works
                  </motion.h1>
                </Link>

                {/* project */}
                <Link href={'/'}>
                  <motion.h1
                    className="rounded-xl w-[120px]"
                    whileHover={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", scale: 1.3}}
                    whileTap={{scale: 1}}
                  >
                    project
                  </motion.h1>
                </Link>
                
                {/* contact */}
                <Link href={'/'}>
                  <motion.h1
                    className="rounded-xl w-[120px]"
                    whileHover={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", scale: 1.3}}
                    whileTap={{scale: 1}}
                  >
                    contact
                  </motion.h1>
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