'use client'
import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';


const MostRecentRoom = () => {
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://smartstay-api-production.up.railway.app/room/rooms/latest')
            .then(response => response.json())
            .then(data => {
                setRoom(data);
                setLoading(false);
            });
    }, [])


    const SkeletonCard = () => (
        <div className="animate-pulse border rounded-2xl p-4 bg-white shadow-md min-h-[300px]">
            <div className="h-48 bg-gray-200 rounded-t-2xl mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="flex justify-between mt-4">
                <div className="h-4 bg-gray-200 rounded w-12"></div>
                <div className="h-4 bg-gray-200 rounded w-12"></div>
            </div>
        </div>
    );

    return (
        <div className="py-12 bg-gray-50">

            <div className='text-center max-w-3xl mx-auto mb-8'>
                <h2 className="text-4xl font-bold text-gray-900">Most Recent Rooms</h2>
                <p className="mt-2 text-gray-600">
                    Discover the latest rooms added to our collection. Find your perfect space today!
                </p>
            </div>


            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {loading
                        ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
                        : room && room.length > 0
                            ? room.map((roomItem, index) => (
                                <PropertyCard key={index} {...roomItem} />
                            ))
                            : (
                                <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                                    <p className="text-gray-600">No recent rooms available.</p>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default MostRecentRoom;
