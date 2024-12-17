import React from "react";

const DrinksCard = ({ img, title, price }) => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={img} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{price}</p>
      </div>
    </div>
  );
};

export default DrinksCard;
