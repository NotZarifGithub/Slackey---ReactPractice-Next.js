"use client"

import { Slackey } from "next/font/google"
import Link from "next/link"
import { useState } from "react"

const slackey = Slackey({
  subsets:['latin'],
  weight:['400']
})

export default function Home() {

  const [isSectionOpen, setIsSectionOpen] = useState(false)
  const [isComponentOpen, setIsComponentOpen] = useState(false)
  
  return (
    <main>
      <div className="flex justify-center text-white bg-black gap-4 py-[10px]">

        {/* sections */}
        <button className=" rounded-lg px-[10px] hover:bg-white hover:text-black" onClick={() => setIsSectionOpen(!isSectionOpen)}>
          <h1 className={`${slackey.className} uppercase`}>
            sections
          </h1>

          {/* sections dropdown */}
          {isSectionOpen && (
            <div className=" flex flex-col top-[100px]">
              <ul className="text-black capitalize bg-white rounded-lg p-[10px] flex flex-col gap-1 w-[150px]">
                <Link href={'/sections/FAQ'}>
                  <li className="text-base font-semibold hover:bg-black hover:text-white px-[10px] rounded-lg">
                    FAQ
                  </li>
                </Link>
                <Link href={'/sections/features'}>
                  <li className="text-base font-semibold hover:bg-black hover:text-white px-[10px] rounded-lg">
                    features
                  </li>
                </Link>
                <Link href={'/sections/heros'}>
                  <li className="text-base font-semibold hover:bg-black hover:text-white px-[10px] rounded-lg">
                    heros
                  </li>
                </Link>          
              </ul>
            </div>
          )}
        </button>

        {/* components */}
        <button className=" rounded-lg p-[10px] hover:bg-white hover:text-black" onClick={() => setIsComponentOpen(!isComponentOpen)}>
          <h1 className={`${slackey.className} uppercase`}>
            components
          </h1>

          {/* components dropdown */}
          {isComponentOpen && (
            <div className=" flex flex-col top-[100px]">
              <ul className="text-black capitalize bg-white rounded-lg p-[10px] flex flex-col gap-1 w-[150px]">
                <Link href={'/component/accordions'}>
                  <li className="text-base font-semibold hover:bg-black hover:text-white px-[10px] rounded-lg">
                    accordions
                  </li>
                </Link>
                <Link href={'/component/buttons'}>
                  <li className="text-base font-semibold hover:bg-black hover:text-white px-[10px] rounded-lg">
                    buttons
                  </li>
                </Link>
                <Link href={'/component/navbar'}>
                  <li className="text-base font-semibold hover:bg-black hover:text-white px-[10px] rounded-lg">
                    navbar
                  </li>
                </Link>          
              </ul>
            </div>
          )}
        </button>
      </div>
    </main>
  )
}
