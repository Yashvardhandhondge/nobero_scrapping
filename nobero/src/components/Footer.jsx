
/**
 * Footer component renders the footer section of the website.
 * It includes various sections for categories, help, company information, and social media links.
 * It also includes a copyright notice at the bottom.
 */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Categories</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">Men</a></li>
            <li><a href="#" className="hover:underline">Women</a></li>
            <li><a href="#" className="hover:underline">Classic T-Shirts</a></li>
            <li><a href="#" className="hover:underline">Oversized T-Shirts</a></li>
            <li><a href="#" className="hover:underline">Fashion Joggers</a></li>
            <li><a href="#" className="hover:underline">Hoodies</a></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Need Help</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">Track Your Order</a></li>
            <li><a href="#" className="hover:underline">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:underline">Chat on WhatsApp</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Company</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Get in touch</h2>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:opacity-75">
              <img src="/path-to-instagram-icon" alt="Instagram" />
            </a>
            <a href="#" className="hover:opacity-75">
              <img src="/path-to-facebook-icon" alt="Facebook" />
            </a>
            <a href="#" className="hover:opacity-75">
              <img src="/path-to-whatsapp-icon" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center mt-8">
        <p className="text-sm">
          © 2023 NOBERO. All Rights Reserved by Pratyaya E-commerce Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
