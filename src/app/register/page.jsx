"use client"

import { GiAstronautHelmet } from "react-icons/gi"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import styles from '../../app/styles.module.css'

const registerPage = () => {

  const router = useRouter()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })
  
  return (
    <main className='h-[calc(100vh-84px)] px-[20px] flex justify-center items-center'>
      
      <section className={`${styles.gradient} ${styles.height}`}>
        {/* empty div */}
      </section>
      
      {/* register card */}
      <motion.section 
        className='border border-black/20 rounded-lg p-[20px] w-full max-w-[400px] bg-white '
      >

        {/* title & logo */}
        <div className="flex flex-col items-center justify-center gap-5 py-[20px]">
          
          {/* logo */}
          <div className="text-4xl">
            <GiAstronautHelmet />
          </div>

          {/* title */}
          <div className="text-2xl font-bold text-transparent capitalize bg-clip-text bg-gradient-to-r from-[#974ae8] to-purple-400">
            register your account  
          </div>
        </div>

        {/* forms */}
        <div className="mt-3">
          <form 
            onSubmit={{}}
            action=""
            className="space-y-6"
          >
            {/* name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  required
                  value={data.name}
                  onChange={(e) => {setData({...data, name: e.target.value})}}
                  className="block w-full border-0 rounded-md py-1.5 text-gray-900 shadow-md ring-1 ring-black/40"
                />
              </div>
            </div>
            
            {/* email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input 
                  id="email"
                  name="email"
                  type="text" 
                  required
                  value={data.email}
                  onChange={(e) => {setData({...data, email: e.target.value})}}
                  className="block w-full border-0 rounded-md py-1.5 text-gray-900 shadow-md ring-1 ring-black/40"
                />
              </div>
            </div>
            
            {/* password */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div>
                  <Link 
                    href={"/"}
                    className="bg-[#974ae8] text-transparent bg-clip-text capitalize text-sm"
                  >
                    forgot password ?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input 
                  id="password"
                  name="password"
                  type="text" 
                  required
                  value={data.password}
                  onChange={(e) => {setData({...data, password: e.target.value})}}
                  className="block w-full border-0 rounded-md py-1.5 text-gray-900 shadow-md ring-1 ring-black/40"
                />
              </div>
            </div>

            {/* register button */}
            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-3 from-[#974ae8] to-purple-400 bg-gradient-to-r rounded-md py-1.5 text-sm font-semibold text-white capitalize hover:scale-90 transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </motion.section>
    </main>
  )
}

export default registerPage