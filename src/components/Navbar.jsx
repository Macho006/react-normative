import React from 'react'
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <nav className="flex justify-center items-center text-white gap-6 text-2xl mt-4 bg-[#232323] px-6 py-4 mb-8 rounded-full w-fit shadow-[1px_1px_100px_4px_rgba(0,_0,_0,_0.1)]">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link> 
          <Link to="/contact">Contact</Link> 
          <Link to="/services">Services</Link> 
        </nav>
      </div>
    </>
  )
}

export default Navbar
