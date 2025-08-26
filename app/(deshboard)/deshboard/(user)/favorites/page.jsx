'use client';

import { Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://smartstay-api-production.up.railway.app/favorites/favorites/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('access')}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // ✅ Ensure rooms is always an array
                if (Array.isArray(data)) {
                    setRooms(data);
                } else {
                    setRooms([]); // fallback if backend sends error object
                }

                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setRooms([]);
                setLoading(false);
            });
    }, []);


    const removeFromFavorites = (id) => {
        fetch(`https://smartstay-api-production.up.railway.app/favorites/favorites/${id}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('access')}`,
            },
        })
            .then(res => {
                if (res.status === 200) {
                    // console.log("Removed from favorites!");
                    toast.success("Removed from favorites!");

                } else if (res.status === 404) {
                    // console.error("Favorite not found!");
                    toast.error("Favorite not found!");
                } else {
                    toast.error("Failed to remove favorite");
                }
            })
            .catch(err => {
                toast.error("Error removing from favorites");
            });
    };


    return (
        <div>
            <h1 className="text-3xl font-bold text-purple-600 mb-6 text-start">
                My Favorites - {rooms.length}
            </h1>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
                <table className="w-full border-collapse">
                    <thead className="bg-purple-100 text-purple-700">
                        <tr>
                            <th className="p-4 text-left">Image</th>
                            <th className="p-4 text-left">Title</th>
                            <th className="p-4 text-left">Location</th>
                            <th className="p-4 text-left">Price</th>
                            <th className="p-4 text-left">Capacity</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading
                            ? Array.from({ length: 5 }).map((_, index) => (
                                <tr key={index} className="animate-pulse border-b">
                                    <td className="p-4">
                                        <div className="w-24 h-16 bg-gray-200 rounded-lg" />
                                    </td>
                                    <td className="p-4">
                                        <div className="h-4 bg-gray-200 rounded w-32" />
                                    </td>
                                    <td className="p-4">
                                        <div className="h-4 bg-gray-200 rounded w-40" />
                                    </td>
                                    <td className="p-4">
                                        <div className="h-4 bg-gray-200 rounded w-20" />
                                    </td>
                                    <td className="p-4">
                                        <div className="h-4 bg-gray-200 rounded w-28" />
                                    </td>
                                    <td className="p-4 flex justify-center gap-3">
                                        <div className="h-8 w-8 bg-gray-200 rounded" />
                                        <div className="h-8 w-8 bg-gray-200 rounded" />
                                    </td>
                                </tr>
                            ))
                            : rooms.map((room) => (
                                <tr
                                    key={room?.id}
                                    className="border-b hover:bg-purple-50 transition"
                                >
                                    <td className="p-4">
                                        <img
                                            src={room?.room?.image}
                                            alt={room?.room?.title}
                                            className="w-24 h-16 object-cover rounded-lg shadow"
                                        />
                                    </td>
                                    <td className="p-4 font-semibold">{room?.room?.title}</td>
                                    <td className="p-4 text-gray-600">
                                        {room?.room?.location} / {room?.room?.country}
                                    </td>
                                    <td className="p-4 text-purple-600 font-bold">
                                        ${room?.room?.price}
                                    </td>
                                    <td className="p-4 text-gray-700">
                                        {room?.room?.max_capacity?.charAt(0).toUpperCase() +
                                            room?.room?.max_capacity?.slice(1)}
                                    </td>
                                    <td className="p-4 ">
                                        <button onClick={() => removeFromFavorites(room?.id)} className="flex items-center gap-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
