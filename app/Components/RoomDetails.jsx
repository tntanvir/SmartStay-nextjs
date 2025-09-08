// // 'use client'

// // import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaPhoneAlt, FaRegStar, FaWifi, FaParking } from 'react-icons/fa';
// // import RoomBookingSection from './RoomBookingSection';
// // import { useState } from 'react';
// // import { useUser } from '@/context/UserContext';


// // const RoomDetails = ({ data }) => {

// //     const { user } = useUser()


// //     return (
// //         <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-purple-50 via-purple-50 to-pink-50">
// //             {/* Property Image Carousel */}
// //             <div className="relative mb-10 rounded-3xl overflow-hidden shadow-2xl">
// //                 <div className="flex gap-4">
// //                     {data.image && (
// //                         <div className="w-full">
// //                             <img
// //                                 src={data.image}
// //                                 alt={data.title}
// //                                 width={1500}
// //                                 height={900}
// //                                 className="w-full h-96 object-cover rounded-3xl"
// //                             />
// //                         </div>
// //                     )}
// //                 </div>
// //                 <div className="absolute top-6 left-6 bg-gradient-to-r from-black to-transparent text-white px-6 py-2 rounded-full text-xl font-semibold">
// //                     {data.is_booking ? 'Booked' : 'For Sale'}
// //                 </div>
// //             </div>

// //             {/* Property Info */}
// //             <div className="text-center mb-12">
// //                 <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">{data.title}</h1>
// //                 <p className="text-xl text-gray-500 mt-4">{data.location}</p>
// //                 <div className="flex justify-center items-center gap-8 mt-6 text-gray-600">
// //                     <div className="flex items-center gap-3 text-xl">
// //                         <FaMapMarkerAlt className="text-purple-500" />
// //                         <span>{data.country}</span>
// //                     </div>
// //                     <div className="flex items-center gap-3 text-xl">
// //                         <span className="text-lg font-semibold text-gray-900">${data.price}</span>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Room Features */}
// //             <div className="flex flex-col md:flex-row justify-between gap-12 mt-10 border-t pt-6 text-gray-700">
// //                 <div className="flex items-center gap-6 text-lg">
// //                     <FaBed className="w-6 h-6 text-purple-600" />
// //                     <span>{data.bed} Beds</span>
// //                 </div>
// //                 <div className="flex items-center gap-6 text-lg">
// //                     <FaBath className="w-6 h-6 text-purple-600" />
// //                     <span>{data.bath} Baths</span>
// //                 </div>
// //                 <div className="flex items-center gap-6 text-lg">
// //                     <FaRulerCombined className="w-6 h-6 text-green-600" />
// //                     <span>{data.sqft} sqft</span>
// //                 </div>
// //             </div>

// //             {/* Description Section */}
// //             <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
// //                 <h2 className="text-3xl font-semibold text-gray-800">Description</h2>
// //                 <p className="mt-4 text-lg text-gray-600">{data.docs}</p>
// //             </div>

// //             {/* Property Highlights */}
// //             <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 border-t pt-8">
// //                 <div className="flex flex-col gap-6 text-gray-700">
// //                     <h3 className="text-2xl font-semibold text-gray-800">Property Highlights</h3>
// //                     <ul className="space-y-4">
// //                         <li className="flex items-center gap-2">
// //                             <FaRegStar className="text-yellow-400" />
// //                             <strong>ID No.:</strong> {data.id}
// //                         </li>
// //                         <li className="flex items-center gap-2">
// //                             <FaRegStar className="text-yellow-400" />
// //                             <strong>Type:</strong> {data.max_capacity}
// //                         </li>

// //                         {/* <li className="flex items-center gap-2">
// //                             <FaRegStar className="text-yellow-400" />
// //                             <strong>Purpose:</strong> {data.is_booking ? 'Booked' : 'Available'}
// //                         </li> */}
// //                     </ul>
// //                 </div>
// //                 <div className="flex flex-col gap-6 text-gray-700">
// //                     <h3 className="text-2xl font-semibold text-gray-800">Additional Features</h3>
// //                     <ul className="space-y-4">
// //                         {data.types && data.types.map((type, index) => (
// //                             <li key={index} className="flex items-center gap-2">
// //                                 <FaRegStar className="text-yellow-400" />
// //                                 <strong >{type.toUpperCase()}:</strong> <p className='text-green-600 font-bold'>Yes</p>
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>

// //             </div>


// //             {user && <RoomBookingSection id={data.id} />}
// //         </section>
// //     );
// // };

// // export default RoomDetails;



// 'use client'

