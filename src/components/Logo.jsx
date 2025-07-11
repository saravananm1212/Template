import React from 'react'
import { LuFlower } from "react-icons/lu";
import { BsFillCupHotFill } from "react-icons/bs";
import { FaFeatherAlt } from "react-icons/fa";
import { SiThunderstore } from "react-icons/si";
const Logo = () => {
  return (
    // <div className="flex justify-center space-x-10 py-10 opacity-70 ">
    //     {[...Array(4)].map((_, i) => (
    //       <div key={i} className="text-gray-400 text-lg font-medium ">Logopipsum</div>
    //     ))}
    //   </div>
    <div className='flex items-center justify-center space-x-10 py-7 text-white font-bold'>
        <p className='flex items-center'><LuFlower className='m-0 text-2xl'/>Logopipsum</p>
        <p className='flex items-center'><BsFillCupHotFill className='m-0 text-2xl'/>Logopipsum</p>
        <p className='flex items-center'><FaFeatherAlt className='m-0 text-2xl'/>Logopipsum</p>
        <p className='flex items-center'><SiThunderstore className='m-0 text-2xl'/>Logopipsum</p>
        
    </div>
  )
}

export default Logo
