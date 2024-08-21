import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/products/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data.results);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        {product.product_urls.length > 0 && (
                            <img
                                src={product.product_urls[0]} // Display the first image URL
                                alt={product.title}
                                className="w-full h-32 object-cover mb-2"
                            />
                        )}
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="font-bold">{product.price} USD</p>
                        <p className="line-through text-gray-500">{product.mrp} USD</p>
                        <p className="text-gray-500">Last 7-day Sale: {product.last_7_day_sale}</p>
                        <p className="text-gray-700">Fit: {product.fit}</p>
                        <p className="text-gray-700">Fabric: {product.fabric}</p>
                        <p className="text-gray-700">Neck: {product.neck}</p>
                        <p className="text-gray-700">Sleeve: {product.sleeve}</p>
                        <p className="text-gray-700">Pattern: {product.pattern}</p>
                        <p className="text-gray-700">Length: {product.length}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
