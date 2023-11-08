"use client"

import Link from "next/link";
import {HiOutlineRectangleStack} from "react-icons/hi2"
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Sidebar = () => {
  
  const sidebarLinks = {
    sections: [
      {
        title: 'Heros',
        path: '/module/Heros',
      },
      {
        title: 'Testimonials',
        path: '/module/Testimonials',
      },
      {
        title: 'Features',
        path: '/module/Features',
      },
      {
        title: '3D',
        path: '/module/Three-d',
      },
      {
        title: 'FAQ',
        path: '/module/FAQ',
      },
    ],
    components: [
      {
        title: 'Buttons',
        path: '/module/Buttons',
      },
      {
        title: 'Dropdown',
        path: '/module/Dropdown',
      },
      {
        title: 'Cards',
        path: '/module/Cards',
      },
      {
        title: 'Navbars',
        path: '/module/Navbars',
      },
      {
        title: 'Carousels',
        path: '/module/Carousels',
      },
      {
        title: 'Hamburgers',
        path: '/module/Hamburgers',
      },
      {
        title: 'Loaders',
        path: '/module/Loaders',
      },
      {
        title: 'Accordions',
        path: '/module/Accordions',
      },
      {
        title: 'Other',
        path: '/module/Other',
      },
      {
        title: 'Notifications',
        path: '/module/Notifications',
      },
    ],
  };

  // get path to highlight links when in page
  const pathname = usePathname()
  const isPageActive = (path) => {
    return pathname === path;
  };
  
  
  return (
    <nav className="px-[30px] w-[220px] sticky top-[114px]">
      
      {/* all module */}
      <motion.div 
        className=""
        whileHover={{x: 20, scale: 1.2}}
      >
        <Link href={'/module'} className="flex flex-row items-center gap-2">
          <HiOutlineRectangleStack className="text-2xl"/>
          <h1 className="text-lg font-semibold capitalize">
            all modules
          </h1>
        </Link>
      </motion.div>

      {/* sections */}
      <div className="py-[10px]">
        <div className="py-[10px]">
          <h1 className="text-sm font-bold capitalize text-black/50">
            sections
          </h1>
        </div>
        <div className="flex flex-col gap-1">
          {sidebarLinks.sections.map((itemSections, index) => (
            <Link 
              key={index} 
              href={itemSections.path} 
              className={`text-base font-semibold rounded-lg text-black/80 px-[10px] ${isPageActive(itemSections.path) ? "bg-[#2d3032] text-white hover:bg-[#2d3032] hover:text-white scale-110" : "hover:bg-black/10"}`}
            >
              {itemSections.title}
            </Link>
          ))}
        </div>
      </div>

      {/* components */}
      <div className="py-[10px]">
        <div className="py-[10px]">
          <h1 className="text-sm font-bold capitalize text-black/50">
            components
          </h1>
        </div>
        <div className="flex flex-col gap-1">
          {sidebarLinks.components.map((itemComponents, index) => (
            <Link 
              key={index} 
              href={itemComponents.path} 
              className={`text-base font-semibold rounded-lg text-black/80  px-[10px] ${isPageActive(itemComponents.path) ? "bg-[#2d3032] text-white hover:bg-[#2d3032] hover:text-white scale-110" : "hover:bg-black/10"}`}
            >
              {itemComponents.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Sidebar