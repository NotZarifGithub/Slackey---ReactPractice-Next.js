import {AiOutlineUndo} from "react-icons/ai"
import Link from "next/link"

const Navbar = () => {
  return (
    <header>
      <div className="flex items-center justify-center text-3xl text-white bg-black py-[30px]">
        <Link href={'/'}>
          <AiOutlineUndo />        
        </Link>
      </div>
    </header>
  )
}

export default Navbar