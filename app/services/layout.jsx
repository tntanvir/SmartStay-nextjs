'use client'

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Layout({ children }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    // State to track selected types (as an array now)
    const [types, setTypes] = useState({
        wifi: false,
        breakfast: false,
    });

    // Function to get the updated URL based on the new parameters
    const getUpdatedLink = (newParams = {}) => {
        const params = new URLSearchParams(searchParams.toString());

        // Add types to the query params if they are selected
        const selectedTypes = [];
        if (types.wifi) selectedTypes.push('wifi');
        if (types.breakfast) selectedTypes.push('breakfast');

        selectedTypes.forEach(type => params.append('types', type));

        // Add other new parameters
        Object.entries(newParams).forEach(([key, value]) => {
            params.set(key, value);
        });

        return `${pathname}?${params.toString()}`;
    };

    // Handle the checkbox changes
    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;

        // If checked, add the type, else remove it
        setTypes((prevTypes) => {
            const newTypes = { ...prevTypes };
            newTypes[id] = checked;
            return newTypes;
        });
    };

    // Use useEffect to update the URL immediately after types change
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        // Reset types in URL based on the current state
        const selectedTypes = [];
        if (types.wifi) selectedTypes.push('wifi');
        if (types.breakfast) selectedTypes.push('breakfast');

        // Clear previous types and set the new ones
        params.delete('types');
        selectedTypes.forEach(type => params.append('types', type));

        // Manually update the URL with the new parameters
        window.history.replaceState({}, '', `${pathname}?${params.toString()}`);
    }, [types, pathname, searchParams]);

    return (
        <div className="flex">
            {/* Sidebar Section */}
            <aside className="w-72 p-6 bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="flex items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Filters</h2>
                </div>

                {/* Location Search */}
                <div className="mb-6">
                    <label className="block text-sm text-gray-600 mb-2">Location</label>
                    <input
                        type="text"
                        placeholder="Enter Location"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                </div>

                {/* Room Type Links */}
                <div className="mb-6">
                    <label className="block text-sm text-gray-600 mb-2">Room Type</label>
                    <div className="space-y-2">
                        <Link href={getUpdatedLink({ max_capacity: 'single' })} className="block text-purple-600 hover:text-purple-800">Single</Link>
                        <Link href={getUpdatedLink({ max_capacity: 'duble' })} className="block text-purple-600 hover:text-purple-800">Double</Link>
                        <Link href={getUpdatedLink({ max_capacity: 'triple' })} className="block text-purple-600 hover:text-purple-800">Triple</Link>
                    </div>
                </div>

                {/* Price Range Links */}
                <div className="mb-6">
                    <label className="block text-sm text-gray-600 mb-2">Price Range</label>
                    <div className="space-y-2">
                        <Link href={getUpdatedLink({ price: 'low_to_high' })} className="block text-purple-600 hover:text-purple-800">Low to High</Link>

                        <Link href={getUpdatedLink({ price: 'high_to_low' })} className="block text-purple-600 hover:text-purple-800">High to Low</Link>
                    </div>
                </div>

                {/* Types Checkboxes */}
                <div className="mb-6">
                    <label className="block text-sm text-gray-600 mb-2">Types</label>
                    <div className="flex items-center space-x-4">
                        <input
                            type="checkbox"
                            id="wifi"
                            checked={types.wifi}
                            onChange={handleCheckboxChange}
                            className="w-5 h-5 text-purple-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                        <span className="text-gray-700">WiFi</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <input
                            type="checkbox"
                            id="breakfast"
                            checked={types.breakfast}
                            onChange={handleCheckboxChange}
                            className="w-5 h-5 text-purple-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                        <span className="text-gray-700">Breakfast</span>
                    </div>
                </div>
                <Link href='/services'>
                    <button className='bg-purple-500 w-full p-3 cursor-pointer text-white font-bold'>
                        Reset
                    </button>
                </Link>
            </aside>

            {/* Main Content Section */}
            <main className="flex-1 p-6 bg-gray-50 rounded-xl overflow-hidden">
                {children}
            </main>
        </div>
    );
}

