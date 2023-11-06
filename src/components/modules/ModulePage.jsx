"use client"

import ComponentPart from "@/components/modules/ComponentPart"
import SectionPart from "@/components/modules/SectionPart"

import AnimatedSections from "../ui/animation/AnimatedSections"

const ModulePage = () => {

  // description for page info
  const pageDescription = [
    "Our components are meticulously crafted using a fusion of cutting-edge technologies, including React, Tailwind CSS, and a blend of animation techniques such as Framer Motion, and other JavaScript animation libraries. We are dedicated to maintaining our components' compatibility to ensure seamless integration into your projects. However, should you encounter any issues, please don't hesitate to reach out to us for assistance. Your success with our components is our top priority."
  ]

  return (
    <main className="max-w-[1100px] mx-auto px-[20px] xl:px-0">

      {/* page info */}
      <section className="max-w-[700px] flex flex-col gap-5 py-[20px]">

        {/* title */}
        <AnimatedSections > 
          <div>
            <h1 className="text-4xl font-black capitalize">
              all components available
            </h1>
          </div>
        </AnimatedSections>        

        {/* description */}
        <AnimatedSections > 
          <div>
            <p className="text-lg leading-6">
              {pageDescription}        
            </p>
          </div>
        </AnimatedSections>
      </section>

      {/* list of components */}
      <section>

        {/* sections */}
        <AnimatedSections > 
          <SectionPart />
        </AnimatedSections>

        {/* components */}
        <AnimatedSections > 
          <ComponentPart />
        </AnimatedSections>
      </section>
    </main>
  )
}

export default ModulePage