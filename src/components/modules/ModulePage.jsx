  
import ComponentPart from "@/components/modules/ComponentPart"
import SectionPart from "@/components/modules/SectionPart"

const ModulePage = () => {

  // description for page info
  const pageDescription = [
    "Our components are meticulously crafted using a fusion of cutting-edge technologies, including React, Tailwind CSS, and a blend of animation techniques such as Framer Motion, and other JavaScript animation libraries. We are dedicated to maintaining our components' compatibility to ensure seamless integration into your projects. However, should you encounter any issues, please don't hesitate to reach out to us for assistance. Your success with our components is our top priority."
  ]

  return (
    <main className="max-w-[1100px] mx-auto px-[20px] lg:px-0">

      {/* page info */}
      <section className="max-w-[700px] flex flex-col gap-5 py-[20px]">

        {/* title */}
        <div>
          <h1 className="text-4xl font-black capitalize">
            all components available
          </h1>
        </div>

        {/* description */}
        <div>
          <p className="text-lg leading-6">
            {pageDescription}        
          </p>
        </div>
      </section>

      {/* list of components */}
      <section>

        {/* sections */}
        <SectionPart />

        {/* components */}
        <ComponentPart />
      </section>
    </main>
  )
}

export default ModulePage