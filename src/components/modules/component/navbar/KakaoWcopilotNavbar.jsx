"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {AiOutlineArrowUp} from "react-icons/ai"
import styles from "../../../../app/styles.module.css"

const KakaoWcopilotNavbar = () => {

  const navlinks = [
    "demos",
    "company",
    "works",
    "blog",
    "all pages",
  ]

  const navlinksDropdown = [
    {
      links: [
        {
          title: "home 1",
          path: '/module/Navbars',
        },
        {
          title: "home 2",
          path: '/module/Navbars',
        },
        {
          title: "home 3",
          path: '/module/Navbars',
        },
      ],
    },
    {
      links: [
        {
          title: "about us",
          path: '/module/Navbars',
        },
        {
          title: "our team",
          path: '/module/Navbars',
        },
        {
          title: "testimonials",
          path: '/module/Navbars',
        },
        {
          title: "faq",
          path: '/module/Navbars',
        },
        {
          title: "pricing",
          path: '/module/Navbars',
        },
        {
          title: "contact us",
          path: '/module/Navbars',
        },
      ],
    },
    {
      links: [
        {
          title: "works 1",
          path: '/module/Navbars',
        },
        {
          title: "works 2",
          path: '/module/Navbars',
        },
        {
          title: "works 3",
          path: '/module/Navbars',
        },
        {
          title: "works details",
          path: '/module/Navbars',
        },
        {
          title: "works category",
          path: '/module/Navbars',
        },
      ],
    },
    {
      links: [
        {
          
        }
      ]
    },
    {
      links: [
        {
          title: "home 1",
          path: '/module/Navbars',
        },
        {
          title: "home 2",
          path: '/module/Navbars',
        },
        {
          title: "home 3",
          path: '/module/Navbars',
        },
        {
          title: "about us 1",
          path: '/module/Navbars',
        },
        {
          title: "about us 2",
          path: '/module/Navbars',
        },
        {
          title: "about us 3",
          path: '/module/Navbars',
        },
        {
          title: "our team",
          path: '/module/Navbars',
        },
        {
          title: "testimonials",
          path: '/module/Navbars',
        },
        {
          title: "faq",
          path: '/module/Navbars',
        },
        {
          title: "pricing",
          path: '/module/Navbars',
        },
        {
          title: "how we work",
          path: '/module/Navbars',
        },
        {
          title: "contact us",
          path: '/module/Navbars',
        },
        {
          title: "works 1",
          path: '/module/Navbars',
        },
        {
          title: "works 2",
          path: '/module/Navbars',
        },
        {
          title: "works 3",
          path: '/module/Navbars',
        },
        {
          title: "works details",
          path: '/module/Navbars',
        },
        {
          title: "works category",
          path: '/module/Navbars',
        },
        {
          title: "blog",
          path: '/module/Navbars',
        },
        {
          title: "blog details",
          path: '/module/Navbars',
        },
        {
          title: "blog category",
          path: '/module/Navbars',
        },
        {
          title: "404",
          path: '/module/Navbars',
        },
        {
          title: "style guide",
          path: '/module/Navbars',
        },
        {
          title: "coming soon",
          path: '/module/Navbars',
        },
        {
          title: "licensing",
          path: '/module/Navbars',
        },  
      ],
    }
  ]

  const dropdownButtonsVariants = {
    initial: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1], 
      }
    },
    hover: {
      x: 20,
      transition: {
        duration: 0.4, 
        ease: [0.33, 1, 0.68, 1],
      }
    },
  }

  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  return (
    <section className='h-[60vh] text-white bg-black py-[20px]'>
      
      {/* navbar */}
      <div className='flex items-center justify-between max-w-[1000px] mx-auto bg-transparent rounded-full px-[20px] py-20px'>
        <div className='flex items-center gap-10'>

          {/* home */}
          <div>
            <button className='text-3xl font-semibold uppercase'>
              Kakao
            </button>
          </div>

          {/* navlinks */}
          <ul className='flex gap-7'>
            {navlinks.map((item, index) => (
              <li 
                key={index} 
                className='relative flex flex-col hover:text-white/50'
                onMouseEnter={() => setIsDropdownVisible(index)}
              >
                <button className='font-semibold uppercase py-[30px] transition duration-500 text-sm tracking-[2px]' onClick={{}}>
                  {item}
                </button>

                {/* navlinks dropdown */}
                <div 
                  className={`absolute bg-black top-[100px] ${isDropdownVisible === index ? "flex" : "hidden"}  px-[20px] rounded-2xl border-white/60 border py-[30px]`}   
                  onMouseLeave={() => setIsDropdownVisible(null)}
                >
                  <ul className={`grid gap-3 w-[150px] ${index === 4 ? "grid-cols-3 w-[500px]" : "grid-cols-1"}`}>
                    {navlinksDropdown[index]?.links.map((subItem, subIndex) => (
                      <motion.li
                        key={subIndex}
                        className='w-[150px]'
                        variants={dropdownButtonsVariants}
                        initial="initial"
                        whileHover="hover"

                      >
                        <motion.button
                          className='items-center w-full gap-3 flex text-sm tracking-[2px] uppercase text-start text-white/50 px-[10px] hover:text-white transition duration-500'
                        >
                          {subItem.title}
                        </motion.button>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* get in touch */}
        <div className='bg-transparent border rounded-full border-white/40'>
          <button className={`flex items-center justify-center uppercase tracking-[2px] text-sm gap-2 py-[10px] px-[20px] ${styles.button_glow}`}>
            <motion.div>
              get in touch
            </motion.div>
            <motion.div
              initial={{rotate: 45}}
            >
              <AiOutlineArrowUp className='text-base'/>
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default KakaoWcopilotNavbar
