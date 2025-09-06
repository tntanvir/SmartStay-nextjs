'use client';

import RoomBookingList from '@/app/Components/admin_deshboard/RoomBookingList';
import React, { useEffect, useState } from 'react';
import { FaListAlt, FaCheckCircle, FaTimesCircle, FaDoorOpen } from "react-icons/fa";

const page = () => {
    const corUrls = 'https://smartstay-api-production.up.railway.app/booking/booking';
    const [data, setData] = useState(null);
    const [urls, setUrls] = useState(corUrls)
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    const [paidcount, setPaidCount] = useState(0);
    const [unpaidcount, setUnpaidCount] = useState(0);
    const [checkout_count, setCheckoutCount] = useState(0);
    const [total_count, setTotalCount] = useState(0);
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
                setData(data?.results?.bookings);
                setNext(data?.next);
                setPrevious(data?.previous);
                setPaidCount(data?.results?.paid_count);
                setUnpaidCount(data?.results?.unpaid_count);
                setCheckoutCount(data?.results?.checkout_count);
                setTotalCount(data?.results?.total_bookings);
                console.log(data)
            })
    }, [urls]);


    return (
        <div>
            {/* <h1 className='py-4 text-3xl'>Booking Management</h1> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6 ">
                {/* Total Bookings */}
                <div onClick={() => { setUrls(corUrls) }} className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-sm cursor-pointer transition duration-300 p-5 flex items-center gap-4">
                    <div className="rounded-full p-3 bg-gradient-to-r from-blue-500 to-blue-700 shadow-md">
                        <FaListAlt className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Total Bookings</p>
                        <p className="text-2xl font-semibold text-gray-900">{total_count || 0}</p>
                    </div>
                </div>

                {/* Paid Bookings */}
                <div onClick={() => { setUrls(`${corUrls}?paid=true`) }} className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-sm cursor-pointer transition duration-300 p-5 flex items-center gap-4">
                    <div className="rounded-full p-3 bg-gradient-to-r from-green-500 to-green-700 shadow-md">
                        <FaCheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Paid Bookings</p>
                        <p className="text-2xl font-semibold text-gray-900">{paidcount}</p>
                    </div>
                </div>

                {/* Unpaid Bookings */}
                <div onClick={() => { setUrls(`${corUrls}?unpaid=true`) }} className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-sm cursor-pointer transition duration-300 p-5 flex items-center gap-4">
                    <div className="rounded-full p-3 bg-gradient-to-r from-purple-500 to-purple-700 shadow-md">
                        <FaTimesCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Unpaid Bookings</p>
                        <p className="text-2xl font-semibold text-gray-900">{unpaidcount}</p>
                    </div>
                </div>

                {/* Checkout Count */}
                <div onClick={() => { setUrls(`${corUrls}?checkout=true`) }} className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-sm cursor-pointer transition duration-300 p-5 flex items-center gap-4">
                    <div className="rounded-full p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-md">
                        <FaDoorOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Checkout Count</p>
                        <p className="text-2xl font-semibold text-gray-900">{checkout_count}</p>
                    </div>
                </div>
            </div>
            {

                data ?
                    <RoomBookingList data={data} setUrls={setUrls} next={next} previous={previous} />

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

