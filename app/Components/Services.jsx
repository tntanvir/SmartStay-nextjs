// 'use client'

// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import { FaList, FaTh, FaHeart, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
// import { toast } from 'react-toastify';

// const Services = () => {
//     const searchParams = useSearchParams();
//     const queryString = searchParams.toString();

//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [view, setView] = useState('list');
//     const [nextPage, setNextPage] = useState(null);
//     const [previousPage, setPreviousPage] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1); // Track current page
//     const [total, setTotal] = useState(0)
//     // Fetch data
//     const fetchData = (url) => {
//         try {
//             let fetchUrl = url || 'https://smartstay-api-production.up.railway.app/room/rooms/';

//             // If queryString is present, append it to the URL
//             if (queryString) {
//                 fetchUrl = `${fetchUrl}?${queryString}`;
//             }

//             // const res = await fetch(fetchUrl);
//             // const response = await res.json();
//             fetch(fetchUrl)
//                 .then(res => res.json())
//                 .then(response => {



//                     // Set data and pagination links
//                     setData(Array.isArray(response.results) ? response.results : []);
//                     setTotal(response?.count)
//                     setNextPage(response?.next);
//                     setPreviousPage(response?.previous);
//                     setLoading(false);
//                 })

//         } catch (error) {
//             console.error("Error fetching data:", error);
//             setLoading(false);
//             setData([]);  // Ensure data is always an array
//         }
//     };

//     // Update page query parameter
//     const updatePageParam = (page) => {
//         const params = new URLSearchParams(searchParams.toString());
//         if (page > 1) {
//             params.set('page', page); // Set the current page
//         } else {
//             params.delete('page'); // Remove page param if on first page
//         }

//         // Update the URL with the new query parameters
//         window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
//     };

//     // Next page logic
//     const handleNextPage = () => {
//         if (nextPage) {
//             const nextPageNumber = currentPage + 1;
//             setCurrentPage(nextPageNumber);
//             updatePageParam(nextPageNumber);
//             fetchData(nextPage); // Fetch the next page data
//         }
//     };

//     // Previous page logic
//     const handlePreviousPage = () => {
//         if (previousPage) {
//             const previousPageNumber = currentPage - 1;
//             setCurrentPage(previousPageNumber);
//             updatePageParam(previousPageNumber);
//             fetchData(previousPage); // Fetch the previous page data
//         }
//     };

//     // On mount, fetch data for the current page
//     useEffect(() => {
//         fetchData();
//     }, [queryString]);


//     const AddMYFavorites = (id) => {
//         fetch(`https://smartstay-api-production.up.railway.app/favorites/favorites/`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${sessionStorage.getItem('access')}`,
//             },
//             body: JSON.stringify({ room_id: id }),
//         })
//             .then(res => res.json())
//             .then(data => {


//                 if (data.error) {
//                     toast.warning(data.error);
//                 }
//                 else {
//                     toast.success("Room added to favorites!");
//                 }
//             })
//             .catch(err => {
//                 console.error(err);
//             });
//     };


//     return (
//         <div className="p-5">
//             <div className='flex justify-between items-center'>
//                 <h1 className="text-xl font-semibold">Total Data {total | 0}</h1>

//                 {/* View toggle buttons */}
//                 <div className="flex justify-center gap-4 mb-6">
//                     <button
//                         onClick={() => setView('list')}
//                         className={`p-2 rounded-md transition cursor-pointer ${view === 'list' ? 'bg-gray-200 text-black' : 'text-gray-400'}`}
//                     >
//                         <FaList />
//                     </button>
//                     <button
//                         onClick={() => setView('grid')}
//                         className={`p-2 rounded-md transition cursor-pointer ${view === 'grid' ? 'bg-gray-200 text-black' : 'text-gray-400'}`}
//                     >
//                         <FaTh />
//                     </button>
//                 </div>
//             </div>

//             {/* Property Listings */}
//             <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6' : 'flex flex-col gap-6'}>
//                 {data.length === 0 ? (
//                     <p>No properties found</p>
//                 ) : (
//                     data.map((property) => (
//                         <div key={property.id} className={`min-w-sm rounded-2xl overflow-hidden shadow-lg border bg-white ${view === 'grid' ? 'flex flex-col' : 'flex'}`}>
//                             {/* Image Section */}
//                             <div className={`relative ${view === 'grid' ? 'min-h-72' : 'w-full h-72'}`}>
//                                 <img
//                                     src={property.image}
//                                     alt={property.title}
//                                     className="w-full h-full object-cover rounded-t-2xl"
//                                 />
//                                 {/* For Sale Tag */}
//                                 <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm rounded-full z-10">For Sale</div>
//                                 {/* Favorite Icon */}
//                                 <div
//                                     onClick={() => AddMYFavorites(property.id)}
//                                     className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer">
//                                     <FaHeart className="text-gray-500 w-5 h-5 " />
//                                 </div>
//                             </div>

