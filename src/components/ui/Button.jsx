import {BsUnlock} from "react-icons/bs"
import { color, motion } from "framer-motion"

const Button = ({text, lock}) => {
  return (
    <motion.div
      className="flex flex-row items-center gap-1 rounded-full px-[10px] py-[10px]"
      style={{boxShadow: "0px 0px 5px rgba(0,0,0,0.2"}}
      whileHover={{color: "#3d205c", y: -3}}
    >
      {lock && (
        <div>
          <BsUnlock />
        </div>
      )}
      <div>
        <h1 className="text-base font-semibold capitalize">
          {text}
        </h1>
      </div>
    </motion.div>
  )
}

export default Button