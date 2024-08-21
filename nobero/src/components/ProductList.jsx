// src/components/ProductList.js
import React from 'react';

function ProductList({ products }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">{products.length} Items</h2>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="p-4 border rounded">
                        <h3 className="text-lg">{product.title}</h3>
                        <p>Price: ₹{product.price}</p>
                        <p>Category: {product.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
