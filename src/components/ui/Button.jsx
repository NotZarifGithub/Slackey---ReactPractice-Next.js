import {BsUnlock} from "react-icons/bs"
import { color, motion } from "framer-motion"

const Button = ({text, lock}) => {
  return (
    <motion.div
      className={`flex flex-row justify-center items-center gap-1 rounded-full bg-gradient-to-r ${lock ? "px-[20px] py-[10px]" : ''} from-[#974ae8] to-purple-400`}
      style={{boxShadow: "0px 0px 5px rgba(0,0,0,0.2"}}
      whileHover={{ y: -3}}
    >
      {lock && (
        <div>
          <BsUnlock />
        </div>
      )}
      <div>
        <motion.h1 className={`text-sm md:text-base font-semibold text-white capitalize ${!lock ? "px-[20px] py-[10px]" : ''}`} whileHover={{color: "#3d205c"}}>
          {text}
        </motion.h1>
      </div>
    </motion.div>
  )
}

export default Button 