//                             {/* Content Section */}
//                             <div className={`p-5 space-y-3 ${view === 'grid' ? '' : 'w-full'}`}>
//                                 <h2 className="text-xl font-semibold">{property.title}</h2>
//                                 <div className="flex items-center text-sm text-gray-600 gap-2">
//                                     <FaMapMarkerAlt className="text-purple-500" />
//                                     {property.location}
//                                 </div>

//                                 {/* Property Features */}
//                                 <div className="grid grid-cols-3 justify-between items-center text-sm text-gray-700 pt-2 border-t mt-4">
//                                     <div className="flex justify-start items-center gap-1">
//                                         <FaBed className="w-4 h-4" /> Bed {property.bed}
//                                     </div>
//                                     <div className="flex justify-center items-center gap-1 border-x">
//                                         <FaBath className="w-4 h-4" /> Bath {property.bath}
//                                     </div>
//                                     <div className="flex justify-end items-center gap-1">
//                                         <FaRulerCombined className="w-4 h-4" /> {property.sqft}
//                                     </div>
//                                 </div>

//                                 {/* Price and Button */}
//                                 <div className="pt-4 mt-4 flex justify-between items-center border-t">
//                                     <span className="text-lg font-semibold text-black">${property.price}</span>
//                                     <Link href={`/room/${property.id}`}>
//                                         <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition text-sm cursor-pointer">View More</button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>


//             <div className="flex justify-between mt-6">
//                 <button
//                     onClick={handlePreviousPage}
//                     disabled={!previousPage}
//                     className={`px-4 py-2 border rounded-md text-gray-500 cursor-pointer disabled:opacity-50 ${!previousPage ? 'bg-gray-200' : 'text-white bg-blue-500 hover:bg-blue-600'}`}
//                 >
//                     Previous
//                 </button>
//                 <button
//                     onClick={handleNextPage}
//                     disabled={!nextPage}
//                     className={`px-4 py-2 border rounded-md text-gray-500 cursor-pointer disabled:opacity-50 ${!nextPage ? 'bg-gray-200' : 'text-white bg-green-500 hover:bg-green-600'}`}
//                 >
//                     Next
//                 </button>
//             </div>

//         </div>
//     );
// };

// export default Services;




// 'use client'

// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import { FaList, FaTh, FaHeart, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaEye, FaSpinner, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import { toast } from 'react-toastify';

// const Services = () => {
//     const searchParams = useSearchParams();
//     const queryString = searchParams.toString();

//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [view, setView] = useState('grid');
//     const [nextPage, setNextPage] = useState(null);
//     const [previousPage, setPreviousPage] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [total, setTotal] = useState(0);
//     const [favorites, setFavorites] = useState(new Set());
//     const [loadingFavorite, setLoadingFavorite] = useState(null);

//     // Fetch data
//     const fetchData = (url) => {
//         setLoading(true);
//         try {
//             let fetchUrl = url || 'https://smartstay-api-production.up.railway.app/room/rooms/';

//             if (queryString) {
//                 fetchUrl = `${fetchUrl}?${queryString}`;
//             }

//             fetch(fetchUrl)
//                 .then(res => res.json())
//                 .then(response => {
//                     setData(Array.isArray(response.results) ? response.results : []);
//                     setTotal(response?.count);
//                     setNextPage(response?.next);
//                     setPreviousPage(response?.previous);
//                     setLoading(false);
//                 })
//                 .catch(error => {
//                     console.error("Error fetching data:", error);
//                     setLoading(false);
//                     setData([]);
//                 });

//         } catch (error) {
//             console.error("Error fetching data:", error);
//             setLoading(false);
//             setData([]);
//         }
//     };

//     const updatePageParam = (page) => {
//         const params = new URLSearchParams(searchParams.toString());
//         if (page > 1) {
//             params.set('page', page);
//         } else {
//             params.delete('page');
//         }
//         window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
//     };

//     const handleNextPage = () => {
//         if (nextPage) {
//             const nextPageNumber = currentPage + 1;
//             setCurrentPage(nextPageNumber);
//             updatePageParam(nextPageNumber);
//             fetchData(nextPage);
//         }
//     };

