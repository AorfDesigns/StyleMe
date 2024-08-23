import React from 'react';

type FashionTrend = {
  imageSrc: string;
  category: string;
  year: number;
};

const fashionTrends: FashionTrend[] = [
  { imageSrc: '/dev-images/fashion1.png', category: 'Vintage', year: 1990 },
  { imageSrc: '/dev-images/fashion2.png', category: 'Boho', year: 2005 },
  { imageSrc: '/dev-images/fashion3.png', category: 'Streetwear', year: 2010 },
  { imageSrc: '/dev-images/fashion4.png', category: 'Minimalist', year: 2020 },
];

const FashionTrends: React.FC = () => {
  return (
    <>
      <div className="flex flex-col ml-8 font-bold text-2xl montserrat">
        <h1>Your Latest Fashion Trends</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {fashionTrends.map((trend, index) => (
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
