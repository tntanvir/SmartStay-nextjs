

'use client'

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiFilter, FiMapPin, FiUsers, FiDollarSign, FiWifi, FiTv, FiCoffee, FiRefreshCw } from 'react-icons/fi';

import { AiOutlineCloseCircle } from "react-icons/ai";

const SideBer = ({ toggleDrawer }) => {
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

    const roomTypes = [
        { key: 'single', label: 'Single Room', icon: FiUsers },
        { key: 'double', label: 'Double Room', icon: FiUsers },
        { key: 'triple', label: 'Triple Room', icon: FiUsers }
    ];

    const priceOptions = [
        { key: 'low_to_high', label: 'Low to High', icon: FiDollarSign },
        { key: 'high_to_low', label: 'High to Low', icon: FiDollarSign }
    ];

    const amenityTypes = [
        { key: 'wifi', label: 'WiFi', icon: FiWifi },
        { key: 'breakfast', label: 'Breakfast', icon: FiCoffee },
        { key: 'tv', label: 'TV', icon: FiTv }
    ];

    return (
        <aside className="w-80 bg-white  shadow-xl border border-slate-100 overflow-hidden sticky top-24">


            <div className="p-6 space-y-8">
                {/* Location Filter */}
                <div className="space-y-3">
                    <div className="flex items-center  justify-between">
                        <div className="flex items-center gap-2">
                            <FiMapPin className="w-5 h-5 text-purple-600" />
                            <label className="text-lg font-semibold text-slate-800">Location</label>
                        </div>
                        <div>
                            <AiOutlineCloseCircle className="text-2xl md:hidden" onClick={toggleDrawer} />
                        </div>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter destination..."
                            value={location}
                            onChange={handleLocationChange}
                            className="w-full pl-4 pr-10 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 text-slate-700 placeholder-slate-400"
                        />
                        <FiMapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    </div>
                </div>

                {/* Room Type Filter */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                        <FiUsers className="w-5 h-5 text-purple-600" />
                        <label className="text-lg font-semibold text-slate-800">Room Type</label>
                    </div>
                    <div className="grid gap-3">
                        {roomTypes.map(({ key, label, icon: Icon }) => (
                            <Link
                                key={key}
                                href={getUpdatedLink({ max_capacity: key })}
                                className="group flex items-center gap-3 p-3 rounded-xl border-2 border-slate-100 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                            >
                                <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                                    <Icon className="w-4 h-4 text-purple-600" />
                                </div>
                                <span className="font-medium text-slate-700 group-hover:text-purple-700">{label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Price Range Filter */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                        <FiDollarSign className="w-5 h-5 text-green-600" />
                        <label className="text-lg font-semibold text-slate-800">Price Range</label>
                    </div>
                    <div className="grid gap-3">
                        {priceOptions.map(({ key, label, icon: Icon }) => (
                            <Link
                                key={key}
                                href={getUpdatedLink({ price: key })}
                                className="group flex items-center gap-3 p-3 rounded-xl border-2 border-slate-100 hover:border-green-300 hover:bg-green-50 transition-all duration-300"
                            >
                                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                                    <Icon className="w-4 h-4 text-green-600" />
                                </div>
                                <span className="font-medium text-slate-700 group-hover:text-green-700">{label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Amenities Filter */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                        <FiWifi className="w-5 h-5 text-orange-600" />
                        <label className="text-lg font-semibold text-slate-800">Amenities</label>
                    </div>
                    <div className="space-y-3">
                        {amenityTypes.map(({ key, label, icon: Icon }) => (
                            <div key={key} className="group">
                                <label className="flex items-center gap-4 p-3 rounded-xl border-2 border-slate-100 hover:bg-orange-50 hover:border-orange-200 cursor-pointer transition-all duration-300">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            id={key}
                                            checked={types[key]}
                                            onChange={handleCheckboxChange}
                                            className="sr-only"
                                        />
                                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${types[key]
                                            ? 'bg-orange-500 border-orange-500 text-white'
                                            : 'border-slate-300 group-hover:border-orange-400'
                                            }`}>
                                            {types[key] && (
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg transition-colors duration-300 ${types[key] ? 'bg-orange-200' : 'bg-orange-100 group-hover:bg-orange-200'
                                            }`}>
                                            <Icon className={`w-4 h-4 ${types[key] ? 'text-orange-700' : 'text-orange-600'}`} />
                                        </div>
                                        <span className={`font-medium transition-colors duration-300 ${types[key] ? 'text-orange-700' : 'text-slate-700 group-hover:text-orange-700'
                                            }`}>{label}</span>
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reset Button */}
                <div className="pt-4 border-t border-slate-200">
                    <Link href='/services' className="block">
                        <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-xl shadow-lg hover:from-slate-700 hover:to-slate-800 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                            <FiRefreshCw className="w-5 h-5" />
                            Reset All Filters
                        </button>
                    </Link>
                </div>
            </div>

            {/* Bottom decoration */}
            <div className="h-1 bg-gradient-to-r from-purple-500 via-purple-500 to-indigo-500"></div>
        </aside>
    );
};

export default SideBer;