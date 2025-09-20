import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'; 
import About from './About'

const Home = () => {
  return (
    <>
        <div className='conatiner mx-auto px-6 flex flex-col justify-center items-center'>
            <Navbar />
            <h1 className='text-center text-2xl'>Salom, Bu bosh sahifa</h1>
            <div className='flex gap-6 justify-center items-center mt-5'>
                <Link to="/about" class="px-8 py-2 border-2 border-[#2c2c2c] bg-[#1a1a1a] text-white text-lg font-bold rounded-full cursor-pointer ">About</Link>
                <Link to="/contact" class="px-8 py-2 border-2 border-[#2c2c2c] bg-[#1a1a1a] text-white text-lg font-bold rounded-full cursor-pointer ">Contact</Link>
            </div>

        </div>
    </>
  )
}

export default Home