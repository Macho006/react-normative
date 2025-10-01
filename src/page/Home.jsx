import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import iphone17pro from '../assets/iphone-17pro.webp'
import samsung24ultra from '../assets/samsung-24ultra.webp'
import googlepixel9 from '../assets/google-pixel-9.jpg'
import { IconChevronRight, IconGitBranch } from '@tabler/icons-react'

let mockdata = [
  {
    id: 1,
    name: "iPhone 17 pro",
    price: 1200,
    img: iphone17pro,
    slug: "iphone-17-pro"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 ultra",
    price: 1000,
    img: samsung24ultra,
    slug: "samsung-galaxy-s24-ultra"
  },
  {
    id: 3,
    name: "Google Pixel 9",
    price: 900,
    img: googlepixel9,
    slug: "google-pixel-9"
  },
];

const Home = () => {
  return (
    <>
      <div className='conatiner mx-auto px-6 flex flex-col justify-center items-center'>
        <h1 className='text-center text-2xl'>Salom, Bu bosh sahifa</h1>
        {/* <div className='flex gap-6 justify-center items-center mt-5'>
          <Link to="/about" className="px-8 py-2 border-2 border-[#2c2c2c] bg-[#1a1a1a] text-white text-lg font-bold rounded-full cursor-pointer">About</Link>
          <Link to="/contact" className="px-8 py-2 border-2 border-[#2c2c2c] bg-[#1a1a1a] text-white text-lg font-bold rounded-full cursor-pointer">Contact</Link>
        </div> */}

        {/* <div>
          <h1 className='text-center my-8 text-3xl'>Products</h1>
          <ul className='grid grid-cols-3 gap-12'>
            {mockdata.map((item) => (
              <div className='border rounded-2xl p-3'>
                <img className='rounded-2xl' src={item.img} />
                <li key={item.id}> 
                  <Link to={`/product/${item.slug}`}>{item.name}</Link>
                </li>
                <li>
                  <p>${item.price}</p>
                </li>
              </div>
            ))}
          </ul>
        </div> */}

        <div className='flex gap-4 mt-4 '>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="icon"><IconChevronRight stroke={2} /></Button>
          <Button variant="withIcon"><IconGitBranch /> New Branch</Button>
        </div>
      </div>
    </>
  )
}

export default Home
export { mockdata }   