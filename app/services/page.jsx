'use client'

import { useState } from 'react'
import { FaTh, FaList, FaHeart, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaSearch } from 'react-icons/fa'

const properties = [
    {
        id: 1,
        title: 'Charming Beach House',
        address: '39581 Rohan Estates, New York',
        price: '$179,800.00',
        beds: 4,
        baths: 2,
        size: '1500 sqft',
        image: '/images/beach-house.jpg',
    },
    {
        id: 2,
        title: 'Contemporary Loft',
        address: '39581 Rohan Estates, New York',
        price: '$335,800.00',
        beds: 4,
        baths: 2,
        size: '1500 sqft',
        image: '/images/loft.jpg',
    },
    {
        id: 3,
        title: 'Cozy Cottage',
        address: '39581 Rohan Estates, New York',
        price: '$250,800.00',
        beds: 4,
        baths: 2,
        size: '1500 sqft',
        image: '/images/cottage.jpg',
    },
]

export default function PropertyListing() {
    const [view, setView] = useState('list') // default is list
    const [searchTerm, setSearchTerm] = useState('')

    // Filter properties based on search term (location)
    const filteredProperties = properties.filter(property =>
        property.address.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <section className="max-w-7xl mx-auto px-4 py-6">
            <div className="mb-6 text-center">
                {/* Search Bar */}
                <div className="flex items-center border rounded-lg p-2 w-full max-w-md mx-auto">
                    <FaSearch className="text-gray-500 ml-3" />
                    <input
                        type="text"
                        placeholder="Enter location"
                        className="w-full p-2 rounded-r-lg border-0 focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Toggle View Controls */}
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
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                        : 'flex flex-col gap-6'
                }
            >
                {filteredProperties.map((property) => (
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
                                {property.address}
                            </div>

                            {/* Property Features */}
                            <div className="flex justify-between text-sm text-gray-700 pt-2 border-t mt-4">
                                <div className="flex items-center gap-1">
                                    <FaBed className="w-4 h-4" /> Bed {property.beds}
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaBath className="w-4 h-4" /> Bath {property.baths}
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaRulerCombined className="w-4 h-4" /> {property.size}
                                </div>
                            </div>

                            {/* Price and Button */}
                            <div className="pt-4 mt-4 flex justify-between items-center border-t">
                                <span className="text-lg font-semibold text-black">{property.price}</span>
                                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition text-sm">
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
