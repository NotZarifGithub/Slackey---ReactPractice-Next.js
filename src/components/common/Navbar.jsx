"use client"

import {GiAstronautHelmet} from "react-icons/gi"
import {RxHamburgerMenu} from "react-icons/rx"
import {IoIosArrowDown} from "react-icons/io"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Button from "../ui/components/Button"
import { usePathname } from "next/navigation"

const Navbar = () => {

  const navlinks = [
    {
      title: "home",
      path: "/",
    },
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
  const [isScrolled, setIsScrolled] = useState(false)
  
  // get path to have a customized navbar
  const pathname = usePathname()
  const isPathHome = () => {
    return pathname === "/"
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);
  
  return (
    <header className={`sticky top-0 z-20 ${isPathHome() ? "bg-[transparent] " : 'bg-white border-b shadow-sm '}`}>
      <section className={`flex items-center py-[20px] justify-between px-[20px] w-full ${isScrolled && isPathHome() ? "border-b shadow-sm bg-white transition duration-300" : ''}`}>
        
        {/* navlinks */}
        <div className="flex-row hidden gap-2 md:flex ">
          {navlinks.map((item, index) => (
            <Link key={index} href={item.path} className="flex items-center gap-1 hover:text-[#3d205c]"> 
              <AnimatePresence mode="wait">
                <motion.h1 
                  className={`text-base font-semibold capitalize`} 
                  whileHover={{rotate: 180, y: 3, transition: {type: "tween"}}}
                  exit={{rotate: 180, y: 3, transition: {type: "tween"}}}
                >
                  {item.title}
                </motion.h1>                
              </AnimatePresence>
              <motion.div>
                
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
            <Link href={'/'} className="">
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
              className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen gap-3 bg-white md:hidden -z-10"
              variants={menuVariants}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              {navlinks.map((item, index) => (
                <Link key={index} href={item.path} onClick={() => setIsActive(!isActive)}>
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