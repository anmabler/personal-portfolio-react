import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className="sidebar fixed top-0 bottom-0 w-3/12 bg-slate-500">
        <ul className='flex flex-col gap-y-20 mt-6'>
          <NavLink className='p-5' to="/">Home</NavLink>
          <NavLink className='p-5' to="/about">About me</NavLink>
          <NavLink className='p-5' to="/experience">Experience</NavLink>
          <NavLink className='p-5' to="/contact">Contact</NavLink>
        </ul>
    </div>
  )
}
