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
      <div className="flex items-center justify-between h-screen text-white bg-black ">

        {/* sections */}
        <button className="transform -rotate-90" onClick={() => setIsSectionOpen(!isSectionOpen)}>
          <h1 className={`${slackey.className} uppercase`}>
            sections
          </h1>

          {/* sections dropdown */}
          {isSectionOpen && (
            <div className="absolute flex flex-col transform rotate-90 top-[100px]">
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
        <button className="transform rotate-90" onClick={() => setIsComponentOpen(!isComponentOpen)}>
          <h1 className={`${slackey.className} uppercase`}>
            components
          </h1>

          {/* components dropdown */}
          {isComponentOpen && (
            <div className="absolute flex flex-col transform -rotate-90 top-[100px]">
              <ul className="text-black capitalize bg-white rounded-lg p-[10px] flex flex-col gap-1 w-[150px]">
                <Link href={'/sections/accordions'}>
                  <li className="text-base font-semibold hover:bg-black hover:text-white px-[10px] rounded-lg">
                    accordions
                  </li>
                </Link>
                <Link href={'/sections/buttons'}>
                  <li className="text-base font-semibold hover:bg-black hover:text-white px-[10px] rounded-lg">
                    buttons
                  </li>
                </Link>
                <Link href={'/sections/navbar'}>
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
