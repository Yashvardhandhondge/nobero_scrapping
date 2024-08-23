/**
 * CategoryHeader displays the category name, number of products, and a sort button.
 * It fetches and filters products based on the selected category.
 */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryHeader = ({ categoryName, productsLength }) => {
    const [category, setCategory] = useState({ name: categoryName, itemCount: 0 });

    useEffect(() => {
        
        const fetchCategoryData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/products/?page=1');
                console.log(response.data);
                
                const filteredProducts = response.data.results.filter(product => product.category === categoryName);
                
                setCategory({
                    name: categoryName,
                    itemCount: filteredProducts.length,
                });
            } catch (error) {
                console.error('Error fetching the products:', error);
            }
        };
        fetchCategoryData();
    }, [categoryName]);

    return (
        <div className="flex items-center justify-between py-4 px-8 bg-white shadow">
            <div className="flex flex-col">
                <div className="text-sm text-gray-500">
                    Home › <span className="text-black">{category.name ||"All items"} </span>
                </div>
                <h1 className="text-2xl font-bold text-black">{category.name}</h1>
                <span className="text-gray-500">{productsLength} items</span>
            </div>
            <div>
                <button className="flex items-center border px-4 py-2 rounded-md">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6H14M10 12H14M10 18H14M8 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H8C7.46957 18 6.96086 17.7893 6.58579 17.4142C6.21071 17.0391 6 16.5304 6 16V8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Sort: <span className="font-bold ml-1">Featured</span>
                </button>
            </div>
        </div>
    );
}

export default CategoryHeader;
