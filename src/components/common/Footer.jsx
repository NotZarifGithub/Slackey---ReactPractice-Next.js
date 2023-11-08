"use client"

import {BsTiktok} from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {HiOutlineMail} from "react-icons/hi"
import {GiAstronautHelmet} from "react-icons/gi"

import Button from "../ui/components/Button"
import Link from "next/link"

const Footer = () => {

  // data for footer
  const navLinkData = [
    {
      mainTitle: "socials",
      link: [
        {
          title: "TikTok",
          logo: <BsTiktok />,
          path: "/",
        },
        {
          title: "Youtube",
          logo: <AiFillYoutube/>,
          path: "",
        },
        {
          title: "Instagram",
          logo: <AiOutlineInstagram/>,
          path: "",
        },
        {
          title: "Twitter",
          logo: <AiOutlineTwitter/>,
          path: "",
        },
        {
          title: "Email",
          logo: <HiOutlineMail/>,
          path: "/",
        },
      ],
    },
    {
      mainTitle: "site",
      link: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Module",
          path: "/module",
        },
        {
          title: "Pricing",
          path: "/Pricing",
        },
        {
          title: "FAQ",
          path: "/faq",
        },
        {
          title: "More",
          path: "/more",
        },
      ],
    },
    {
      mainTitle: "legal",
      link: [
        {
          title: "License",
          path: "/",
        },
        {
          title: "Privacy Policy",
          path: "/",
        },
        {
          title: "Terms",
          path: "/",
        },
      ],
    },
  ]

  return (
    <footer className="p-[20px] bg-[#492459] text-white">

      <div className="max-w-[1100px] mx-auto">
        
        {/* upper footer */}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row py-[30px]">

          {/* content */}
          <div className="flex flex-col items-center justify-center gap-2 text-center md:text-start md:items-start md:pr-[40px]">
            <GiAstronautHelmet className="text-3xl md:text-5xl"/>
            <div className="md:text-lg">
              Made by <span className="italic font-bold "><Link href={'/'}>@pat_mento</Link></span>
            </div>
            <div className="text-white md:text-lg">
              Components are copyrighted material, and their redistribution is prohibited without obtaining written permission.
            </div>
          </div>

          {/* link */}
          <div className="grid w-full grid-cols-3 gap-8 md:gap-0">
            {navLinkData.map((mainItem, index) => (
              <div key={index} className="flex flex-col gap-2 md:gap-5">
                <h1 className="font-semibold capitalize">
                  {mainItem.mainTitle}
                </h1>
                <ul className="flex flex-col md:gap-2">
                  {mainItem.link.map((mainLinks, index) => (
                    <Link key={index} href={mainLinks.path} className="flex items-center gap-2 font-medium text-white">
                      {mainLinks.logo}
                      {mainLinks.title}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* bottom footer */}
        <div className="flex flex-col items-center justify-center py-[20px] gap-2 md:flex-row md:justify-between border-t border-white/40">

          {/* all rights reserved */}
          <div className="hidden md:inline-block">
          &copy; 2023 Slackey. All rights reserved.        
          </div>

          {/* cta */}
          <div className="flex flex-row items-center gap-4">

            <div className="flex flex-row items-center gap-4">
              {/* sign in */}
              <Link href={'/'} className="">
                <h1 className="text-base font-semibold capitalize hover:text-[#3d205c]">
                  sign in
                </h1>
              </Link>

              {/* purchase button */}
              <Link href={'/pricing'}>
                <Button text={"unlock everything"} lock={true}/>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
          &copy; 2023 Slackey. All rights reserved.        
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer