import React from 'react';
import ProductList from './components/ProductList';
import Navbar from './components/navbar';
import Banner from './components/Banner';
import './index.css'; // Ensure this is the correct path to your CSS file

function App() {
    return (
        <div className="App">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold">Product List</h1>
            </header>
            <main>
              <Navbar />
              <Banner></Banner>
                <ProductList />
            </main>
        </div>
    );
}

export default App;
