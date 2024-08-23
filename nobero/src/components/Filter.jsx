import React, { useState } from 'react';
import axios from 'axios';

function Filter({ setProducts }) {
    const [priceRange, setPriceRange] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedNeck, setSelectedNeck] = useState('');
    const [selectedSleeve, setSelectedSleeve] = useState('');
    const [selectedFit, setSelectedFit] = useState('');

    const [isPriceOpen, setIsPriceOpen] = useState(true);
    const [isColorOpen, setIsColorOpen] = useState(true);
    const [isSizeOpen, setIsSizeOpen] = useState(true);
    const [isNeckOpen, setIsNeckOpen] = useState(true);
    const [isSleeveOpen, setIsSleeveOpen] = useState(true);
    const [isFitOpen, setIsFitOpen] = useState(true);

    const handleFilterChange = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/products/', {
            params: {
                price__lt: priceRange ? priceRange.split('-')[1] : undefined,
                price__gt: priceRange ? priceRange.split('-')[0] : undefined,
                'available_skus__color': selectedColor || undefined,
                'available_skus__size': selectedSize || undefined,
                neck: selectedNeck || undefined,
                'sleeve_length': selectedSleeve || undefined,
                fit: selectedFit || undefined,
            },
        });
        setProducts(response.data.results);
    };

    const togglePriceOpen = () => setIsPriceOpen(!isPriceOpen);
    const toggleColorOpen = () => setIsColorOpen(!isColorOpen);
    const toggleSizeOpen = () => setIsSizeOpen(!isSizeOpen);
    const toggleNeckOpen = () => setIsNeckOpen(!isNeckOpen);
    const toggleSleeveOpen = () => setIsSleeveOpen(!isSleeveOpen);
    const toggleFitOpen = () => setIsFitOpen(!isFitOpen);

    return (
        <div className="max-w-xs mx-auto p-4 border rounded-md shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filter</h2>
                <button
                    onClick={() => {
                        setPriceRange('');
                        setSelectedColor('');
                        setSelectedSize('');
                        setSelectedNeck('');
                        setSelectedSleeve('');
                        setSelectedFit('');
                        handleFilterChange();
                    }}
                    className="text-yellow-600"
                >
                    Clear All
                </button>
            </div>

            {/* Price Filter */}
            <div className="mb-4">
                <button onClick={togglePriceOpen} className="w-full text-left flex justify-between items-center">
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
                <button onClick={toggleColorOpen} className="w-full text-left flex justify-between items-center">
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
                        </select>
                    </div>
                )}
            </div>

            {/* Size Filter */}
            <div className="mb-4">
                <button onClick={toggleSizeOpen} className="w-full text-left flex justify-between items-center">
                    <span className="font-medium">Size</span>
                    <span className={`transform transition-transform duration-200 ${isSizeOpen ? 'rotate-180' : ''}`}>
                        &#x25BC;
                    </span>
                </button>
                {isSizeOpen && (
                    <div className="mt-2 space-y-2">
                        <select
                            onChange={(e) => setSelectedSize(e.target.value)}
                            value={selectedSize}
                            className="w-full border p-2 rounded-md"
                        >
                            <option value="">Any</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                            <option value="XXXL">XXXL</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Neck Filter */}
            <div className="mb-4">
                <button onClick={toggleNeckOpen} className="w-full text-left flex justify-between items-center">
                    <span className="font-medium">Neck</span>
                    <span className={`transform transition-transform duration-200 ${isNeckOpen ? 'rotate-180' : ''}`}>
                        &#x25BC;
                    </span>
                </button>
                {isNeckOpen && (
                    <div className="mt-2 space-y-2">
                        <select
                            onChange={(e) => setSelectedNeck(e.target.value)}
                            value={selectedNeck}
                            className="w-full border p-2 rounded-md"
                        >
                            <option value="">Any</option>
                            <option value="Round Neck">Round Neck</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Sleeve Length Filter */}
            <div className="mb-4">
                <button onClick={toggleSleeveOpen} className="w-full text-left flex justify-between items-center">
                    <span className="font-medium">Sleeve Length</span>
                    <span className={`transform transition-transform duration-200 ${isSleeveOpen ? 'rotate-180' : ''}`}>
                        &#x25BC;
                    </span>
                </button>
                {isSleeveOpen && (
                    <div className="mt-2 space-y-2">
                        <select
                            onChange={(e) => setSelectedSleeve(e.target.value)}
                            value={selectedSleeve}
                            className="w-full border p-2 rounded-md"
                        >
                            <option value="">Any</option>
                            <option value="Short Sleeves">Short Sleeves</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Fit Filter */}
            <div className="mb-4">
                <button onClick={toggleFitOpen} className="w-full text-left flex justify-between items-center">
                    <span className="font-medium">Fit</span>
                    <span className={`transform transition-transform duration-200 ${isFitOpen ? 'rotate-180' : ''}`}>
                        &#x25BC;
                    </span>
                </button>
                {isFitOpen && (
                    <div className="mt-2 space-y-2">
                        <select
                            onChange={(e) => setSelectedFit(e.target.value)}
                            value={selectedFit}
                            className="w-full border p-2 rounded-md"
                        >
                            <option value="">Any</option>
                            <option value="Regular Fit">Regular Fit</option>
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
