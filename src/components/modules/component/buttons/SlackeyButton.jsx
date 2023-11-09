"use client"

import {BsUnlock} from "react-icons/bs"
import { motion } from "framer-motion"

const Button = ({}) => {
  return (
    <section className="h-[60vh] flex justify-center items-center text-center">
      <motion.button
      className={`flex py-[10px] px-[20px] flex-row justify-center items-center gap-1 rounded-full bg-gradient-to-r from-[#974ae8] to-purple-400`}
      style={{boxShadow: "0px 0px 5px rgba(0,0,0,0.2"}}
      whileHover={{ y: -3}}
    >
      <div>
        <BsUnlock />
      </div>
      <div>
        <motion.h1 className={`text-sm md:text-base font-semibold text-white capitalize `} whileHover={{color: "#3d205c"}}>
          unlock everything
        </motion.h1>
      </div>
    </motion.button>
    </section>
  )
}

export default Button 