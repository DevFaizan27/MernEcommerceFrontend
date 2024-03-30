import React from "react";
import {Link} from 'react-router-dom'

const ProductCard = ({ data }) => {
  // Check if data exists before accessing its properties
  if (!data) {
    return <p>Loading...</p>;
  }

  // Log the data to ensure it's received correctly
  console.log("Data in ProductCard:", data);

  // Now, safely access the data properties
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 p-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <Link to={`/productDetail/${data.slug}`}>
        <img src={data.images[0].url} alt={data.name} className="w-full h-64 object-cover" />
        </Link>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{data.name}</h2>
          <p className="text-gray-700">{data.description.length > 100 ? `${data.description.substring(0, 100)}...` : data.description}</p>
          <p className="text-gray-900 font-bold mt-2">₹{data.originalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
