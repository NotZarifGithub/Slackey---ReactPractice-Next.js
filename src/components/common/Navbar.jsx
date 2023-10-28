"use client"

import {GiAstronautHelmet} from "react-icons/gi"
import {RxHamburgerMenu} from "react-icons/rx"
import {IoIosArrowDown} from "react-icons/io"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Button from "../ui/Button"

const Navbar = () => {

  const navlinks = [
    {
      title: "module",
      path: "/module",
    },
    {
      title: "pricing",
      path: "/pricing",
    },
    {
      title: "FAQ",
      path: "/faq",
    },
    {
      title: "more",
      path: "/",
    },
  ]

  const menuVariants = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: 0,
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: "-100%",
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  }
  
  const [isActive, setIsActive] = useState(false)
  
  return (
    <header>
      <section className="flex items-center py-[20px] justify-between px-[30px] md:bg-white fixed w-full">
        
        {/* navlinks */}
        <div className="flex-row hidden gap-2 md:flex ">
          {navlinks.map((item, index) => (
            <Link key={index} href={item.path} className="flex items-center gap-1 hover:text-[#3d205c]"> 
              <motion.h1 className={`text-base font-semibold capitalize`}>
                {item.title}
              </motion.h1>
              <motion.div
                whileHover={{rotate: 180, y: 3}}
              >
                
                {/* arrow logo for "more" link */}
                <IoIosArrowDown className={` ${index === 3 ? "inline-block" : "hidden"} text-sm`}/>  
              </motion.div>              
            </Link>
          ))}
        </div>

        {/* icon logo */}
        <Link href={'/'}>
          <div className="text-4xl ">
            <GiAstronautHelmet />
          </div>
        </Link>

        {/* cta */}
        <div className="flex flex-row items-center gap-4">

          <div className="flex flex-row items-center gap-4">
            {/* sign in */}
            <Link href={'/'}>
              <h1 className="text-base font-semibold capitalize hover:text-[#3d205c]">
                sign in
              </h1>
            </Link>

            {/* purchase button */}
            <Link href={'/pricing'}>
              <Button text={"unlock everything"} lock={true}/>
            </Link>
          </div>

          {/* hamburger-link */}
          <motion.button 
            className="flex text-2xl rounded-lg md:hidden p-[5px]" onClick={() => setIsActive(!isActive)}
            whileHover={{boxShadow: "0px 0px 10px rgba(61,32,92,0.8)"}}
          >
            <RxHamburgerMenu/>
          </motion.button>
        </div>
            
        {/* hamburger-link-dropdown */}    
        <AnimatePresence mode="popLayout">
          {isActive && (
            <motion.div 
              className=" absolute top-[56px] left-0 flex flex-col items-center justify-center w-screen h-[calc(100vh-56px)] md:hidden -z-10 gap-3"
              variants={menuVariants}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              {navlinks.map((item, index) => (
                <Link key={index} href={item.path}>
                  <h1 className="text-4xl font-semibold capitalize">
                    {item.title}
                  </h1>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </header>
  )
}

export default Navbar