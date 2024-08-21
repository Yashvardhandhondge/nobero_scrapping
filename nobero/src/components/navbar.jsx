import React from 'react';
import '../index.css';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
            {/* Logo */}
            <div className="flex items-center space-x-4">
                <img src="https://nobero.com/cdn/shop/files/Nobero_logo_1_2.svg?v=1694697396" alt="Nobero Logo" className="h-10" /> {/* Replace with actual logo */}
            </div>

            {/* Navigation Links */}
            <ul className="flex items-center space-x-8 text-black text-sm font-medium">
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Classic T-Shirts</a></li>
                <li><a href="#">Oversized T-Shirts</a></li>
                <li><a href="#">Fashion Joggers</a></li>
                <li><a href="#">Hoodies</a></li>
            </ul>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <svg
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.35 4.35a7.5 7.5 0 0012.3 12.3z" />
                    </svg>
                </div>
                <img src="https://nobero.com/cdn/shop/t/199/assets/icon-kwikpass-login.svg?v=153304588784742675891701235538" alt="User Icon" className="h-6 w-6" /> {/* Replace with actual icon */}
                <img src="/path/to/cart-icon.png" alt="Cart Icon" className="h-6 w-6" /> {/* Replace with actual icon */}
            </div>
        </nav>
    );
}

export default Navbar;
