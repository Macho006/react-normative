import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    margin: "0 10px",
    textDecoration: "none",
    fontWeight: "bold",
    color: isActive ? "red" : "white",
  });

  return (
    <div className="flex justify-center">
      <nav className="flex justify-center items-center gap-6 text-2xl mt-4 bg-[#232323] px-6 py-4 mb-8 rounded-full w-fit shadow-[1px_1px_100px_4px_rgba(0,_0,_0,_0.1)]">
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
        <NavLink to="/services" style={linkStyle}>Services</NavLink>
        <NavLink to="/cards" style={linkStyle}>Cards</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
