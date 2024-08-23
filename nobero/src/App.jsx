import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import ReadMore from './components/Readmore';
import Navbar from './components/navbar';


function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://127.0.0.1:8000/api/products/?page=1');
                setProducts(result.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <Router>
            <div className="App">
                <div className="relative overflow-hidden h-8 bg-[#242F66] text-white text-sm">
                    <div className="absolute flex whitespace-nowrap animate-marquee">
                        <span className="flex items-center">
                            100% Refund Guarantee if you don't ❤️ the product. Shop with Confidence.
                        </span>
                    </div>
                </div>
                {/* <Navbar /> */}
                <main className="flex flex-col md:flex-row">
                    <section className="flex-1 p-4">
                        <Banner className="w-full" />
                        {/* <CategoryHeader productsLength={products.length} /> */}
                        <div className="flex flex-grow">
                            <aside className="w-64 bg-gray-100 p-4">
                                {/* <Filter setProducts={setProducts} /> */}
                            </aside>
                            <div className="flex-grow">
                                <Routes>
                                    <Route
                                        path="/"
                                        // element={<ProductList products={products} />}
                                    />
                                    <Route
                                        path="/products/:id"
                                        // element={<ProductDetail products={products} />}
                                    />
                                </Routes>
                            </div>
                        </div>
                        <ReadMore />
                        {/* <Footer /> */}
                    </section>
                </main>
            </div>
        </Router>
    );
}

export default App;
