
// The `AppContent` component manages the main content and routing of the application.
// - It fetches product data from an API and stores it in state.
// - It uses React Router to handle navigation and determine whether to show the product detail page or the main product listing.
// - It conditionally renders components based on the current route.
// - On the main page, it shows a banner, category header, filter sidebar, product list, and read more section.
// - On the product detail page, it displays detailed information about a single product and hides the footer and other components.

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Banner from './components/Banner';
import CategoryHeader from './components/CategoryHeader';
import ReadMore from './components/Readmore';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function AppContent() {
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

    const location = useLocation();
    const isProductDetailPage = location.pathname.startsWith('/products/');

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
                {!isProductDetailPage && (
                    <section className="flex-1 p-4">
                        <Banner className="w-full" />
                        <CategoryHeader productsLength={products.length} />
                        <div className="flex flex-grow">
                            <aside className="w-64 bg-gray-100 p-4">
                                <Filter setProducts={setProducts} />
                            </aside>
                            <div className="flex-grow">
                                <Routes>
                                    <Route
                                        path="/"
                                        element={<ProductList products={products} />}
                                    />
                                </Routes>
                            </div>
                        </div>
                        <ReadMore />
                    </section>
                )}
                {isProductDetailPage && (
                    <Routes>
                        <Route
                            path="/products/:id"
                            element={<ProductDetail products={products} />}
                        />
                    </Routes>
                )}
            </main>
            {!isProductDetailPage && <Footer />}
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
