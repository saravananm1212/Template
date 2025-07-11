

import React from 'react'
import { FaHammer } from "react-icons/fa6";
const TransGrid = () => {
  return (
    <div>
        <div className="p-12 text-center">
        <div className='text-left    pb-5 '>
            <h3 className="text-5xl font-bold mb-6 pl-8 ">
          Transforming 
          <br />
          Imagination into <span className="text-purple-500">Reality</span>
        </h3>
        <p className="text-gray-400  pl-8 mb-0 text-lg w-96">
          Discover how the power of AI can bring your boldest ideas to life. Dive into a suite of features designed to redefine design.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {["Witness the Future", "Visualize the Impossible", "Synergy and Style", "Timeless Precision"].map((text, i) => (
            <div key={i} className="bg-[#27282A] p-6 rounded-2xl shadow-xl ">
              
              <div className='flex items-start justify-start'>
                <p className="text-sm text-gray-400 flex items-start">Explore how {text.toLowerCase()} is enabled through our intelligent design system. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus excepturi non, voluptatum .</p>
              <span className='bg-purple-500 p-3 ml-2 rounded-full'><FaHammer/></span>
              </div>
                
                <h4 className="text-xl text-left  font-bold  pt-20  ">{text}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TransGrid
