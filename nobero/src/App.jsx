import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Banner from './components/Banner';
import axios from 'axios';
import CategoryHeader from './components/CategoryHeader';
import Footer from './components/Footer';
import ReadMore from './components/Readmore';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://127.0.0.1:8000/api/products/');
                setProducts(result.data.results);  // Use the results array from the API response
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <div className="relative overflow-hidden h-8 bg-[#242F66] text-white text-sm">
                <div className="absolute flex whitespace-nowrap animate-marquee">
                    <span className="flex items-center">
                        100% Refund Guarantee if you don't ❤️ the product. Shop with Confidence.
                    </span>
                </div>
            </div>
            <Navbar />
            <main className="flex flex-col md:flex-row">
                <section className="flex-1 p-4">
                    <Banner className="w-full" />
                    <CategoryHeader />
                    <div className="flex flex-grow">
                        <aside className="w-64 bg-gray-100 p-4">
                            <Filter setProducts={setProducts} />
                        </aside>
                        <div className="flex-grow">
                            <ProductList products={products} />
                        </div>
                    </div>
                    <ReadMore />
                    <Footer />
                </section>
            </main>
        </div>
    );
}

export default App;
