'use client'
import React, { useState } from 'react';
const FashionDesign: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchSimilarClothes = async () => {
    const url = 'https://similar-clothes-ai.p.rapidapi.com/';
    const data = new FormData();
    data.append('url', 'https://i.pinimg.com/474x/dd/9d/e9/dd9de9ef19efdea8d8720d0e3f30ec73.jpg');

    const options: RequestInit = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '7e8f1fc79amshd1d2db34ab20267p1de4fbjsncb34daf0c555',
        'x-rapidapi-host': 'similar-clothes-ai.p.rapidapi.com'
      },
      body: data,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const resultText = await response.text();
      setResult(resultText);
    } catch (error) {
      setError('Error fetching data');
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Similar Clothes Finder</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={fetchSimilarClothes}
      >
        Fetch Similar Clothes
      </button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-semibold">Result:</h2>
          <p>{result}</p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-100 rounded">
          <h2 className="text-xl font-semibold">Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default FashionDesign;
