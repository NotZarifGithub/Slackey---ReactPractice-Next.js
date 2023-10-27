"use client"

import { RxHamburgerMenu } from 'react-icons/rx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';

const SideNavigation = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const variants = {
    open: { rotate: 180 , transition: {type: 'spring', stiffness: 250, dampoing: 10}},
    closed: { rotate: 0 },
  };

  const menuVariants = {
    open: { x: 0 },
    closed: { x: '50%' }, // Start the menu outside the viewport on the right side
    exit: {x: "100%", transition: {type: 'spring', stiffness: 250, damping: 10}}
  };

  const transition = { type: 'spring', stiffness: 250, damping: 5 };
  
  return (
    <section className='border'>
      <div className='h-[60vh] bg-amber-500'>
        <div className={`items-center justify-center h-[60vh] flex ${isOpen ? "hidden" : "flex"}`}>
          <motion.button 
            className='text-2xl rounded-full bg-white p-[15px]' // Set initial animation state
            variants={variants}
            whileHover="open" // Add hover animation
            whileTap={{scale: 0.9}}
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxHamburgerMenu />
          </motion.button>
        </div>

        {/* open hamburger */}
        <AnimatePresence mode='popLayout'> 
          {isOpen && 
          <motion.div 
          className={`justify-start items-end h-[60vh] bg-white ${isOpen ? "flex" : "hidden"} relative`}
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"} // Animate the content
          exit="exit"
          transition={transition}
        >

          {/* close button */}
          <motion.button 
            className='absolute top-[40px] right-[40px] text-2xl rounded-full p-[15px]'
            variants={menuVariants}
            whileHover={{border: "1px solid #f59e0b", rotate: 180, color: "#f59e0b"}}
            whileTap={{scale: 0.9}}
            onClick={() => setIsOpen(false)}
          >
            <AiOutlineClose/>
          </motion.button>

          {/* navigations */}
          <div className='text-6xl font-extrabold p-[30px] flex flex-col items-start gap-3'>

            {/* home */}
            <motion.button 
              className='capitalize'
              whileHover={{rotate: -20}}
              transition={transition}
            >
              <Link href={'/'}>
                <h1 className='hover:text-[#f59e0b]'>
                  home
                </h1>
              </Link>
            </motion.button>

            {/* project */}
            <motion.button 
              className='capitalize'
              whileHover={{rotate: -20}}
              transition={transition}
            >
              <Link href={'/'}>
                <h1 className='hover:text-[#f59e0b]'>
                  project
                </h1>
              </Link>
            </motion.button>

            {/* works */}
            <motion.button 
              className='capitalize'
              whileHover={{rotate: -20}}
              transition={transition}
            >
              <Link href={'/'}>
                <h1 className='hover:text-[#f59e0b]'>
                  works
                </h1>
              </Link>
            </motion.button>

            {/* contact */}
            <motion.button 
              className='capitalize'
              whileHover={{rotate: -20}}
              transition={transition}
            >
              <Link href={'/'}>
                <h1 className='hover:text-[#f59e0b]'>
                  contact
                </h1>
              </Link>
            </motion.button>
          </div>
        </motion.div>}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SideNavigation;
