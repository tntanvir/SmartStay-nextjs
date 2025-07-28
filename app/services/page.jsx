'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaList, FaTh, FaHeart, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa'; // Import the icons

const Services = () => {
    const searchParams = useSearchParams();
    const queryString = searchParams.toString();

    const [data, setData] = useState([]);  // Defaulting to an empty array
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState('list'); // Set initial view as 'list'

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'http://127.0.0.1:8000/room/rooms/';

                if (queryString) {
                    url = `${url}?${queryString}`;
                }

                const res = await fetch(url);
                const response = await res.json();
                console.log(response);  // Check the response structure

                // Check if the response is an array under 'results'
                setData(Array.isArray(response.results) ? response.results : []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
                setData([]);  // Ensure data is always an array
            }
        };

        fetchData();
    }, [queryString]);

    return (
        <div className="p-5">
            <h1 className="text-xl font-semibold">Service Page</h1>

            {/* View toggle buttons */}
            <div className="flex justify-center gap-4 mb-6">
                <button
                    onClick={() => setView('list')}
                    className={`p-2 rounded-md transition ${view === 'list' ? 'bg-gray-200 text-black' : 'text-gray-400'}`}
                >
                    <FaList />
                </button>
                <button
                    onClick={() => setView('grid')}
                    className={`p-2 rounded-md transition ${view === 'grid' ? 'bg-gray-200 text-black' : 'text-gray-400'}`}
                >
                    <FaTh />
                </button>
            </div>

            {/* Property Listings */}
            <div
                className={
                    view === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'
                        : 'flex flex-col gap-6'
                }
            >
                {data.length === 0 ? (
                    <p>No properties found</p>
                ) : (
                    data?.map((property) => (
                        <div
                            key={property.id}
                            className={`min-w-sm rounded-2xl overflow-hidden shadow-lg border bg-white ${view === 'grid' ? 'flex flex-col' : 'flex'}`}
                        >
                            {/* Image Section */}
                            <div className={`relative ${view === 'grid' ? 'min-h-72' : 'w-1/2 h-72'}`}>
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-auto object-cover rounded-t-2xl"
                                />
                                {/* For Sale Tag */}
                                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm rounded-full z-10">
                                    For Sale
                                </div>
                                {/* Favorite Icon */}
                                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer">
                                    <FaHeart className="text-gray-500 w-5 h-5" />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className={`p-5 space-y-3 ${view === 'grid' ? '' : 'w-full'}`}>
                                <h2 className="text-xl font-semibold">{property.title}</h2>
                                <div className="flex items-center text-sm text-gray-600 gap-2">
                                    <FaMapMarkerAlt className="text-red-500" />
                                    {property.location}
                                </div>

                                {/* Property Features */}
                                <div className="grid grid-cols-3 justify-between items-center text-sm text-gray-700 pt-2 border-t mt-4 ">
                                    <div className="flex justify-start items-center gap-1 ">
                                        <FaBed className="w-4 h-4" /> Bed {property.bed}
                                    </div>
                                    <div className="flex justify-center items-center gap-1 border-x">
                                        <FaBath className="w-4 h-4" /> Bath {property.bath}
                                    </div>
                                    <div className="flex justify-end items-center gap-1 ">
                                        <FaRulerCombined className="w-4 h-4" /> {property.sqft}
                                    </div>
                                </div>

                                {/* Price and Button */}
                                <div className="pt-4 mt-4 flex justify-between items-center border-t">
                                    <span className="text-lg font-semibold text-black">${property.price}</span>
                                    <Link href={`/room/${property.id}`}>
                                        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition text-sm">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Services;