// import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaPhoneAlt, FaRegStar, FaWifi, FaParking, FaHeart, FaShare } from 'react-icons/fa';
// import RoomBookingSection from './RoomBookingSection';
// import { useState } from 'react';
// import { useUser } from '@/context/UserContext';

// const RoomDetails = ({ data }) => {
//     const { user } = useUser();
//     const [isLiked, setIsLiked] = useState(false);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
//             {/* Hero Section with Image */}
//             <div className="relative">
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0 opacity-10">
//                     <div
//                         className="w-full h-full"
//                         style={{
//                             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//                         }}
//                     />
//                 </div>

//                 <section className="max-w-7xl mx-auto px-6 py-8 relative">
//                     {/* Property Image with Enhanced Styling */}
//                     <div className="relative mb-16 group">
//                         <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                             {/* Gradient Overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>

//                             {data.image && (
//                                 <div className="relative">
//                                     <img
//                                         src={data.image}
//                                         alt={data.title}
//                                         className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
//                                     />
//                                 </div>
//                             )}

//                             {/* Floating Status Badge */}
//                             <div className="absolute top-6 left-6 z-20">
//                                 <div className={`px-6 py-3 rounded-full backdrop-blur-md border border-white/20 text-white font-semibold text-lg shadow-lg ${data.is_booking
//                                         ? 'bg-gradient-to-r from-red-500/90 to-pink-500/90'
//                                         : 'bg-gradient-to-r from-green-500/90 to-emerald-500/90'
//                                     }`}>
//                                     {data.is_booking ? 'Booked' : 'Available'}
//                                 </div>
//                             </div>

//                             {/* Action Buttons */}
//                             <div className="absolute top-6 right-6 z-20 flex gap-3">
//                                 <button
//                                     onClick={() => setIsLiked(!isLiked)}
//                                     className="p-3 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
//                                 >
//                                     <FaHeart className={`w-5 h-5 ${isLiked ? 'text-red-400' : ''}`} />
//                                 </button>
//                                 <button className="p-3 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all duration-300">
//                                     <FaShare className="w-5 h-5" />
//                                 </button>
//                             </div>

//                             {/* Price Badge */}
//                             <div className="absolute bottom-6 right-6 z-20">
//                                 <div className="px-6 py-3 rounded-2xl backdrop-blur-md bg-white/95 border border-white/50 shadow-xl">
//                                     <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
//                                         ${data.price}
//                                     </span>
//                                     <span className="text-slate-600 ml-1">/ night</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Property Header */}
//                     <div className="text-center mb-16">
//                         <div className="space-y-6">
//                             <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-800 via-purple-800 to-slate-800 bg-clip-text text-transparent leading-tight">
//                                 {data.title}
//                             </h1>

//                             <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
//                                 <div className="flex items-center gap-3 text-slate-600">
//                                     <div className="p-3 rounded-full bg-purple-100">
//                                         <FaMapMarkerAlt className="text-purple-600" />
//                                     </div>
//                                     <span className="font-medium">{data.location}, {data.country}</span>
//                                 </div>
//                                 <div className="hidden md:block w-px h-8 bg-slate-300"></div>
//                                 <div className="flex items-center gap-2">
//                                     <div className="flex text-yellow-400">
//                                         {[...Array(5)].map((_, i) => (
//                                             <FaRegStar key={i} className="w-5 h-5 fill-current" />
//                                         ))}
//                                     </div>
//                                     <span className="text-slate-600 font-medium">4.9 (120 reviews)</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Enhanced Room Features */}
//                     <div className="mb-16">
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                             <div className="group">
//                                 <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 w-fit mb-4">
//                                                 <FaBed className="w-8 h-8 text-purple-600" />
//                                             </div>
//                                             <h3 className="text-2xl font-bold text-slate-800 mb-2">Bedrooms</h3>
//                                             <p className="text-4xl font-black text-purple-600">{data.bed}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="group">
//                                 <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 w-fit mb-4">
//                                                 <FaBath className="w-8 h-8 text-purple-600" />
//                                             </div>
//                                             <h3 className="text-2xl font-bold text-slate-800 mb-2">Bathrooms</h3>
//                                             <p className="text-4xl font-black text-purple-600">{data.bath}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="group">
//                                 <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 w-fit mb-4">
//                                                 <FaRulerCombined className="w-8 h-8 text-emerald-600" />
//                                             </div>
//                                             <h3 className="text-2xl font-bold text-slate-800 mb-2">Square Feet</h3>
//                                             <p className="text-4xl font-black text-emerald-600">{data.sqft}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Description Section with Enhanced Design */}
//                     <div className="mb-16">
//                         <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 relative overflow-hidden">
//                             {/* Decorative Element */}
//                             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

