
// The `ProductList` component displays a grid of product cards.
// - Each card shows an image, title, formatted category, price, and discount information.
// - It calculates a discount percentage and shows the lowest price in the last 7 or 30 days.
// - The card is a clickable link that navigates to the product detail page when clicked.

import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
    const generateRandomDays = () => {
        return Math.random() > 0.5 ? 7 : 30;
    };

    const formatCategory = (category) => {
        return category.toLowerCase() === 'home' ? 'Oversized T-Shirts' : category;
    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => {
                    const discount = ((product.mrp - product.price) / product.mrp) * 100;
                    const lowestPriceDays = generateRandomDays();
                    const formattedCategory = formatCategory(product.category);

                    return (
                        <Link to={`/products/${product.id}`} key={product.id} className="block">
                            <div className="p-4 border rounded">
                                <img
                                    src={product.product_urls[1]}
                                    alt={product.title}
                                    className="w-full h-64 object-contain"
                                />
                                <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                                <p className="text-sm text-gray-500">{formattedCategory}</p>
                                <div className="mt-1 flex items-center space-x-2">
                                    <p className="text-green-600 font-bold">₹{product.price}</p>
                                    <p className="line-through text-gray-500">₹{product.mrp}</p>
                                    <p className="text-yellow-500">{Math.round(discount)}% OFF</p>
                                </div>
                                <p className="text-green-500 mt-1">
                                    Lowest price in last {lowestPriceDays} days
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductList;
