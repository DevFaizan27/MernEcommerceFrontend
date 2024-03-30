import React, { useState } from 'react';
import { useTheme } from '../context/themeContext';


const DiscountCalculator = () => {
    const { isDarkMode } = useTheme()
    const [originalPrice, setOriginalPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');

    const calculateDiscount = () => {
        const price = parseFloat(originalPrice);
        const discount = parseFloat(discountPercentage);

        if (!isNaN(price) && !isNaN(discount)) {
            const discountedPrice = price - (price * discount / 100);
            setDiscountedPrice(discountedPrice.toFixed(2));
        } else {
            setDiscountedPrice('');
        }
    };

    return (
        <div className={`container h-full mx-auto p-8 ${isDarkMode ? 'bg-slate-800 text-white': 'bg-slate-400'}`}>
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Discount Calculator</h2>
            <div className="flex flex-col space-y-4 max-w-xs mx-auto">
                <div className="flex flex-col">
                    <label htmlFor="originalPrice" className={`text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Original Price:</label>
                    <input
                        type="number"
                        id="originalPrice"
                        className={`border rounded-md py-1 px-2 ${isDarkMode ? 'text-white bg-slate-700' : 'text-gray-900 bg-slate-200'}`}
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="discountPercentage" className={`text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Discount Percentage:</label>
                    <input
                        type="number"
                        id="discountPercentage"
                        className={`border rounded-md py-1 px-2 ${isDarkMode ? 'text-white bg-slate-700' : 'text-gray-900 bg-slate-200'}`}
                        value={discountPercentage}
                        onChange={(e) => setDiscountPercentage(e.target.value)}
                    />
                </div>
                <button
                    className={`py-2 px-4 rounded-md ${isDarkMode ? 'bg-slate-400 text-white' : 'bg-slate-700 text-white'} hover:bg-slate-600`}
                    onClick={calculateDiscount}
                >
                    Calculate Discount
                </button>
                {discountedPrice && (
                    <div className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        Discounted Price: ₹{discountedPrice}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DiscountCalculator;
