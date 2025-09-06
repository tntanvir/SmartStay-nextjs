

'use client'
import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';

const PopularRoom = () => {
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://smartstay-api-production.up.railway.app/room/rooms/most-booked')
            .then(response => response.json())
            .then(data => {
                setRoom(data);
                setLoading(false);
            });
    }, [])

    const SkeletonCard = () => (
        <div className="animate-pulse bg-white border rounded-2xl shadow-sm overflow-hidden">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded-lg w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-lg w-1/2"></div>
                <div className="flex justify-between items-center pt-4">
                    <div className="h-4 bg-gray-200 rounded-lg w-16"></div>
                    <div className="h-4 bg-gray-200 rounded-lg w-16"></div>
                    <div className="h-4 bg-gray-200 rounded-lg w-16"></div>
                </div>
                <div className="flex justify-between items-center pt-2">
                    <div className="h-8 bg-gray-200 rounded-lg w-20"></div>
                    <div className="h-10 bg-gray-200 rounded-xl w-24"></div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="py-16 bg-white">
            <div className="relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-12 px-4">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent mb-4">
                        Most Popular Rooms
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our most booked and highly rated rooms. Comfortable, stylish, and perfect for your stay.
                    </p>
                </div>

                {/* Content Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <>
                            {/* Skeleton Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <SkeletonCard key={i} />
                                ))}
                            </div>
                        </>
                    ) : room && room.length > 0 ? (
                        <>
                            {/* Results Header */}
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-gray-700 font-medium">
                                        {room.length} most popular room{room.length !== 1 ? 's' : ''}
                                    </span>
                                </div >
                            </div>

                            {/* Properties Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {room.map((roomItem, index) => (
                                    <PropertyCard key={index} {...roomItem} />
                                ))}
                            </div>
                        </>
                    ) : (
                        /* Empty State */
                        <div className="text-center py-16">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Popular Rooms Yet</h3>
                            <p className="text-gray-600 mb-6 max-w-md mx-auto">
                                We’re gathering booking data to showcase our most popular rooms. Check back soon!
                            </p>
                            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                Browse All Rooms
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PopularRoom;
