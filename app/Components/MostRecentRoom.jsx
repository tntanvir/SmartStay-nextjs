// 'use client'
// import React, { useEffect, useState } from 'react';
// import PropertyCard from './PropertyCard';


// const MostRecentRoom = () => {
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch('https://smartstay-api.up.railway.app/room/rooms/latest')
//             .then(response => response.json())
//             .then(data => {
//                 setRoom(data);
//                 setLoading(false);
//             });
//     }, [])


//     const SkeletonCard = () => (
//         <div className="animate-pulse border rounded-2xl p-4 bg-white shadow-md min-h-[300px]">
//             <div className="h-48 bg-gray-200 rounded-t-2xl mb-4"></div>
//             <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//             <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
//             <div className="flex justify-between mt-4">
//                 <div className="h-4 bg-gray-200 rounded w-12"></div>
//                 <div className="h-4 bg-gray-200 rounded w-12"></div>
//             </div>
//         </div>
//     );

//     return (
//         <div className="py-12 bg-gray-50">

//             <div className='text-center max-w-3xl mx-auto mb-8'>
//                 <h2 className="text-4xl font-bold text-purple-600">Most Recent Rooms</h2>
//                 <p className="mt-2 text-gray-600">
//                     Discover the latest rooms added to our collection. Find your perfect space today!
//                 </p>
//             </div>


//             <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
//                     {loading
//                         ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
//                         : room && room.length > 0
//                             ? room.map((roomItem, index) => (
//                                 <PropertyCard key={index} {...roomItem} />
//                             ))
//                             : (
//                                 <div className="col-span-1 sm:col-span-2 lg:col-span-3">
//                                     <p className="text-gray-600">No recent rooms available.</p>
//                                 </div>
//                             )
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MostRecentRoom;



'use client'
import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';

const MostRecentRoom = () => {
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://smartstay-api.up.railway.app/room/rooms/latest')
            .then(response => response.json())
            .then(data => {
                setRoom(data);
                setLoading(false);
            });
    }, [])

    const SkeletonCard = () => (
        <div className="animate-pulse bg-white border border-purple-100 rounded-2xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>
            <div className="p-6 space-y-4">
                <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg w-3/4"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg w-1/2"></div>
                <div className="flex justify-between items-center pt-4">
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg w-16"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg w-16"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg w-16"></div>
                </div>
                <div className="flex justify-between items-center pt-2">
                    <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg w-20"></div>
                    <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-xl w-24"></div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="py-16 bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-400/10 rounded-full"></div>

            <div className="relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-12 px-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                    </div>

                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent mb-4">
                        Most Recent Rooms
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Discover the latest rooms added to our collection. Find your perfect space with modern amenities and premium locations.
                    </p>


                </div>

                {/* Content Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <>
                            {/* Loading Header */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-100 rounded-full">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                                    <span className="text-purple-700 font-medium ml-2">Loading amazing rooms...</span>
                                </div>
                            </div>

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
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-gray-700 font-medium">
                                        {room.length} recent room{room.length !== 1 ? 's' : ''} found
                                    </span>
                                </div>

                                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-lg">
                                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span className="text-sm text-purple-700 font-medium">Recently Updated</span>
                                </div>
                            </div>

                            {/* Properties Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {room.map((roomItem, index) => (
                                    <div key={index} className="transform transition-all duration-300">
                                        <PropertyCard {...roomItem} />
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        /* Empty State */
                        <div className="text-center py-16">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Recent Rooms Available</h3>
                            <p className="text-gray-600 mb-6 max-w-md mx-auto">
                                We're currently updating our listings. Check back soon for the latest room additions!
                            </p>
                            <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-lg">
                                Browse All Rooms
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .animate-shimmer {
                    animation: shimmer 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default MostRecentRoom;