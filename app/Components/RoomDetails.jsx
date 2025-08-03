'use client'

import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaPhoneAlt, FaRegStar, FaWifi, FaParking } from 'react-icons/fa';
import RoomBookingSection from './RoomBookingSection';
import { useState } from 'react';
import { useUser } from '@/context/UserContext';


const RoomDetails = ({ data }) => {

    const { user } = useUser()


    return (
        <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
            {/* Property Image Carousel */}
            <div className="relative mb-10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="flex gap-4">
                    {data.image && (
                        <div className="w-full">
                            <img
                                src={data.image}
                                alt={data.title}
                                width={1500}
                                height={900}
                                className="w-full h-96 object-cover rounded-3xl"
                            />
                        </div>
                    )}
                </div>
                <div className="absolute top-6 left-6 bg-gradient-to-r from-black to-transparent text-white px-6 py-2 rounded-full text-xl font-semibold">
                    {data.is_booking ? 'Booked' : 'For Sale'}
                </div>
            </div>

            {/* Property Info */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">{data.title}</h1>
                <p className="text-xl text-gray-500 mt-4">{data.location}</p>
                <div className="flex justify-center items-center gap-8 mt-6 text-gray-600">
                    <div className="flex items-center gap-3 text-xl">
                        <FaMapMarkerAlt className="text-red-500" />
                        <span>{data.country}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xl">
                        <span className="text-lg font-semibold text-gray-900">${data.price}</span>
                    </div>
                </div>
            </div>

            {/* Room Features */}
            <div className="flex flex-col md:flex-row justify-between gap-12 mt-10 border-t pt-6 text-gray-700">
                <div className="flex items-center gap-6 text-lg">
                    <FaBed className="w-6 h-6 text-purple-600" />
                    <span>{data.bed} Beds</span>
                </div>
                <div className="flex items-center gap-6 text-lg">
                    <FaBath className="w-6 h-6 text-blue-600" />
                    <span>{data.bath} Baths</span>
                </div>
                <div className="flex items-center gap-6 text-lg">
                    <FaRulerCombined className="w-6 h-6 text-green-600" />
                    <span>{data.sqft} sqft</span>
                </div>
            </div>

            {/* Description Section */}
            <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-gray-800">Description</h2>
                <p className="mt-4 text-lg text-gray-600">{data.docs}</p>
            </div>

            {/* Property Highlights */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 border-t pt-8">
                <div className="flex flex-col gap-6 text-gray-700">
                    <h3 className="text-2xl font-semibold text-gray-800">Property Highlights</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <FaRegStar className="text-yellow-400" />
                            <strong>ID No.:</strong> {data.id}
                        </li>
                        <li className="flex items-center gap-2">
                            <FaRegStar className="text-yellow-400" />
                            <strong>Type:</strong> {data.max_capacity}
                        </li>

                        {/* <li className="flex items-center gap-2">
                            <FaRegStar className="text-yellow-400" />
                            <strong>Purpose:</strong> {data.is_booking ? 'Booked' : 'Available'}
                        </li> */}
                    </ul>
                </div>
                <div className="flex flex-col gap-6 text-gray-700">
                    <h3 className="text-2xl font-semibold text-gray-800">Additional Features</h3>
                    <ul className="space-y-4">
                        {data.types && data.types.map((type, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <FaRegStar className="text-yellow-400" />
                                <strong >{type.toUpperCase()}:</strong> <p className='text-green-600 font-bold'>Yes</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>


            {user && <RoomBookingSection id={data.id} />}
        </section>
    );
};

export default RoomDetails;

