'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlus, FaTrash } from 'react-icons/fa';

type Fabric = {
  imageSrc: string;
  name: string;
  description: string;
  category: string;
};

const fabrics: Fabric[] = [
  { imageSrc: '/dev-images/cotton.jpg', name: 'Cotton', description: 'Soft and breathable fabric, ideal for casual wear.', category: 'Cotton' },
  { imageSrc: '/dev-images/silk.jpg', name: 'Silk', description: 'Luxurious and smooth fabric, perfect for formal occasions.', category: 'Silk' },
  { imageSrc: '/dev-images/wool.jpg', name: 'Wool', description: 'Warm and durable fabric, suitable for cold weather.', category: 'Wool' },
  { imageSrc: '/dev-images/linem.jpg', name: 'Linen', description: 'Lightweight and cool fabric, great for summer.', category: 'Linen' },
  { imageSrc: '/dev-images/denim.jpg', name: 'Denim', description: 'Sturdy fabric, commonly used for jeans and jackets.', category: 'Denim' },
  // Add more fabrics with their categories as needed
];

const categories = ['All', 'Cotton', 'Silk', 'Wool', 'Linen', 'Denim'];

const FabricLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [moodboard, setMoodboard] = useState<Fabric[]>([]);

  const filteredFabrics = selectedCategory === 'All'
    ? fabrics
    : fabrics.filter(fabric => fabric.category === selectedCategory);

  const addToMoodboard = (fabric: Fabric) => {
    setMoodboard(prevMoodboard => [...prevMoodboard, fabric]);
  };

  const removeFromMoodboard = (imageSrc: string) => {
    setMoodboard(prevMoodboard => prevMoodboard.filter(item => item.imageSrc !== imageSrc));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fabric Store</h1>
      
      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-300 mb-6 relative">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-lg font-semibold ${selectedCategory === category ? 'border-b-2 border-black text-black' : 'border-b-2 border-transparent text-gray-600'}`}
          >
            {category}
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory('MoodBoard')}
          className={`px-4 py-2 text-lg font-semibold absolute right-0 ${selectedCategory === 'MoodBoard' ? 'border-b-2 border-black text-black' : 'border-b-2 border-transparent text-gray-600'}`}
        >
          MoodBoard
        </button>
      </div>

      {selectedCategory === 'MoodBoard' ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">My Moodboard</h2>
          {moodboard.length === 0 ? (
            <p>No items added to the moodboard yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {moodboard.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    width={500}  // adjust width as needed
                    height={400} // adjust height as needed
                    className="w-full h-60 object-cover"
                  />
                  <button 
                    onClick={() => removeFromMoodboard(item.imageSrc)} 
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full shadow-lg"
                  >
                    <FaTrash className="text-lg" />
                  </button>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{item.name}</h2>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFabrics.map((fabric, index) => (
            <div key={index} className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden group">
              <Image
                src={fabric.imageSrc}
                alt={fabric.name}
                width={500}  // adjust width as needed
                height={400} // adjust height as needed
                className="w-full h-60 object-cover"
              />
              <button 
                onClick={() => addToMoodboard(fabric)} 
                className="absolute bottom-4 right-4 p-2 bg-gray-400 text-white rounded-full shadow-lg transition-transform transform group-hover:scale-110"
              >
                <FaPlus className="text-2xl" />
                <span className="absolute -top-6 -right-4 bg-black text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Moodboard
                </span>
              </button>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{fabric.name}</h2>
                <p className="text-sm text-gray-600">{fabric.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FabricLibrary;
