import Link from "next/link"
import { motion } from "framer-motion"

const ComponentsCard = ({logo, component, path}) => {

  const cardVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1,  },
    tap: { scale: 1 }
  };

  return (
    <motion.section
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      animate="animate"
    >
      <Link href={{pathname: path}} className="border rounded-lg p-[20px] flex flex-col gap-3">
        <div className="text-2xl text-[#6452b3]">
          {logo}
        </div>
        <h2 className="text-2xl font-semibold capitalize">
          {component}
        </h2>
      </Link>         
    </motion.section>
  )
}

export default ComponentsCard