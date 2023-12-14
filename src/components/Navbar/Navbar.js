import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className=" h-screen w-4/12 max-w-sm min-w-fit bg-slate-500">
        <ul className='flex flex-col gap-y-20 mt-6'>
          <NavLink className='p-5' to="/">Home</NavLink>
          <NavLink className='p-5' to="/about">About me</NavLink>
          <NavLink className='p-5' to="/experience">Experience</NavLink>
          <NavLink className='p-5' to="/contact">Contact</NavLink>
        </ul>
    </div>
  )
}