//                             <div className="relative">
//                                 <div className="flex items-center gap-4 mb-6">
//                                     <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-purple-500 rounded-full"></div>
//                                     <h2 className="text-4xl font-bold text-slate-800">About This Property</h2>
//                                 </div>
//                                 <p className="text-xl text-slate-600 leading-relaxed">
//                                     {data.docs}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Enhanced Property Details Grid */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//                         {/* Property Highlights */}
//                         <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100">
//                             <div className="flex items-center gap-4 mb-8">
//                                 <div className="w-1 h-12 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
//                                 <h3 className="text-3xl font-bold text-slate-800">Property Details</h3>
//                             </div>

//                             <div className="space-y-6">
//                                 <div className="flex items-center justify-between py-4 border-b border-slate-100">
//                                     <div className="flex items-center gap-3">
//                                         <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                                         <span className="font-semibold text-slate-700">Property ID</span>
//                                     </div>
//                                     <span className="text-slate-600 font-medium">#{data.id}</span>
//                                 </div>

//                                 <div className="flex items-center justify-between py-4 border-b border-slate-100">
//                                     <div className="flex items-center gap-3">
//                                         <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                                         <span className="font-semibold text-slate-700">Max Capacity</span>
//                                     </div>
//                                     <span className="text-slate-600 font-medium">{data.max_capacity} guests</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Additional Features */}
//                         <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100">
//                             <div className="flex items-center gap-4 mb-8">
//                                 <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
//                                 <h3 className="text-3xl font-bold text-slate-800">Amenities</h3>
//                             </div>

//                             <div className="grid grid-cols-1 gap-4">
//                                 {data.types && data.types.map((type, index) => (
//                                     <div key={index} className="flex items-center justify-between py-4 border-b border-slate-100 last:border-b-0">
//                                         <div className="flex items-center gap-3">
//                                             <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                                             <span className="font-semibold text-slate-700 capitalize">{type}</span>
//                                         </div>
//                                         <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
//                                             Available
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Booking Section */}
//                     {user && (
//                         <div className="bg-gradient-to-r from-purple-50 to-purple-50 rounded-3xl p-2 shadow-lg border border-purple-100">
//                             <div className="bg-white rounded-2xl p-8">
//                                 <RoomBookingSection id={data.id} />
//                             </div>
//                         </div>
//                     )}
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default RoomDetails;


'use client'

import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaPhoneAlt, FaRegStar, FaStar, FaWifi, FaParking, FaHeart, FaShare, FaUser, FaQuoteLeft } from 'react-icons/fa';
import RoomBookingSection from './RoomBookingSection';
import { useState } from 'react';
import { useUser } from '@/context/UserContext';

