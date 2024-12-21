import { menus } from "@/lib/data";
import { motion } from "framer-motion"
import { useState } from "react"
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io"

const Header = () => {
    const [active, setActive] = useState(0);

  return (
    <div className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <div className="flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className="text-xl" />
        Travel
      </div>
      <ul className="flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
        {menus.map((menu, i) => (
            <motion.li
             key={i} 
             layout 
             onClick={() => setActive(i)}
             className={`${
                active === i && "border-b-2 border-b-yellow-500"}
                inline-block cursor-pointer border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
             >
                    { menu }
                </motion.li>
        ))}
        <div className="flex items-center gap-6">
            <IoMdSearch className="text-lg" />
            <IoMdPerson className="text-lg" />
        </div>
      </ul>
    </div>
  )
}

export default Header

