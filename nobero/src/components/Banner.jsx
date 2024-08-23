
/**
 * Banner component displays a full-width banner image.
 * The image covers the entire width of its container while maintaining its aspect ratio.
 */
import React from 'react';
import '../index.css';
const Banner = () => {
    return (
        <div className="w-full">
            <img 
                src="https://nobero.com/cdn/shop/files/T2.webp?v=1719039380&width=1066" 
                alt="Nobero Banner" 
                className="w-full h-auto object-cover"
            />
        </div>
    );
}

export default Banner;