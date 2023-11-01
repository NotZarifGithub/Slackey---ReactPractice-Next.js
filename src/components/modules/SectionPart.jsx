"use client"

import ComponentsCard from "./ComponentsCard"
import {BsReverseLayoutSidebarReverse} from "react-icons/bs"
import {IoIosPeople} from "react-icons/io"
import {MdOutlineFeaturedPlayList} from "react-icons/md"
import {BiCube} from "react-icons/bi"
import {PiSealQuestionBold} from "react-icons/pi"

const SectionPart = () => {

  // sections card data
  const cardDataSections = [
    {
      logo: <BsReverseLayoutSidebarReverse/>,
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
  
  return (
    <section className="flex flex-col gap-3 py-[20px]">

      {/* tag */}
      <div className="flex gap-2">
        <h1 className="text-2xl font-bold capitalize">
          sections
        </h1>
      </div>

      {/* items */}
      <div className="grid gap-5 md:grid-cols-4">               
        {cardDataSections.map((item, index) => (
          <ComponentsCard key={index} logo={item.logo} component={item.title} path={item.path}/> 
        ))}       
      </div>
    </section>
  )
}

export default SectionPart