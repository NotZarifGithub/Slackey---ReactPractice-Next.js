"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"

import {AiOutlineEye} from "react-icons/ai"
import {BsCode} from "react-icons/bs"

const ComponentsContainer = ({component, componentName, codeSnippet}) => {

  const [isActive, setIsActive] = useState(false)
  
  return (
    <section>
      <div className=''>
      <div className='flex flex-row justify-between py-[20px]'>
          
          {/* style title */}
          <div>
            <h1 className='text-base font-semibold capitalize md:text-xl'>
              {componentName}
            </h1>
          </div>

          {/* toggle for view or code */}
          <div className='flex flex-row font-semibold rounded-lg bg-slate-300'>
            <motion.button
              whileTap={{ scale: 0.95 }} // Scale down when clicked
              onClick={() => setIsActive(false)} 
              initial={{ x: -10 }} // Initial position outside the viewport on the left
              animate={{ x: 0 }} // Animate to the original position
              transition={{ type: 'spring', stiffness: 250, damping: 10 }} // Animation configuration
              className={`flex items-center gap-1 px-[10px] py-[5px] transition-colors ${!isActive ? "bg-gradient-to-r from-[#974ae8] to-purple-400" : ""} rounded-lg`}
            >
              <AiOutlineEye className="text-xl pt-[3px]"/>
              view
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }} // Scale down when clicked
              onClick={() => setIsActive(true)} 
              initial={{ x: 10 }} // Initial position outside the viewport on the right
              animate={{ x: 0 }} // Animate to the original position
              transition={{ type: 'spring', stiffness: 250, damping: 10 }} // Animation configuration
              className={`flex items-center gap-1 px-[10px] py-[5px} ${!isActive ? "" : "bg-gradient-to-r from-[#974ae8] to-purple-400"} rounded-lg`}
            >
              <BsCode className="text-xl pt-[3px]"/>
              code
            </motion.button>
          </div>
        </div>
        <div className={`${isActive ? "hidden" : ""}`}>
          {component}
        </div>

        {/* code snippet */}
        <div className={`${isActive ? "" : "hidden"}`}>
          <SyntaxHighlighter language="javascript" style={dracula} showLineNumbers={true} showInlineLineNumbers ={true} customStyle={{height: "60vh"}}>
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  )
}

export default ComponentsContainer