//     const handlePreviousPage = () => {
//         if (previousPage) {
//             const previousPageNumber = currentPage - 1;
//             setCurrentPage(previousPageNumber);
//             updatePageParam(previousPageNumber);
//             fetchData(previousPage);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [queryString]);

//     const AddMYFavorites = async (id) => {
//         setLoadingFavorite(id);
//         try {
//             const response = await fetch(`https://smartstay-api-production.up.railway.app/favorites/favorites/`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${sessionStorage.getItem('access')}`,
//                 },
//                 body: JSON.stringify({ room_id: id }),
//             });

//             const data = await response.json();

//             if (data.error) {
//                 toast.warning(data.error, {
//                     position: "top-right",
//                     theme: "light",
//                 });
//             } else {
//                 setFavorites(prev => new Set([...prev, id]));
//                 toast.success("Added to favorites!", {
//                     position: "top-right",
//                     theme: "light",
//                 });
//             }
//         } catch (err) {
//             console.error(err);
//             toast.error("Something went wrong!", {
//                 position: "top-right",
//                 theme: "light",
//             });
//         } finally {
//             setLoadingFavorite(null);
//         }
//     };

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center min-h-96">
//                 <div className="text-center">
//                     <FaSpinner className="animate-spin text-4xl text-purple-600 mx-auto mb-4" />
//                     <p className="text-lg text-slate-600">Loading amazing properties...</p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/30">
//             <div className="max-w-7xl mx-auto p-6">
//                 {/* Header Section */}
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//                     <div>
//                         <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent mb-2">
//                             Discover Properties
//                         </h1>
//                         <p className="text-slate-600 flex items-center gap-2">
//                             <span className="font-semibold text-purple-600">{total || 0}</span>
//                             properties found
//                         </p>
//                     </div>

//                     {/* View Toggle */}
//                     <div className="flex items-center gap-2 bg-white rounded-2xl shadow-lg border border-slate-200 p-1">
//                         <button
//                             onClick={() => setView('grid')}
//                             className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${view === 'grid'
//                                 ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
//                                 : 'text-slate-600 hover:text-purple-600 hover:bg-slate-50'
//                                 }`}
//                         >
//                             <FaTh className="w-4 h-4" />
//                             Grid
//                         </button>
//                         <button
//                             onClick={() => setView('list')}
//                             className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${view === 'list'
//                                 ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
//                                 : 'text-slate-600 hover:text-purple-600 hover:bg-slate-50'
//                                 }`}
//                         >
//                             <FaList className="w-4 h-4" />
//                             List
//                         </button>
//                     </div>
//                 </div>

//                 {/* Property Listings */}
//                 <div className={
//                     view === 'grid'
//                         ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'
//                         : 'space-y-6'
//                 }>
//                     {data.length === 0 ? (
//                         <div className="col-span-full text-center py-16">
//                             <div className="text-6xl text-slate-300 mb-4">🏠</div>
//                             <h3 className="text-xl font-semibold text-slate-600 mb-2">No properties found</h3>
//                             <p className="text-slate-500">Try adjusting your filters or search criteria</p>
//                         </div>
//                     ) : (
//                         data.map((property) => (
//                             <div
//                                 key={property.id}
//                                 className={`group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${view === 'list' ? 'flex' : 'flex flex-col'
//                                     }`}
//                             >
//                                 {/* Image Section */}
//                                 <div className={`relative overflow-hidden ${view === 'list' ? 'w-80 flex-shrink-0' : 'w-full'
//                                     }`}>
//                                     <img
//                                         src={property.image}
//                                         alt={property.title}
//                                         className={`object-cover transition-transform duration-700 group-hover:scale-110 ${view === 'list' ? 'w-full h-full' : 'w-full h-56'
//                                             }`}
//                                     />

//                                     {/* Overlay */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

//                                     {/* Status Badge */}
//                                     <div className="absolute top-4 left-4">
//                                         <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full shadow-lg">
//                                             Available
//                                         </div>
//                                     </div>

//                                     {/* Favorite Button */}
//                                     <button
//                                         onClick={() => AddMYFavorites(property.id)}
//                                         disabled={loadingFavorite === property.id}
//                                         className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 disabled:opacity-70"
//                                     >
//                                         {loadingFavorite === property.id ? (
//                                             <FaSpinner className="w-4 h-4 text-slate-600 animate-spin" />
//                                         ) : (
//                                             <FaHeart className={`w-4 h-4 transition-colors duration-300 ${favorites.has(property.id) ? 'text-red-500' : 'text-slate-600 hover:text-red-500'
//                                                 }`} />
//                                         )}
//                                     </button>

