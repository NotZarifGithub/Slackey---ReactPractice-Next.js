"use client"

import { motion } from 'framer-motion'
import PricingCard from './PricingCard'

const PricingPage = () => {
  return (
    <section className='flex flex-col items-center md:justify-center text-start px-[20px] md:px-0 md:text-center gap-10 h-[calc(100vh-85px)] py-[40px]'>

      {/* title & desc */}
      <div className='flex flex-col max-w-[800px] gap-5 '>
        <h1 className='text-2xl font-bold md:text-5xl '>
          Flexible Pricing Tiers for Every Team
        </h1>
        <p className='max-w-[600px] mx-auto text-base md:text-lg font-medium text-black/60'>
          <span className='border-[#974ae8] border-b-2'>
            Streamline your SaaS development with our UI Components
          </span>
          , offering pricing plans to accommodate teams of any size. Enjoy the ease of integration and exceptional user experiences without the hassle of UI development.
        </p>
      </div>

      {/* card */}
      <div className='flex text-start '>
        <PricingCard />
      </div>
    </section>
  )
}

export default PricingPage