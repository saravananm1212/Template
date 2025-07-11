import React from 'react';
import '../style.css'
import { LuSquareMenu } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
import { GrSettingsOption } from "react-icons/gr";
const Navbar = () => (
  <div className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold tracking-wide flex gap-3"><span><GrSettingsOption/></span>NejmAI</h1>
        <button className="text-sm font-semibold flex items-center gap-3  px-4 py-1">More Templates <span className='h-7 w-7 bg-gray-800 px-1 flex items-center justify-center text-3xl font-extralight'><CiMenuBurger /></span></button>
      </div>
);

export default Navbar;
