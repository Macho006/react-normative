import React from 'react'

 const Card = ({ img, title, description }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 text-center w-[250px]">
      <img src={img} alt={title} style={{ width: "100%", borderRadius: "6px" }} />
      <h3 style={{ margin: "10px 0" }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
