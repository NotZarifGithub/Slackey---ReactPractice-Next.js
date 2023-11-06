import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const AnimatedSections = ({children}) => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  return (
    <motion.section
      ref={ref}    
      initial={{translateY: 100, opacity: 0}}
      animate={{translateY: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
      transition={{
        duration: 0.9,
        ease: [0.17, 0.55, 0.55, 1],
      }}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSections