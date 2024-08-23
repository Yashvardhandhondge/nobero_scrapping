
import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
    const generateRandomDays = () => {
        return Math.random() > 0.5 ? 7 : 30;
    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => {
                    const discount = ((product.mrp - product.price) / product.mrp) * 100;
                    const lowestPriceDays = generateRandomDays();

                    return (
                        <Link to={`/products/${product.id}`} key={product.id} className="block">
                            <div className="p-4 border rounded">
                                <img
                                    src={product.product_urls[0]}
                                    alt={product.title}
                                    className="w-full h-64 object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
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
