
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
    const { productId } = useParams();  
    const [product, setProduct] = useState(null);

    useEffect(() => {
    
        axios.get(`http://127.0.0.1:8000/api/products/${productId}/`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the product!", error);
            });
    }, [productId]);

    if (!product) return <div>Loading...</div>;

    const discount = ((product.mrp - product.price) / product.mrp) * 100;
    const lowestPriceDays = product.last_7_day_sale ? 7 : 30;

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <img 
                        src={product.product_urls[0]} 
                        alt={product.title} 
                        className="w-full object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <div className="flex items-center space-x-4 my-4">
                        <p className="text-2xl text-green-600 font-semibold">₹{product.price}</p>
                        <p className="text-gray-500 line-through">₹{product.mrp}</p>
                        <p className="text-yellow-500">{Math.round(discount)}% OFF</p>
                    </div>
                    <p className="text-green-500">
                        Lowest price in last {lowestPriceDays} days
                    </p>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold mb-2">Select Size</h2>
                        <div className="flex space-x-2">
                            {product.available_skus.map((sku, index) => (
                                <button key={index} className="px-3 py-1 border rounded">
                                    {sku.size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
