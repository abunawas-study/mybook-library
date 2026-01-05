import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onSearch, onChange }) => {
    // 1. Logic for debounced search
    useEffect(() => {
        // Only run debounce if there is a value
        if (!value) return;

        const delayDebounce = setTimeout(() => {
            onSearch(value);
        }, 500);

        // Cleanup function to reset timer if user keeps typing
        return () => clearTimeout(delayDebounce);
    }, [value, onSearch]); // 2. Add proper dependencies

    return (
        <div className="max-w-2xl mx-auto mb-16 px-4">
            <div className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-purple-500/20 transition-all duration-300">
                <div className="pl-5 text-gray-400">
                    <Search size={20} />
                </div>

                <input
                    type='text'
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder='Search by title, author or keyword'
                    className='w-full p-5 text-gray-700 bg-transparent focus:outline-none placeholder:text-gray-400'
                />
                
                <div className="pr-2">
                    <button 
                        onClick={() => onSearch(value)}
                        className='bg-purple-600 text-white px-8 py-3.5 rounded-lg hover:bg-purple-700 active:scale-95 transition-all'
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
