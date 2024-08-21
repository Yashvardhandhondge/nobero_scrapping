// src/components/Filter.js
import React, { useState } from 'react';
import axios from 'axios';

function Filter({ setProducts }) {
  const [priceRange, setPriceRange] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);

  const handleFilterChange = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/products/', {
      params: {
        price__lt: priceRange ? priceRange.split('-')[1] : undefined,
        price__gt: priceRange ? priceRange.split('-')[0] : undefined,
        'available_skus__color': selectedColor || undefined,
      },
    });
    setProducts(response.data.results);
  };

  const togglePriceOpen = () => {
    setIsPriceOpen(!isPriceOpen);
  };

  const toggleColorOpen = () => {
    setIsColorOpen(!isColorOpen);
  };

  return (
    <div className="max-w-xs mx-auto p-4 border rounded-md shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filter</h2>
        <button onClick={() => {setPriceRange(''); setSelectedColor(''); handleFilterChange();}} className="text-yellow-600">Clear All</button>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <button
          onClick={togglePriceOpen}
          className="w-full text-left flex justify-between items-center"
        >
          <span className="font-medium">Price</span>
          <span className={`transform transition-transform duration-200 ${isPriceOpen ? 'rotate-180' : ''}`}>
            &#x25BC;
          </span>
        </button>
        {isPriceOpen && (
          <div className="mt-2 space-y-2">
            <select
              onChange={(e) => setPriceRange(e.target.value)}
              value={priceRange}
              className="w-full border p-2 rounded-md"
            >
              <option value="">Any</option>
              <option value="0-500">Less than ₹500</option>
              <option value="500-1000">₹500 - ₹1000</option>
              <option value="1000-1500">₹1000 - ₹1500</option>
              <option value="1500-2000">₹1500 - ₹2000</option>
              <option value="2000-10000">More than ₹2000</option>
            </select>
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <button
          onClick={toggleColorOpen}
          className="w-full text-left flex justify-between items-center"
        >
          <span className="font-medium">Color</span>
          <span className={`transform transition-transform duration-200 ${isColorOpen ? 'rotate-180' : ''}`}>
            &#x25BC;
          </span>
        </button>
        {isColorOpen && (
          <div className="mt-2 space-y-2">
            <select
              onChange={(e) => setSelectedColor(e.target.value)}
              value={selectedColor}
              className="w-full border p-2 rounded-md"
            >
              <option value="">Any</option>
              <option value="Black">Black</option>
              <option value="Olive Green">Olive Green</option>
              <option value="Navy Blue">Navy Blue</option>
              <option value="Maroon">Maroon</option>
              {/* Add more colors as needed */}
            </select>
          </div>
        )}
      </div>

      <button
        onClick={handleFilterChange}
        className="bg-blue-500 text-white w-full p-2 rounded-md mt-4"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default Filter;
