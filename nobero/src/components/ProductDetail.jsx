
/**
 * ProductDetail component fetches and displays detailed information about a specific product.
 * It includes product images, pricing details, a countdown timer for sales, and related product recommendations.
 * Additionally, it shows product attributes and description, allowing users to view and interact with product details.
 */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import ProductList from './ProductList';

function ProductDetail({ products }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState("07h : 20m : 36s");

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/${id}/`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the product!", error);
            });

        const updateCountdown = () => {
            const now = new Date();
            const end = new Date();
            end.setHours(now.getHours() + 1); 

            const totalSeconds = Math.max(0, Math.floor((end - now) / 1000));
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            setTimeRemaining(
                `${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`
            );
        };

        const countdownInterval = setInterval(updateCountdown, 1000);
        return () => clearInterval(countdownInterval);
    }, [id]);

    const cleanDescription = (html) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || "";
    };

    if (!product) return <div>Loading...</div>;

    const discount = ((parseFloat(product.mrp) - parseFloat(product.price)) / parseFloat(product.mrp)) * 100;

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <div className="flex space-x-2 overflow-x-auto">
                        {product.product_urls.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`${product.title} image ${index + 1}`}
                                className="h-64 object-contain"
                            />
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <div className="flex flex-col mt-4">
                        <div className="flex items-center mt-2">
                            <p className="text-2xl text-green-600 font-semibold">₹{product.price}</p>
                            <p className="text-yellow-500 text-lg ml-4">{Math.round(discount)}% OFF</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-gray-500 line-through text-xl">MRP: ₹{product.mrp}</p>
                            <p className="text-red-500 text-sm ml-4">Inclusive of all taxes</p>
                        </div>
                    </div>
                    <p className="text-green-500 mt-2">Lowest price in last 7 days</p>
                    <div className="text-[#212B5D] text-sm flex flex-row gap-1 justify-center bg-[#B0FFC9] py-2 px-4 mt-6 rounded-md">
                        <div>Sale ends in</div>
                        <div>:</div>
                        <div className="font-medium flex flex-row gap-0.5">{timeRemaining}</div>
                    </div>
                    <div className="buy-n-container w-full hide-scrollbar pb-4 overflow-x-scroll mt-6">
                        <div className="buy-n-wrapper flex gap-2 cursor-pointer">
                            <div className="min-w-fit h-fit flex gap-2 items-start p-3 bg-[#FAF6E8] border-[1px] border-[#D0C492] rounded-xl">
                                <div>
                                    <img src="//nobero.com/cdn/shop/t/199/assets/discount-icon.svg?v=77470898015760174531683282823" alt="offer icon" width="24" height="24" loading="lazy"/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#715D0B] text-sm font-[familySemiBold]">Pick Any 2 Tees at ₹999</span>
                                    <span className="text-[#666875] text-xs font-[familyRegular]">No Code Required. Hurry!</span>
                                </div>
                            </div>
                            <div className="min-w-fit h-fit flex gap-2 items-start p-3 bg-[#FAF6E8] border-[1px] border-[#D0C492] rounded-xl">
                                <div>
                                    <img src="//nobero.com/cdn/shop/t/199/assets/discount-icon.svg?v=77470898015760174531683282823" alt="offer icon" width="24" height="24" loading="lazy"/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#715D0B] text-sm font-[familySemiBold]">Flat ₹250 OFF (Use code: WK250)</span>
                                    <span className="text-[#666875] text-xs font-[familyRegular]">On min. purchase of ₹1500. Weekend Only!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-lg font-semibold mb-2 mt-4">Select Size</h2>
                    <div className="flex space-x-2">
                        {product.available_skus.map((sku, index) => (
                            <button key={index} className="px-3 py-1 border rounded">
                                {sku.size}
                            </button>
                        ))}
                    </div>
                    <div className="lowest-price flex text-[#212B5D] text-[0.75rem] lg:text-[0.875rem] gap-[0.25rem] bg-[#F0E4B6] left-0 bottom-[8.5%] px-[1rem] py-[0.5rem] justify-center w-full mt-4">
                        <img src="//nobero.com/cdn/shop/t/199/assets/icon-timer.svg?v=67367065757501681911697457258" loading="lazy" width="20" height="20" alt="pricedrop_icon" className="mt-[0.188rem] lg:mt-0 w-[0.875rem] h-[0.875rem] lg:h-[1.25rem] lg:w-[1.25rem]"/>
                        <p className="font-[familyMedium]">Lowest price in last <span className="font-[familySemiBold]">30 days </span></p>
                    </div>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                        Add to Cart
                    </button>
                    <img className="w-full mt-4" id="trust-banner" src="//nobero.com/cdn/shop/files/trust_banner_2.svg?v=1680263466" alt="Trust Banner" width="360" height="49" loading="lazy" />
                    <div id="product-metafields-container" className="grid grid-cols-2 gap-x-[24px] gap-y-[16px] mt-[32px] lg:mt-[34px] product-metafields">
                        {product.fit && (
                            <div className="product-metafields-values text-sm lg:text-base">
                                <h4 className="text-[#666875] capitalize pb-[4px] text-lg">Fit</h4>
                                <p className="text-[#000000] pb-[8px] font-normal">{product.fit}</p>
                            </div>
                        )}
                        {product.fabric && (
                            <div className="product-metafields-values text-sm lg:text-base">
                                <h4 className="text-[#666875] capitalize pb-[4px] text-lg">Fabric</h4>
                                <p className="text-[#000000] pb-[8px] font-normal">{product.fabric}</p>
                            </div>
                        )}
                        {product.neck && (
                            <div className="product-metafields-values text-sm lg:text-base">
                                <h4 className="text-[#666875] capitalize pb-[4px] text-lg">Neck</h4>
                                <p className="text-[#000000] pb-[8px] font-normal">{product.neck}</p>
                            </div>
                        )}
                        {product.sleeve && (
                            <div className="product-metafields-values text-sm lg:text-base">
                                <h4 className="text-[#666875] capitalize pb-[4px] text-lg">Sleeve</h4>
                                <p className="text-[#000000] pb-[8px] font-normal">{product.sleeve}</p>
                            </div>
                        )}
                        {product.pattern && (
                            <div className="product-metafields-values text-sm lg:text-base">
                                <h4 className="text-[#666875] capitalize pb-[4px] text-lg">Pattern</h4>
                                <p className="text-[#000000] pb-[8px] font-normal">{product.pattern}</p>
                            </div>
                        )}
                        {product.length && (
                            <div className="product-metafields-values text-sm lg:text-base">
                                <h4 className="text-[#666875] capitalize pb-[4px] text-lg">Length</h4>
                                <p className="text-[#000000] pb-[8px] font-normal">{product.length}</p>
                            </div>
                        )}
                    </div>
                    <h2 className="text-lg font-semibold mb-2 mt-4">Product Description</h2>
                    <p>{cleanDescription(product.description)}</p>
                </div>
            </div>
            <div className="related-products mt-4">
                <h2 className="text-lg font-semibold mb-2">Related Products</h2>
                <ProductList products={products} />
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;
