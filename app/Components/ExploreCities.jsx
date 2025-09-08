

// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";

// export default function ExploreCities() {
//     return (
//         <section className="w-full px-6 md:px-20 py-20 bg-[#fafafa] text-black">
//             {/* Header Section */}
//             <div className="flex justify-between items-center mb-10">
//                 <div>
//                     <p className="text-sm text-black font-semibold">Explore Cities</p>
//                     <h2 className="text-3xl md:text-4xl font-bold text-purple-600">Explore The Neighborhoods</h2>
//                     <p className="text-black mt-1">Find your dream apartment with our listing</p>
//                 </div>
//                 <button className="border px-5 py-2 rounded-lg text-sm hover:bg-gray-100 transition text-black">
//                     Browse All Now
//                 </button>
//             </div>

//             {/* Grid of Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {/* Large Card - Cape Town */}
//                 <div className="md:row-span-2 relative rounded-3xl overflow-hidden bg-gray-200">
//                     <Image
//                         src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//                         alt="Luxury hotel room in Cape Town with ocean view"
//                         width={800}
//                         height={800}
//                         className="w-full h-full object-cover rounded-3xl"
//                         priority
//                     />
//                     <div className="absolute bottom-5 left-5 text-white">
//                         <p className="text-sm font-medium">42 Properties</p>
//                         <h3 className="text-lg font-semibold">Cape Town, South Africa</h3>
//                     </div>
//                 </div>

//                 {/* Top Right - Sydney */}
//                 <div className="relative rounded-3xl overflow-hidden bg-gray-200">
//                     <Image
//                         src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
//                         alt="Modern hotel room in Sydney with city skyline view"
//                         width={800}
//                         height={400}
//                         className="w-full h-full object-cover rounded-3xl"
//                     />
//                     <div className="absolute bottom-5 left-5 text-white">
//                         <p className="text-sm font-medium">34 Properties</p>
//                         <h3 className="text-lg font-semibold">Sydney, Australia</h3>
//                     </div>
//                 </div>

//                 {/* Bottom Left - LA */}
//                 <div className="relative rounded-3xl overflow-hidden bg-gray-200">
//                     <Image
//                         src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//                         alt="Elegant hotel suite in Los Angeles with modern amenities"
//                         width={800}
//                         height={400}
//                         className="w-full h-full object-cover rounded-3xl"
//                     />
//                     <div className="absolute bottom-5 left-5 text-white">
//                         <p className="text-sm font-medium">55 Properties</p>
//                         <h3 className="text-lg font-semibold">Los Angeles, California</h3>
//                     </div>
//                 </div>

//                 {/* Bottom Right - Seoul */}
//                 <div className="relative rounded-3xl overflow-hidden bg-gray-200">
//                     <Image
//                         src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//                         alt="Contemporary hotel room in Seoul with minimalist design"
//                         width={800}
//                         height={400}
//                         className="w-full h-full object-cover rounded-3xl"
//                     />
//                     <div className="absolute bottom-5 left-5 text-white">
//                         <p className="text-sm font-medium">25 Properties</p>
//                         <h3 className="text-lg font-semibold">Seoul, South Korea</h3>
//                     </div>
//                 </div>

//                 {/* Additional Card - Tokyo */}
//                 <div className="relative rounded-3xl overflow-hidden bg-gray-200">
//                     <Image
//                         src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
//                         alt="Premium hotel room in Tokyo with panoramic city view"
//                         width={800}
//                         height={400}
//                         className="w-full h-full object-cover rounded-3xl"
//                     />
//                     <div className="absolute bottom-5 left-5 text-white">
//                         <p className="text-sm font-medium">38 Properties</p>
//                         <h3 className="text-lg font-semibold">Tokyo, Japan</h3>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


'use client'
import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaMapMarkerAlt, FaBuilding, FaStar } from "react-icons/fa";

export default function ExploreCities() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cities = [
        {
            id: 1,
            name: "Cape Town, South Africa",
            properties: 42,
            rating: 4.8,
            price: "From $1,200",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            alt: "Luxury hotel room in Cape Town with ocean view",
            featured: true
        },
        {
            id: 2,
            name: "Sydney, Australia",
            properties: 34,
            rating: 4.9,
            price: "From $1,800",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
            alt: "Modern hotel room in Sydney with city skyline view"
        },
        {
            id: 3,
            name: "Los Angeles, California",
            properties: 55,
            rating: 4.7,
            price: "From $2,200",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            alt: "Elegant hotel suite in Los Angeles with modern amenities"
        },
        {
            id: 4,
            name: "Seoul, South Korea",
            properties: 25,
            rating: 4.6,
            price: "From $1,000",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            alt: "Contemporary hotel room in Seoul with minimalist design"
        },
        {
            id: 5,
            name: "Tokyo, Japan",
            properties: 38,
            rating: 4.8,
            price: "From $1,500",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
            alt: "Premium hotel room in Tokyo with panoramic city view"
        }
    ];

    return (
        <section className="relative w-full px-6 md:px-20 py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-15 blur-xl"></div>

            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 relative z-10">
                <div className="mb-8 lg:mb-0">
                    <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
                        <FaMapMarkerAlt className="text-purple-600 text-sm" />
                        <span className="text-sm text-purple-800 font-semibold uppercase tracking-wide">
                            Explore Cities
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-800 via-purple-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">
                        Explore The<br />Neighborhoods
                    </h2>

                    <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                        Find your dream apartment with our curated listing of premium properties across the world's most desirable cities.
                    </p>
                </div>

                <button className="group bg-white hover:bg-purple-600 border-2 border-purple-200 hover:border-purple-600 px-8 py-4 rounded-2xl text-purple-600 hover:text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
                    Browse All Now
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {cities.map((city, index) => (
                    <div
                        key={city.id}
                        className={`group relative rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${city.featured ? 'md:row-span-2' : ''
                            } ${hoveredCard === city.id ? 'ring-4 ring-purple-300' : ''}`}
                        onMouseEnter={() => setHoveredCard(city.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Featured badge */}
                        {city.featured && (
                            <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-purple-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                Featured
                            </div>
                        )}

                        {/* Image container with overlay */}
                        <div className="relative h-full min-h-[300px] overflow-hidden">
                            <Image
                                src={city.image}
                                alt={city.alt}
                                width={800}
                                height={city.featured ? 800 : 400}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                priority={index === 0}
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                            {/* Rating badge */}
                            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                                <FaStar className="text-yellow-400 text-sm" />
                                <span className="font-semibold text-gray-800 text-sm">{city.rating}</span>
                            </div>

                            {/* Content overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                    {/* Property count and location */}
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="flex items-center gap-2 text-white/90">
                                            <FaBuilding className="text-sm" />
                                            <span className="font-medium text-sm">{city.properties} Properties</span>
                                        </div>
                                        <div className="text-white font-semibold text-sm bg-white/20 px-3 py-1 rounded-full">
                                            {city.price}
                                        </div>
                                    </div>

                                    {/* City name */}
                                    <h3 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-purple-200 transition-colors duration-300">
                                        {city.name}
                                    </h3>

                                    {/* Action button */}
                                    <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-xl border border-white/30 flex items-center gap-2">
                                        View Properties
                                        <FaArrowRight className="text-sm" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}