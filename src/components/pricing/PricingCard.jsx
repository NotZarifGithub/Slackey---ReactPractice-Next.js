"use client"

import {BsCheckAll} from "react-icons/bs"
import Button from "../ui/components/Button"
import { motion } from "framer-motion"

const PricingCard = () => {

  return (
    <motion.section 
      className="flex flex-col gap-5 max-w-[450px] rounded-xl p-[20px] md:px-[40px] bg-white"
      initial={{boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}
    >

      {/* title */}
      <div className="flex flex-col gap-3">
        <div className='flex items-center justify-between'>
          <h1 className='text-[#974ae8] capitalize text-sm font-bold md:text-xl'>
            startup
          </h1>

          <div className='bg-black/20 px-[20px] border-black border rounded-lg shadow-xl'>
            <h2 className='text-[#974ae8] text-xs font-semibold md:text-base '>
              Most popular 
            </h2>
          </div>
        </div>

        {/* description */}
        <div>
          <p className="text-sm md:text-base">
            A plan that scales with your rapidly growing business.
          </p>
        </div>
      </div>

      {/* pricing */}
      <div className='flex items-end justify-center'>
        <div className='text-4xl font-bold md:text-5xl'>
          $5
        </div>
        <div className=' text-black/50'>
          /month
        </div>
      </div>

      <div className="cursor-pointer">
        <Button text={"purchase now"}/>
      </div>

      {/* details */}
      <div>
        {/* 1 */}
        <div className="flex items-start">
          <div className="p-[10px]">
            <BsCheckAll className="md:text-2xl"/>
          </div>
          <div className="text-sm font-semibold md:text-base text-black/70">
            <span className="font-black text-black"> Continuous Access</span> --- Gain access to our extensive library of components and resources every month, ensuring you always have the latest tools at your fingertips.
          </div>
        </div>

        {/* 2 */}
        <div className="flex items-start">
          <div className="p-[10px]">
            <BsCheckAll className="md:text-2xl"/>
          </div>
          <div className="text-sm font-semibold md:text-base text-black/70">
            <span className="font-black text-black"> All-Inclusive Benefits</span> --- Download and utilize any component from our library as many times as you need. No limits, no restrictions.
          </div>
        </div>

        {/* 3 */}
        <div className="flex items-start">
          <div className="p-[10px]">
            <BsCheckAll className="md:text-2xl"/>
          </div>
          <div className="text-sm font-semibold md:text-base text-black/70">
            <span className="font-black text-black"> Ongoing Updates</span> --- We&apos;re committed to enhancing your creative journey. We regularly introduce fresh components, keeping you at the forefront of design and development trends.
          </div>
        </div>

        {/* 4 */}
        <div className="flex items-start">
          <div className="p-[10px]">
            <BsCheckAll className="md:text-2xl"/>
          </div>
          <div className="text-sm font-semibold md:text-base text-black/70">
            <span className="font-black text-black"> Priority Suggestions</span> --- As a subscriber, your voice matters. You can submit suggestions for new components, and we&apos;ll prioritize your ideas to meet your evolving needs.
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default PricingCard