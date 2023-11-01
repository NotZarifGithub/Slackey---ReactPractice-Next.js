"use client"

import ComponentsCard from "./ComponentsCard"
import {BsCursorFill} from "react-icons/bs"
import {MdArrowDropDownCircle} from "react-icons/md"
import {PiCardsLight} from "react-icons/pi"
import {TbLayoutNavbarFilled} from "react-icons/tb"
import {RxHamburgerMenu} from "react-icons/rx"
import {BiLoader} from "react-icons/bi"
import {TfiLayoutAccordionList} from "react-icons/tfi"
import {GiPerspectiveDiceSixFacesRandom} from "react-icons/gi"
import {BiNotification} from "react-icons/bi"

const ComponentPart = () => {

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
  
  return (
    <section className="flex flex-col gap-3 py-[20px]">
      {/* tag */}
      <div className="flex gap-2">
        <h1 className="text-2xl font-bold capitalize">
          sections
        </h1>
      </div>

      {/* items */}
      <div className="grid grid-cols-4 gap-5">               
        {cardDataCompoonents.map((item, index) => (
          <ComponentsCard key={index} logo={item.logo} component={item.title} path={item.path}/> 
        ))}       
      </div>
    </section>
  )
}

export default ComponentPart