//                                     {/* Price Badge */}
//                                     <div className="absolute bottom-4 left-4">
//                                         <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
//                                             <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                                                 ${property.price}
//                                             </span>
//                                             <span className="text-slate-600 text-sm ml-1">/night</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Content Section */}
//                                 <div className="p-6 flex-1 flex flex-col">
//                                     <div className="flex-1">
//                                         <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
//                                             {property.title}
//                                         </h2>

//                                         <div className="flex items-center gap-2 text-slate-600 mb-4">
//                                             <FaMapMarkerAlt className="text-purple-500 w-4 h-4" />
//                                             <span className="text-sm">{property.location}</span>
//                                         </div>

//                                         {/* Rating */}
//                                         <div className="flex items-center gap-2 mb-4">
//                                             <div className="flex text-yellow-400">
//                                                 {[...Array(5)].map((_, i) => (
//                                                     <FaStar key={i} className="w-3 h-3 fill-current" />
//                                                 ))}
//                                             </div>
//                                             <span className="text-sm text-slate-500">4.9 (120)</span>
//                                         </div>

//                                         {/* Features */}
//                                         <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-100">
//                                             <div className="flex items-center gap-2 text-sm text-slate-600">
//                                                 <div className="p-2 bg-purple-100 rounded-lg">
//                                                     <FaBed className="w-3 h-3 text-purple-600" />
//                                                 </div>
//                                                 <span>{property.bed}</span>
//                                             </div>
//                                             <div className="flex items-center gap-2 text-sm text-slate-600">
//                                                 <div className="p-2 bg-blue-100 rounded-lg">
//                                                     <FaBath className="w-3 h-3 text-blue-600" />
//                                                 </div>
//                                                 <span>{property.bath}</span>
//                                             </div>
//                                             <div className="flex items-center gap-2 text-sm text-slate-600">
//                                                 <div className="p-2 bg-green-100 rounded-lg">
//                                                     <FaRulerCombined className="w-3 h-3 text-green-600" />
//                                                 </div>
//                                                 <span>{property.sqft}</span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Action Button */}
//                                     <div className="pt-4 border-t border-slate-100">
//                                         <Link href={`/room/${property.id}`}>
//                                             <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02]">
//                                                 <FaEye className="w-4 h-4" />
//                                                 View Details
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>

//                 {/* Pagination */}
//                 {data.length > 0 && (
//                     <div className="flex items-center justify-center gap-4 mt-12">
//                         <button
//                             onClick={handlePreviousPage}
//                             disabled={!previousPage}
//                             className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:border-purple-300 hover:text-purple-600"
//                         >
//                             <FaChevronLeft className="w-4 h-4" />
//                             Previous
//                         </button>

//                         <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
//                             <span className="text-sm font-medium text-slate-700">
//                                 Page {currentPage}
//                             </span>
//                         </div>

//                         <button
//                             onClick={handleNextPage}
//                             disabled={!nextPage}
//                             className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:border-purple-300 hover:text-purple-600"
//                         >
//                             Next
//                             <FaChevronRight className="w-4 h-4" />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Services;


'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
    FaList, FaTh, FaHeart, FaMapMarkerAlt, FaBed, FaBath,
    FaRulerCombined, FaEye, FaSpinner, FaStar, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import { toast } from 'react-toastify';

