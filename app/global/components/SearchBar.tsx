'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement the search functionality here
    console.log('Searching for:', query);
  };

  return (
    <div className="flex items-center bg-gray-100 p-2 rounded-md">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="flex-grow px-4 py-2 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-gray-600 transition"
      >
        <FontAwesomeIcon icon={faSearch} />

       
      </button>
    </div>
  );
};

export default SearchBar;
