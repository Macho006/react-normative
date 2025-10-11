import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import iphone17pro from '../assets/iphone-17pro.webp'
import samsung24ultra from '../assets/samsung-24ultra.webp'
import googlepixel9 from '../assets/google-pixel-9.jpg'
import { IconChevronRight, IconGitBranch } from '@tabler/icons-react'
import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react";

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
  const price = 20;
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const total = quantity * price;



  const images = [
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1019/600/300",
    "https://picsum.photos/id/1035/600/300",
    "https://picsum.photos/id/1045/600/300",
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, images.length]);


  const next = () => setIndex(i => (i + 1) % images.length);
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);

  return (
    <>
      <div className='conatiner mx-auto px-6 flex flex-col justify-center items-center'>
        {/* <h1 className='text-center text-2xl'>Salom, Bu bosh sahifa</h1> */}
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

        {/* <div className='flex gap-4 mt-4 '>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="icon"><IconChevronRight stroke={2} /></Button>
          <Button variant="withIcon"><IconGitBranch /> New Branch</Button>
        </div> */}




        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Futbolka - ${price}</h2>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "15px" }}>
            <button onClick={decrement}><Minus /></button>
            <span style={{ fontSize: "20px" }}>{quantity}</span>
            <button onClick={increment}><Plus /></button>
          </div>

          <h3>Umumiy narx: ${total}</h3>
        </div>


        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold mb-4">Auto Image Slider</h2>

          <div className="relative inline-block">
            <img src={images[index]} alt="slider" className="w-[600px] h-[300px] rounded-lg object-cover shadow-md transition-all duration-500" />

            <div className="mt-4 space-x-4">
              <button onClick={prev} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
                <ArrowLeft />
              </button>
              <button onClick={next} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home
export { mockdata }   