const Services = () => {
    const searchParams = useSearchParams();
    const queryString = searchParams.toString();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState('grid');
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [favorites, setFavorites] = useState(new Set());
    const [loadingFavorite, setLoadingFavorite] = useState(null);

    // Fetch data
    const fetchData = (url) => {
        setLoading(true);
        try {
            let fetchUrl = url || 'https://smartstay-api-production.up.railway.app/room/rooms/';

            if (queryString) {
                fetchUrl = `${fetchUrl}?${queryString}`;
            }

            fetch(fetchUrl)
                .then(res => res.json())
                .then(response => {
                    setData(Array.isArray(response.results) ? response.results : []);
                    setTotal(response?.count);
                    setNextPage(response?.next);
                    setPreviousPage(response?.previous);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                    setData([]);
                });

        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
            setData([]);
        }
    };

    const updatePageParam = (page) => {
        const params = new URLSearchParams(searchParams.toString());
        if (page > 1) {
            params.set('page', page);
        } else {
            params.delete('page');
        }
        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    };

    const handleNextPage = () => {
        if (nextPage) {
            const nextPageNumber = currentPage + 1;
            setCurrentPage(nextPageNumber);
            updatePageParam(nextPageNumber);
            fetchData(nextPage);
        }
    };

    const handlePreviousPage = () => {
        if (previousPage) {
            const previousPageNumber = currentPage - 1;
            setCurrentPage(previousPageNumber);
            updatePageParam(previousPageNumber);
            fetchData(previousPage);
        }
    };

    useEffect(() => {
        fetchData();
    }, [queryString]);

    const AddMYFavorites = async (id) => {
        setLoadingFavorite(id);
        try {
            const response = await fetch(`https://smartstay-api-production.up.railway.app/favorites/favorites/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('access')}`,
                },
                body: JSON.stringify({ room_id: id }),
            });

            const data = await response.json();

            if (data.error) {
                toast.warning(data.error);
            } else {
                setFavorites(prev => new Set([...prev, id]));
                toast.success("Added to favorites!");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong!");
        } finally {
            setLoadingFavorite(null);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-96">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-purple-600 mx-auto mb-4" />
                    <p className="text-lg text-slate-600">Loading properties...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto p-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800 mb-2">
                            Discover Properties
                        </h1>
                        <p className="text-slate-600 flex items-center gap-2">
                            <span className="font-semibold text-purple-600">{total || 0}</span>
                            properties found
                        </p>
                    </div>

                    {/* View Toggle */}
                    <div className="flex items-center gap-2 bg-white rounded-2xl border border-slate-200 p-1">
                        <button
                            onClick={() => setView('grid')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium ${view === 'grid'
                                ? 'bg-purple-600 text-white'
                                : 'text-slate-600'
                                }`}
                        >
                            <FaTh className="w-4 h-4" />
                            Grid
                        </button>
                        <button
                            onClick={() => setView('list')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium ${view === 'list'
                                ? 'bg-purple-600 text-white'
                                : 'text-slate-600'
                                }`}
                        >
                            <FaList className="w-4 h-4" />
                            List
                        </button>
                    </div>
                </div>

                {/* Property Listings */}
                <div className={view === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'
                    : 'space-y-6'
                }>
                    {data.length === 0 ? (
                        <div className="col-span-full text-center py-16">
                            <h3 className="text-xl font-semibold text-slate-600 mb-2">No properties found</h3>
                            <p className="text-slate-500">Try adjusting your filters</p>
                        </div>
                    ) : (
                        data.map((property) => (
                            <div
                                key={property.id}
                                className={`bg-white rounded-2xl overflow-hidden border border-slate-200 ${view === 'list' ? 'flex' : 'flex flex-col'}`}
                            >
                                {/* Image Section */}
                                <div className={`${view === 'list' ? 'w-80 flex-shrink-0' : 'w-full'}`}>
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className={`${view === 'list' ? 'w-full h-full' : 'w-full h-56'} object-cover`}
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold text-slate-800 mb-2">
                                            {property.title}
                                        </h2>

                                        <div className="flex items-center gap-2 text-slate-600 mb-4">
                                            <FaMapMarkerAlt className="text-purple-500 w-4 h-4" />
                                            <span className="text-sm">{property.location}</span>
                                        </div>

                                        {/* Features */}
                                        <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-100">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <FaBed className="w-4 h-4 text-purple-600" />
                                                <span>{property.bed}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <FaBath className="w-4 h-4 text-blue-600" />
                                                <span>{property.bath}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <FaRulerCombined className="w-4 h-4 text-green-600" />
                                                <span>{property.sqft}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div className="pt-4 border-t border-slate-100">
                                        <Link href={`/room/${property.id}`}>
                                            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-purple-600 text-white font-semibold rounded-xl">
                                                <FaEye className="w-4 h-4" />
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Pagination */}
                {data.length > 0 && (
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <button
                            onClick={handlePreviousPage}
                            disabled={!previousPage}
                            className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-xl disabled:opacity-50"
                        >
                            <FaChevronLeft className="w-4 h-4" />
                            Previous
                        </button>

                        <div className="px-4 py-2 bg-slate-100 rounded-xl">
                            <span className="text-sm font-medium text-slate-700">
                                Page {currentPage}
                            </span>
                        </div>

                        <button
                            onClick={handleNextPage}
                            disabled={!nextPage}
                            className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-xl disabled:opacity-50"
                        >
                            Next
                            <FaChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
