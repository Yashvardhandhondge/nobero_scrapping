import React, { useState } from 'react';

const ReadMore = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center mt-8 mb-8">
      <div className="w-full max-w-2xl border rounded-md shadow-sm mx-4">
        <button 
          onClick={toggleOpen} 
          className="w-full text-left p-4 flex justify-between items-center"
        >
          <span>Read More about Oversized T-Shirts Collection</span>
          <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            &#x25BC;
          </span>
        </button>
        {isOpen && (
          <div className="p-4">

            <p>
              Here is more information about the Oversized T-Shirts Collection...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadMore;