const RoomDetails = ({ data }) => {
    const { user } = useUser();
    const [isLiked, setIsLiked] = useState(false);

    // Sample reviews data - you can replace this with actual data
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            rating: 5,
            date: "2 weeks ago",
            comment: "Absolutely stunning property! The views were breathtaking and the amenities exceeded expectations. Perfect for a romantic getaway.",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "Michael Chen",
            rating: 5,
            date: "1 month ago",
            comment: "Clean, modern, and beautifully designed space. The host was incredibly responsive and helpful. Would definitely stay again!",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "Emma Williams",
            rating: 4,
            date: "1 month ago",
            comment: "Great location and fantastic amenities. The room was spacious and comfortable. Minor issues with WiFi but overall excellent experience.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
            {/* Hero Section with Image */}
            <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>

                <section className="max-w-7xl mx-auto px-6 py-8 relative">
                    {/* Property Image with Enhanced Styling */}
                    <div className="relative mb-12 group">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>

                            {data.image && (
                                <div className="relative">
                                    <img
                                        src={data.image}
                                        alt={data.title}
                                        className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            )}

                            {/* Floating Status Badge */}
                            <div className="absolute top-6 left-6 z-20">
                                <div className={`px-5 py-2 rounded-full backdrop-blur-md border border-white/20 text-white font-semibold text-sm shadow-lg ${data.is_booking
                                    ? 'bg-gradient-to-r from-red-500/90 to-pink-500/90'
                                    : 'bg-gradient-to-r from-green-500/90 to-emerald-500/90'
                                    }`}>
                                    {data.is_booking ? 'Booked' : 'Available'}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="absolute top-6 right-6 z-20 flex gap-3">
                                <button
                                    onClick={() => setIsLiked(!isLiked)}
                                    className="p-2.5 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                                >
                                    <FaHeart className={`w-4 h-4 ${isLiked ? 'text-red-400' : ''}`} />
                                </button>
                                <button className="p-2.5 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all duration-300">
                                    <FaShare className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Price Badge */}
                            <div className="absolute bottom-6 right-6 z-20">
                                <div className="px-4 py-2 rounded-xl backdrop-blur-md bg-white/95 border border-white/50 shadow-lg">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                                        ${data.price}
                                    </span>
                                    <span className="text-slate-600 text-sm ml-1">/ night</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Property Header */}
                    <div className="text-center mb-12">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-purple-800 to-slate-800 bg-clip-text text-transparent leading-tight">
                                {data.title}
                            </h1>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-base">
                                <div className="flex items-center gap-2 text-slate-600">
                                    <div className="p-2 rounded-full bg-purple-100">
                                        <FaMapMarkerAlt className="text-purple-600 w-4 h-4" />
                                    </div>
                                    <span className="font-medium">{data.location}, {data.country}</span>
                                </div>
                                <div className="hidden md:block w-px h-6 bg-slate-300"></div>
                                <div className="flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-slate-600 font-medium">4.9 (120 reviews)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Room Features */}
                    <div className="mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="group">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 w-fit mb-3">
                                                <FaBed className="w-6 h-6 text-purple-600" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-1">Bedrooms</h3>
                                            <p className="text-3xl font-black text-purple-600">{data.bed}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 w-fit mb-3">
                                                <FaBath className="w-6 h-6 text-purple-600" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-1">Bathrooms</h3>
                                            <p className="text-3xl font-black text-purple-600">{data.bath}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 w-fit mb-3">
                                                <FaRulerCombined className="w-6 h-6 text-emerald-600" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-1">Square Feet</h3>
                                            <p className="text-3xl font-black text-emerald-600">{data.sqft}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description Section with Enhanced Design */}
                    <div className="mb-12">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 relative overflow-hidden">
                            {/* Decorative Element */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-100 rounded-full -translate-y-12 translate-x-12 opacity-50"></div>

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-500 rounded-full"></div>
                                    <h2 className="text-2xl font-bold text-slate-800">About This Property</h2>
                                </div>
                                <p className="text-base text-slate-600 leading-relaxed">
                                    {data.docs}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Property Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Property Highlights */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-slate-800">Property Details</h3>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <span className="font-semibold text-slate-700">Property ID</span>
                                    </div>
                                    <span className="text-slate-600 font-medium">#{data.id}</span>
                                </div>

                                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <span className="font-semibold text-slate-700">Max Capacity</span>
                                    </div>
                                    <span className="text-slate-600 font-medium">{data.max_capacity} guests</span>
                                </div>
                            </div>
                        </div>

                        {/* Additional Features */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-slate-800">Amenities</h3>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                {data.types && data.types.map((type, index) => (
                                    <div key={index} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-b-0">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="font-semibold text-slate-700 capitalize">{type}</span>
                                        </div>
                                        <div className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                            Available
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="mb-12">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-500 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-slate-800">Guest Reviews</h3>
                                <div className="ml-auto flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full">
                                    <FaStar className="text-yellow-400 w-4 h-4" />
                                    <span className="font-bold text-slate-800">4.9</span>
                                    <span className="text-slate-600 text-sm">({reviews.length} reviews)</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {reviews.map((review) => (
                                    <div key={review.id} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-all duration-300">
                                        <div className="flex items-start gap-4 mb-4">
                                            <img
                                                src={review.avatar}
                                                alt={review.name}
                                                className="w-12 h-12 rounded-full object-cover border-2 border-purple-100"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h4 className="font-semibold text-slate-800">{review.name}</h4>
                                                    <span className="text-xs text-slate-500">{review.date}</span>
                                                </div>
                                                <div className="flex text-yellow-400 mb-2">
                                                    {[...Array(review.rating)].map((_, i) => (
                                                        <FaStar key={i} className="w-3 h-3 fill-current" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <FaQuoteLeft className="absolute -top-1 -left-1 text-purple-200 w-4 h-4" />
                                            <p className="text-sm text-slate-600 leading-relaxed pl-4 italic">
                                                {review.comment}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* View All Reviews Button */}
                            <div className="text-center mt-8">
                                <button className="px-6 py-3 bg-gradient-to-r from-purple-100 to-purple-100 text-purple-700 font-semibold rounded-xl hover:from-purple-200 hover:to-purple-200 transition-all duration-300 border border-purple-200">
                                    View All 120 Reviews
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Booking Section */}
                    {user && (
                        <div className="bg-gradient-to-r from-purple-50 to-purple-50 rounded-2xl p-2 shadow-lg border border-purple-100">
                            <div className="bg-white rounded-xl">
                                <RoomBookingSection id={data.id} />
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default RoomDetails;