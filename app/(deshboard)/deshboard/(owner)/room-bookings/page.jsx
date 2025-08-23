'use client';

import React, { useEffect, useState } from 'react';
import RooBooklist from './RooBooklist';

const page = () => {
    const [data, setData] = useState(null);
    const [urls, setUrls] = useState('http://127.0.0.1:8000/booking/booking')
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);

    const rows = Array.from({ length: 10 });
    useEffect(() => {
        fetch(urls, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('access')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data?.results?.bookings);
                setData(data?.results?.bookings);
                setNext(data?.next);
                setPrevious(data?.previous);
            })
    }, [urls]);


    return (
        <div>
            <h1 className='py-4 text-3xl'>Booking Management</h1>
            {

                data ?
                    <RooBooklist data={data} setUrls={setUrls} next={next} previous={previous} />

                    :
                    <div className="w-full overflow-x-hidden bg-white shadow-lg rounded-lg border border-gray-200 mt-4 animate-pulse">
                        <table className="w-full min-w-[1000px] table-auto divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className="text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                    <th className="px-2 py-3">Room</th>
                                    <th className="px-2 py-3">User</th>
                                    <th className="px-2 py-3">Location</th>
                                    <th className="px-2 py-3">Start Date</th>
                                    <th className="px-2 py-3">End Date</th>
                                    <th className="px-2 py-3">Rate</th>
                                    <th className="px-2 py-3">Payment</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100 text-sm">
                                {rows.map((_, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-2 py-4 whitespace-nowrap flex items-center gap-4">
                                            <div className="w-20 h-14 bg-gray-200 rounded-lg" />
                                            <div className="space-y-2">
                                                <div className="w-24 h-4 bg-gray-200 rounded" />
                                                <div className="w-16 h-3 bg-gray-100 rounded" />
                                            </div>
                                        </td>

                                        <td className="px-2 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                                                <div className="space-y-2">
                                                    <div className="w-20 h-4 bg-gray-200 rounded" />
                                                    <div className="w-24 h-3 bg-gray-100 rounded" />
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-2 py-4 whitespace-nowrap">
                                            <div className="w-24 h-4 bg-gray-200 rounded" />
                                        </td>

                                        <td className="px-2 py-4 whitespace-nowrap">
                                            <div className="w-20 h-4 bg-gray-200 rounded" />
                                        </td>

                                        <td className="px-2 py-4 whitespace-nowrap">
                                            <div className="w-20 h-4 bg-gray-200 rounded" />
                                        </td>

                                        <td className="px-2 py-4 whitespace-nowrap">
                                            <div className="w-16 h-4 bg-gray-200 rounded" />
                                        </td>

                                        <td className="px-2 py-4 whitespace-nowrap">
                                            <div className="w-16 h-5 bg-gray-300 rounded-full" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default page;

