'use client';

import React, { useState } from 'react';

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

  const filteredFabrics = selectedCategory === 'All'
    ? fabrics
    : fabrics.filter(fabric => fabric.category === selectedCategory);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fabric Store</h1>
      
      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-300 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-lg font-semibold ${selectedCategory === category ? 'border-b-2 border-black text-black' : 'border-b-2 border-transparent text-gray-600'}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Fabric Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFabrics.map((fabric, index) => (
          <div key={index} className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <img
              src={fabric.imageSrc}
              alt={fabric.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{fabric.name}</h2>
              <p className="text-sm text-gray-600">{fabric.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FabricLibrary;
