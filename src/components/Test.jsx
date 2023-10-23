"use client"

import { motion } from "framer-motion"

const test = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="w-[200px] h-[200px] rounded-full bg-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      />
    </div>
  )
}

export default test