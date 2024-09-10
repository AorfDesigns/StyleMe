'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlus, FaTrash } from 'react-icons/fa';

type FashionTrend = {
  imageSrc: string;
  category: string;
  year: number;
};

const fashionTrends: FashionTrend[] = [
  { imageSrc: '/dev-images/fashion1.jpg', category: 'Men', year: 1990 },
  { imageSrc: '/dev-images/fashion2.jpg', category: 'Women', year: 2005 },
  { imageSrc: '/dev-images/Runway1.jpg', category: 'Children', year: 2010 },
  { imageSrc: '/dev-images/fashion2.jpg', category: 'Men', year: 2020 },
  { imageSrc: '/dev-images/fashion5.jpg', category: 'Women', year: 1990 },
  { imageSrc: '/dev-images/Runway2.jpg', category: 'Children', year: 2005 },
  { imageSrc: '/dev-images/fashion3.jpg', category: 'Men', year: 2010 },
  { imageSrc: '/dev-images/fashion8.jpg', category: 'Women', year: 2020 },
  { imageSrc: '/dev-images/Runway3.jpg', category: 'Children', year: 1990 },
  { imageSrc: '/dev-images/fashion4.jpg', category: 'Men', year: 2005 },
  { imageSrc: '/dev-images/fashion11.jpg', category: 'Women', year: 2010 },
  { imageSrc: '/dev-images/Runway4.jpg', category: 'Children', year: 2020 },
  { imageSrc: '/dev-images/fashion5.jpg', category: 'Men', year: 1990 },
  { imageSrc: '/dev-images/fashion2.jpg', category: 'Women', year: 2005 },
  { imageSrc: '/dev-images/Runway1.jpg', category: 'Children', year: 2010 },
  { imageSrc: '/dev-images/fashion6.jpg', category: 'Men', year: 2020 },
  { imageSrc: '/dev-images/fashion5.jpg', category: 'Women', year: 1990 },
  { imageSrc: '/dev-images/Runway2.jpg', category: 'Children', year: 2005 },
  { imageSrc: '/dev-images/fashion7.jpg', category: 'Men', year: 2010 },
  { imageSrc: '/dev-images/fashion8.jpg', category: 'Women', year: 2020 },
  { imageSrc: '/dev-images/Runway3.jpg', category: 'Children', year: 1990 },
  { imageSrc: '/dev-images/fashion8.jpg', category: 'Men', year: 2005 },
  { imageSrc: '/dev-images/fashion11.jpg', category: 'Women', year: 2010 },
  { imageSrc: '/dev-images/Runway4.jpg', category: 'Children', year: 2020 },
];

const FashionTrends: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Men');
  const [moodboard, setMoodboard] = useState<FashionTrend[]>([]);

  const filteredTrends = fashionTrends.filter(trend => trend.category === selectedTab);

  const addToMoodboard = (trend: FashionTrend) => {
    setMoodboard(prevMoodboard => [...prevMoodboard, trend]);
  };

  const removeFromMoodboard = (imageSrc: string) => {
    setMoodboard(prevMoodboard => prevMoodboard.filter(item => item.imageSrc !== imageSrc));
  };

  return (
    <>
      <div className="flex flex-col ml-8 font-bold text-2xl montserrat">
        <h1 className='lg:flex lg:justify-start flex justify-center'>Your Latest Fashion African Wears</h1>
      </div>
      <div className="flex justify-center md:justify-start md:ml-8 mt-4 mb-6">
        <div className="flex space-x-4 border-b border-gray-300 w-full relative">
          <button
            onClick={() => setSelectedTab('Men')}
            className={`px-4 py-2 text-lg font-semibold ${selectedTab === 'Men' ? 'border-b-2 border-black text-black' : 'border-b-2 border-transparent text-gray-600'}`}
          >
            African 
          </button>
          <button
            onClick={() => setSelectedTab('Women')}
            className={`px-4 py-2 text-lg font-semibold ${selectedTab === 'Women' ? 'border-b-2 border-black text-black' : 'border-b-2 border-transparent text-gray-600'}`}
          >
            T-Shirts
          </button>
          <button
            onClick={() => setSelectedTab('Children')}
            className={`px-4 py-2 text-lg font-semibold ${selectedTab === 'Children' ? 'border-b-2 border-black text-black' : 'border-b-2 border-transparent text-gray-600'}`}
          >
            Runways
          </button>
          <button
            onClick={() => setSelectedTab('MoodBoard')}
            className={`px-4 py-2 text-lg font-semibold absolute right-0 ${selectedTab === 'MoodBoard' ? 'border-b-2 border-black text-black' : 'border-b-2 border-transparent text-gray-600'}`}
          >
            MoodBoard
          </button>
        </div>
      </div>
      {selectedTab === 'MoodBoard' ? (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">My Moodboard</h2>
          {moodboard.length === 0 ? (
            <p>No items added to the moodboard yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {moodboard.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <Image
                    src={item.imageSrc}
                    alt={`${item.category} - ${item.year}`}
                    width={400} // Adjust width as needed
                    height={240} // Adjust height as needed
                    className="w-full h-60 object-cover rounded-lg shadow-md"
                  />
                  <button 
                    onClick={() => removeFromMoodboard(item.imageSrc)} 
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full shadow-lg"
                  >
                    <FaTrash className="text-lg" />
                  </button>
                  <div className="mt-4 text-center">
                    <h2 className="text-lg font-bold">{item.category}</h2>
                    <p className="text-sm text-gray-600">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
          {filteredTrends.map((trend, index) => (
            <div key={index} className="relative flex flex-col items-center group">
              <Image
                src={trend.imageSrc}
                alt={`${trend.category} - ${trend.year}`}
                width={400} // Adjust width as needed
                height={240} // Adjust height as needed
                className="w-full h-60 object-cover rounded-lg shadow-md cursor-pointer"
              />
              <button 
                onClick={() => addToMoodboard(trend)} 
                className="absolute bottom-4 right-4 p-2 bg-gray-400 text-white rounded-full shadow-lg transition-transform transform group-hover:scale-110"
              >
                <FaPlus className="text-2xl" />
                <span className="absolute -top-6 -right-4 bg-black text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Moodboard
                </span>
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FashionTrends;
