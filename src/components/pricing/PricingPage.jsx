"use client"

import AnimatedSections from '../ui/animation/AnimatedSections'
import PricingCard from './PricingCard'

const PricingPage = () => {
  return (
    <AnimatedSections > 
      <section className='flex flex-col px-[20px] py-[40px] items-center gap-10 '>

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
    </AnimatedSections>
  )
}

export default PricingPage