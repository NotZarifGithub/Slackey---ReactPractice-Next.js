"use client"

import ComponentsCard from "@/components/modules/ComponentsCard"
import {GrDomain} from "react-icons/gr"
import {IoIosPeople} from "react-icons/io"
import {MdOutlineFeaturedPlayList} from "react-icons/md"
import {BiCube} from "react-icons/bi"
import {PiSealQuestionBold} from "react-icons/pi"
import {BsCursorFill} from "react-icons/bs"
import {MdArrowDropDownCircle} from "react-icons/md"
import {PiCardsLight} from "react-icons/pi"
import {TbLayoutNavbarFilled} from "react-icons/tb"
import {RxHamburgerMenu} from "react-icons/rx"
import {BiLoader} from "react-icons/bi"
import {TfiLayoutAccordionList} from "react-icons/tfi"
import {GiPerspectiveDiceSixFacesRandom} from "react-icons/gi"
import {BiNotification} from "react-icons/bi"

const page = () => {

  // sections card data
  const cardDataSections = [
    {
      logo: <GrDomain/>,
      title: "heros",
      path: '/module/Heros'
    },
    {
      logo: <IoIosPeople/>,
      title: "testimonials",
      path: '/module/Testimonials'
    },
    {
      logo: <MdOutlineFeaturedPlayList/>,
      title: "features",
      path: '/module/Features'
    },
    {
      logo: <BiCube/>,
      title: "3D",
      path: '/module/Three-d'
    },
    {
      logo: <PiSealQuestionBold/>,
      title: "FAQ",
      path: '/module/FAQ'
    },
  ]

  // components card data
  const cardDataCompoonents =[
    {
      logo: <BsCursorFill/>,
      title: "buttons",
      path: "/module/Buttons"
    },
    {
      logo: <MdArrowDropDownCircle/>,
      title: "dropdown",
      path: "/module/Dropdown"
    },
    {
      logo: <PiCardsLight/>,
      title: "cards",
      path: "/module/Cards"
    },
    {
      logo: <TbLayoutNavbarFilled/>,
      title: "navbars",
      path: "/module/Navbars"
    },
    {
      logo: <RxHamburgerMenu/>,
      title: "hamburgers",
      path: "/module/Hamburgers"
    },
    {
      logo: <BiLoader/>,
      title: "loaders",
      path: "/module/Loaders"
    },
    {
      logo: <TfiLayoutAccordionList/>,
      title: "accordions",
      path: "/module/Accordions"
    },
    {
      logo: <GiPerspectiveDiceSixFacesRandom/>,
      title: "other",
      path: "/module/Other"
    },
    {
      logo: <BiNotification/>,
      title: "notifications",
      path: "/module/Notifications"
    },
  ]

  // description for page info
  const pageDescription = [
    "Our components are meticulously crafted using a fusion of cutting-edge technologies, including React, Tailwind CSS, and a blend of animation techniques such as Framer Motion, and other well-established JavaScript animation libraries. We are dedicated to maintaining our components' compatibility with the most recent versions of these tools to ensure seamless integration into your projects. However, should you encounter any issues or have specific requirements, please don't hesitate to reach out to us for assistance. Your success with our components is our top priority."
  ]

  return (
    <main className="max-w-[1300px] mx-auto">

      {/* page info */}
      <section className="max-w-[700px] flex flex-col gap-5 py-[20px]">

        {/* title */}
        <div>
          <h1 className="capitalize text-4xl font-black">
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
        <section className="flex flex-col gap-3 py-[20px]">

          {/* tag */}
          <div className="flex gap-2">
            <h1 className="font-bold text-2xl capitalize">
              sections
            </h1>
          </div>

          {/* items */}
          <div className="grid grid-cols-4 gap-5">               
            {cardDataSections.map((item, index) => (
              <ComponentsCard key={index} logo={item.logo} component={item.title} path={item.path}/> 
            ))}       
          </div>
        </section>

        {/* components */}
        <section className="flex flex-col gap-3 py-[20px]">

          {/* tag */}
          <div className="flex gap-2">
            <h1 className="font-bold text-2xl capitalize">
              components
            </h1>
          </div>

          {/* items */}
          <div className="grid grid-cols-4 gap-5">               
            {cardDataCompoonents.map((item, index) => (
              <ComponentsCard key={index} logo={item.logo} component={item.title} path={item.path}/>
            ))}      
          </div>
        </section>
      </section>
    </main>
  )
}

export default page