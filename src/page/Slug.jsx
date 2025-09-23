import React from 'react'
import { useParams } from "react-router-dom";
import { mockdata } from './Home';
import iphone17pro from '../assets/iphone-17pro.webp'
import samsung24ultra from '../assets/samsung-24ultra.webp'
import googlepixel9 from '../assets/google-pixel-9.jpg'
import Navbar from '../components/Navbar';

const Slug = () => {
  const { slug } = useParams();
  const product = mockdata.find((item) => item.slug === slug);

  return (
    <>
        <Navbar />
        <div className="grid justify-center">
            <div className="border w-[320px] p-3 rounded-2xl">
                <img className="rounded-2xl" src={product.img} alt={product.name} />
                <h1>{product.name}</h1>
                <p>Narxi: ${product.price}</p>
                <p>Slug: {product.slug}</p>
            </div>
        </div>

    </>
  );
}

export default Slug
