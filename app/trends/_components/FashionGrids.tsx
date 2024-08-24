'use client'
import React, { useState } from 'react';
type FashionTrend = {
  imageSrc: string;
  category: string;
  year: number;
};

const fashionTrends: FashionTrend[] = [
  { imageSrc: '/dev-images/fashion1.jpg', category: 'Men', year: 1990 },
  { imageSrc: '/dev-images/fashion2.jpg', category: 'Women', year: 2005 },
  { imageSrc: '/dev-images/fashion3.png', category: 'Children', year: 2010 },
  { imageSrc: '/dev-images/fashion4.png', category: 'Men', year: 2020 },
  { imageSrc: '/dev-images/fashion5.jpg', category: 'Women', year: 1990 },
  { imageSrc: '/dev-images/fashion6.jpg', category: 'Children', year: 2005 },
  { imageSrc: '/dev-images/fashion7.jpg', category: 'Men', year: 2010 },
  { imageSrc: '/dev-images/fashion8.jpg', category: 'Women', year: 2020 },
  { imageSrc: '/dev-images/fashion9.jpg', category: 'Children', year: 1990 },
  { imageSrc: '/dev-images/fashion10.jpg', category: 'Men', year: 2005 },
  { imageSrc: '/dev-images/fashion11.jpg', category: 'Women', year: 2010 },
  { imageSrc: '/dev-images/fashion12.jpg', category: 'Children', year: 2020 },
];

const FashionTrends: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Men');

  const filteredTrends = fashionTrends.filter(trend => trend.category === selectedTab);

  return (
    <>
      <div className="flex flex-col ml-8 font-bold text-2xl montserrat">
        <h1 className='lg:flex lg:justify-start flex justify-center'>Your Latest Fashion African Wears</h1>
      </div>
      <div className="flex justify-center md:justify-start md:ml-8 mt-4 mb-6">
        <div className="flex space-x-4 border-b border-gray-300">
          <button
            onClick={() => setSelectedTab('Men')}
            className={`px-4 py-2 text-lg font-semibold ${selectedTab === 'Men' ? 'border-b-2 border-black text-black' : 'border-b-2 border-transparent text-gray-600'}`}
          >
            Men
          </button>
          <button
            onClick={() => setSelectedTab('Women')}
            className={`px-4 py-2 text-lg font-semibold ${selectedTab === 'Women' ? 'border-b-2 border-black text-black' : 'border-b-2 border-transparent text-gray-600'}`}
          >
            Women
          </button>
          <button
            onClick={() => setSelectedTab('Children')}
            className={`px-4 py-2 text-lg font-semibold ${selectedTab === 'Children' ? 'border-b-2 border-black text-black' : 'border-b-2 border-transparent text-gray-600'}`}
          >
            Children
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {filteredTrends.map((trend, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={trend.imageSrc}
              alt={`${trend.category} - ${trend.year}`}
              className="w-full h-60 object-cover rounded-lg shadow-md cursor-pointer"
            />
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold">{trend.category}</h2>
              <p className="text-sm text-gray-600">{trend.year}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FashionTrends;
