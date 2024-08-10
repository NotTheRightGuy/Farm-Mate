import React from "react";

const Section3 = () => {
  return (
    <div className="flex flex-col items-start w-full px-16">
      <div className="font-bold text-4xl pb-2">Popular Categories</div>

      <div className="flex items-center w-full py-5 pb-2 gap-6 ">
        <button className="w-44 h-48 outline outline-offset-2 outline-1 outline-gray-300 hover:outline-2 hover:outline-green-600 rounded-lg  ">
          <img src="/Cereals.png" />
          Cereals and Grains
        </button>
        <button className="w-44 h-48 outline outline-offset-2 outline-1 outline-gray-300 hover:outline-2 hover:outline-green-600 rounded-lg ">
          <img src="" />
          Pulses
        </button>
        <button className="w-44 h-48 outline outline-offset-2 outline-1 outline-gray-300 hover:outline-2 hover:outline-green-600 rounded-lg ">
          <img src="/oilseeds.png" />
          Oilseeds
        </button>
        <button className="w-44 h-48 outline outline-offset-2 outline-1 outline-gray-300 hover:outline-2 hover:outline-green-600 rounded-lg ">
          Cash Crops
        </button>
        <button className="w-44 h-48 outline outline-offset-2 outline-1 outline-gray-300 hover:outline-2 hover:outline-green-600 rounded-lg ">
          <img src="/fruits-1.png" />
          Fruits
        </button>
        <button className="w-44 h-48 outline outline-offset-2 outline-1 outline-gray-300 hover:outline-2 hover:outline-green-600 rounded-lg ">
          <img src="/vegetable.png" />
          Vegetables
        </button>
      </div>

      <div className="flex items-center w-full gap-6 py-3 pb-10">
        <button className="w-44 h-48 outline outline-offset-2 outline-1 outline-gray-300 hover:outline-2 hover:outline-green-600 rounded-lg ">
          Spices
        </button>
        <button className="w-44 h-48 outline outline-offset-2 outline-1 outline-gray-300 hover:outline-2 hover:outline-green-600 rounded-lg ">
          Plantation Crops
        </button>
        <button className="w-44 h-48 outline outline-offset-2 outline-1 outline-gray-300 hover:outline-2 hover:outline-green-600 rounded-lg ">
          <img src="/flower.png" />
          Flowers
        </button>
        <button className="w-44 h-48 outline outline-offset-2 outline-1 outline-gray-300 hover:outline-2 hover:outline-green-600 rounded-lg ">
          Medicinal and Aromatic Plants
        </button>
        <button className="w-44 h-48 outline outline-offset-2 outline-1 outline-gray-300 hover:outline-2 hover:outline-green-600 rounded-lg ">
          Fodder Crops
        </button>
        <button className="w-44 h-48 outline outline-offset-2 outline-1 outline-gray-300 hover:outline-2 hover:outline-green-600 rounded-lg ">
          <img src="/fibers.png" />
          Fibers
        </button>
      </div>
    </div>
  );
};

export default Section3;
