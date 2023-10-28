"use client"

import {GiAstronautHelmet} from "react-icons/gi"
import {RxHamburgerMenu} from "react-icons/rx"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

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
      path: "/more",
    },
  ]

  cosnt [isActive, setIsActive] = useState(false)
  
  return (
    <header>
      <section className="flex items-center py-[10px] justify-between px-[10px]">
        
        {/* navlinks */}
        <div className="flex-row hidden gap-2 md:flex">
          {navlinks.map((item, index) => (
            <Link key={index} href={item.path}> 
              <h1 className="text-lg font-semibold capitalize">
                {item.title}
              </h1>
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

          <div className="flex flex-row gap-2">
            {/* sign in */}
            <Link href={'/'}>
              <h1 className="text-lg font-semibold capitalize">
                sign in
              </h1>
            </Link>

            {/* purchase button */}
            <Link href={'/pricing'}>
              <h1 className="text-lg font-semibold capitalize">
                unlock everything
              </h1>
            </Link>
          </div>

          {/* hamburger-link */}
          <button className="flex text-2xl md:hidden">
            <RxHamburgerMenu/>
          </button>
        </div>
            
        {/* hamburger-link-dropdown */}
        <motion.div className="absolute top-[56px] left-0 flex flex-col items-center justify-center w-screen h-[calc(100vh-56px)] md:hidden">
          {navlinks.map((item, index) => (
            <Link key={index} href={item.path}>
              <h1 className="text-lg font-semibold capitalize">
                {item.title}
              </h1>
            </Link>
          ))}
        </motion.div>
      </section>
    </header>
  )
}

export default Navbar