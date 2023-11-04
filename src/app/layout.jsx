import { Dosis } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const dosis = Dosis({ subsets: ['latin'] })

export const metadata = {
  title: 'slackey',
  description: 'framer motion -Practice-',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
