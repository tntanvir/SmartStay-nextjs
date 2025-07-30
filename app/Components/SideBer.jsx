'use client'

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

const SideBer = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [types, setTypes] = useState({
        wifi: false,
        breakfast: false,
        tv: false,
    });

    const [location, setLocation] = useState('');

    // Get updated URL without appending query params after page
    const getUpdatedLink = (newParams = {}) => {
        const params = new URLSearchParams(searchParams.toString());

        // Check if 'page' is already present in the searchParams
        const currentPage = params.get('page');

        // Ensure that we are not duplicating the page parameter
        if (currentPage) {
            params.delete('page'); // Remove any existing 'page' param
        }

        // Append the new parameters first
        const selectedTypes = [];
        if (types.wifi) selectedTypes.push('wifi');
        if (types.breakfast) selectedTypes.push('breakfast');
        if (types.tv) selectedTypes.push('tv');

        selectedTypes.forEach(type => params.append('types', type));

        // Add the location filter, if provided
        if (location) {
            params.set('country', location);
        }

        // Append any additional parameters like room capacity, price, etc.
        Object.entries(newParams).forEach(([key, value]) => {
            params.set(key, value);
        });

        // Finally, append the page query parameter, if it exists
        if (currentPage) {
            params.set('page', currentPage);  // Keep the current page value
        }

        return `${pathname}?${params.toString()}`;
    };

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;

        setTypes((prevTypes) => {
            const newTypes = { ...prevTypes };
            newTypes[id] = checked;
            return newTypes;
        });
    };

    const handleLocationChange = (e) => {
        const newLocation = e.target.value;
        setLocation(newLocation);

        if (newLocation) {
            const updatedLink = getUpdatedLink({ country: newLocation });
            window.history.replaceState({}, '', updatedLink);
        } else {
            const params = new URLSearchParams(searchParams.toString());
            params.delete('country');
            window.history.replaceState({}, '', `${pathname}?${params.toString()}`);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        const selectedTypes = [];
        if (types.wifi) selectedTypes.push('wifi');
        if (types.breakfast) selectedTypes.push('breakfast');
        if (types.tv) selectedTypes.push('tv');

        params.delete('types');
        selectedTypes.forEach(type => params.append('types', type));

        // Update the browser history
        window.history.replaceState({}, '', `${pathname}?${params.toString()}`);
    }, [types, pathname, searchParams]);

    return (
        <aside className="w-72 p-6 bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="flex items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Filters</h2>
            </div>

            <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">Location</label>
                <input
                    type="text"
                    placeholder="Enter Location"
                    value={location} // Bind the input value to the state
                    onChange={handleLocationChange} // Handle changes to the input
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">Room Type</label>
                <div className="space-y-2">
                    <Link href={getUpdatedLink({ max_capacity: 'single' })} className="block text-purple-600 hover:text-purple-800">Single</Link>
                    <Link href={getUpdatedLink({ max_capacity: 'double' })} className="block text-purple-600 hover:text-purple-800">Double</Link>
                    <Link href={getUpdatedLink({ max_capacity: 'triple' })} className="block text-purple-600 hover:text-purple-800">Triple</Link>
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">Price Range</label>
                <div className="space-y-2">
                    <Link href={getUpdatedLink({ price: 'low_to_high' })} className="block text-purple-600 hover:text-purple-800">Low to High</Link>

                    <Link href={getUpdatedLink({ price: 'high_to_low' })} className="block text-purple-600 hover:text-purple-800">High to Low</Link>
                </div>
            </div>

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
                <div className="flex items-center space-x-4">
                    <input
                        type="checkbox"
                        id="tv"
                        checked={types.tv}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 text-purple-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                    <span className="text-gray-700">TV</span>
                </div>
            </div>

            <Link href='/services'>
                <button className='bg-purple-500 w-full p-3 cursor-pointer text-white font-bold'>
                    Reset
                </button>
            </Link>
        </aside>
    );
};

export default SideBer;




