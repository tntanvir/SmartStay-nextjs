
'use client';
import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import UpdateRoomData from '@/components/update_room';
import Swal from "sweetalert2";

const Page = () => {
    const [rooms, setRooms] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchRooms = (url = 'http://127.0.0.1:8000/room/rooms/') => {
        setLoading(true);
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('access')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setRooms(data.results || []);
                setNextPage(data.next);
                setPrevPage(data.previous);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    // const deleteRoom = (id) => {
    //     if (!confirm('Are you sure you want to delete this room?')) return;
    //     fetch(`http://127.0.0.1:8000/room/rooms/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${sessionStorage.getItem('access')}`,
    //         },
    //     })

    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch((err) => console.error(err));
    // };

    const deleteRoom = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://127.0.0.1:8000/room/rooms/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('access')}`,
                    },
                })
                    .then((res) => {
                        if (res.ok) {
                            Swal.fire(
                                'Deleted!',
                                'The room has been deleted.',
                                'success'
                            );
                            // 🔄 Optional: Refresh your list after deletion
                            // fetchRooms(); 
                        } else {
                            Swal.fire(
                                'Error!',
                                'Something went wrong while deleting.',
                                'error'
                            );
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                        Swal.fire(
                            'Error!',
                            'Failed to delete the room.',
                            'error'
                        );
                    });
            }
        });
    };


    useEffect(() => {
        fetchRooms();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold text-purple-600 mb-6 text-start">
                Available Rooms - {rooms?.length || 0}
            </h1>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
                <table className="w-full border-collapse">
                    <thead className="bg-purple-100 text-purple-700">
                        <tr>
                            <th className="p-4 text-left">Image</th>
                            <th className="p-4 text-left">Title</th>
                            <th className="p-4 text-left">Location</th>
                            <th className="p-4 text-left">Price</th>
                            <th className="p-4 text-left">Beds/Baths</th>
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
                                    key={room.id}
                                    className="border-b hover:bg-purple-50 transition"
                                >
                                    <td className="p-4">
                                        <img
                                            src={room.image}
                                            alt={room.title}
                                            className="w-24 h-16 object-cover rounded-lg shadow"
                                        />
                                    </td>
                                    <td className="p-4 font-semibold">{room.title}</td>
                                    <td className="p-4 text-gray-600">{room.location}</td>
                                    <td className="p-4 text-purple-600 font-bold">
                                        ${room.price}
                                    </td>
                                    <td className="p-4 text-gray-700">
                                        {room.bed} Bed • {room.bath} Bath
                                    </td>
                                    <td className="p-4 flex justify-center gap-3">
                                        <UpdateRoomData id={room.id} />
                                        <button
                                            onClick={() => deleteRoom(room.id)}
                                            className="flex items-center gap-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center gap-4 mt-8">
                <button
                    disabled={!prevPage}
                    onClick={() => fetchRooms(prevPage)}
                    className={`px-5 py-2 rounded-lg font-medium transition ${prevPage
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    Previous
                </button>
                <button
                    disabled={!nextPage}
                    onClick={() => fetchRooms(nextPage)}
                    className={`px-5 py-2 rounded-lg font-medium transition ${nextPage
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Page;
