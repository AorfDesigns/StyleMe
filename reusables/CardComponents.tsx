import React from 'react';

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  year: string; // The year associated with the design, displayed on the card.
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description, year }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-500 text-sm mb-2">{year}</p> {/* Display the year */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
