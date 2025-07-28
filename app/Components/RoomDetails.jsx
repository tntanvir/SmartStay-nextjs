import React from 'react';
import Image from 'next/image';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';

const RoomDetails = ({ data }) => {
    // Assuming data is passed down as a prop, we will destructure it.
    if (!data) return <div>Loading...</div>;

    return (
        <section className="max-w-7xl mx-auto px-6 py-10">
            {/* Property Image Carousel */}
            <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
                <div className="flex gap-4">
                    {data.image && (
                        <div className="w-full">
                            <img
                                src={data.image}
                                alt={data.title}
                                width={1500}
                                height={900}
                                className="w-full h-96 object-cover rounded-xl"
                            />
                        </div>
                    )}
                </div>
                <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-full text-sm">
                    {data.is_booking ? 'Booked' : 'For Sale'}
                </div>
            </div>

            {/* Property Info */}
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{data.title}</h1>
                <p className="text-xl text-gray-600 mt-2">{data.location}</p>
                <div className="flex justify-center items-center gap-4 mt-4 text-gray-500">
                    <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-red-500" />
                        {data.country}
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">${data.price}</span>
                    </div>
                </div>
            </div>

            {/* Room Features */}
            <div className="flex flex-col md:flex-row justify-between gap-6 mt-8 border-t pt-6">
                <div className="flex items-center gap-2 text-gray-600">
                    <FaBed className="w-5 h-5 text-gray-600" />
                    <span>{data.bed} Beds</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <FaBath className="w-5 h-5 text-gray-600" />
                    <span>{data.bath} Baths</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <FaRulerCombined className="w-5 h-5 text-gray-600" />
                    <span>{data.sqft} sqft</span>
                </div>
            </div>

            {/* Description Section */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
                <p className="mt-4 text-lg text-gray-600">{data.docs}</p>
            </div>

            {/* Property Highlights */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t pt-6">
                <div className="flex flex-col gap-4 text-gray-600">
                    <h3 className="text-xl font-semibold">Property Highlights</h3>
                    <ul>
                        <li><strong>ID No.:</strong> {data.id}</li>
                        <li><strong>Type:</strong> {data.max_capacity}</li>
                        <li><strong>Rooms:</strong> {data.bed + data.bath}</li>
                        <li><strong>Purpose:</strong> {data.is_booking ? 'Booked' : 'Available'}</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 text-gray-600">
                    <h3 className="text-xl font-semibold">Additional Features</h3>
                    <ul>
                        {data.types && data.types.map((type, index) => (
                            <li key={index}><strong>{type.toUpperCase()}:</strong> Yes</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Contact & View More */}
            <div className="mt-10 flex justify-between items-center border-t pt-6">
                {data.is_booking && <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Booking
                </button>}

            </div>
        </section>
    );
};

export default RoomDetails;
