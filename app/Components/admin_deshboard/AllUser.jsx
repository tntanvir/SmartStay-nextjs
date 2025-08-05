'use client';

import React, { useEffect, useState } from 'react';
import AllCustomers from './AllCustomers';

const AllUser = () => {
    const baseUrl = 'http://127.0.0.1:8000/auth/alluser';
    const [users, setUsers] = useState([]);
    const [adminCount, setAdminCount] = useState(0);
    const [ownerCount, setOwnerCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [count, setCount] = useState(0);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    const [url, setUrl] = useState(baseUrl);
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState("username");


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data?.results?.users || []);
                setCount(data?.count || 0);
                setAdminCount(data?.results?.adminCount || 0);
                setOwnerCount(data?.results?.ownerCount || 0);
                setUserCount(data?.results?.userCount || 0);
                setNext(data?.next || null);
                setPrevious(data?.previous || null);
            });
    }, [url]);


    useEffect(() => {
        if (inputValue.trim() !== '') {
            setUrl(`${baseUrl}?${selectedOption}=${inputValue}`);
        } else {
            setUrl(baseUrl);
        }
    }, [inputValue, selectedOption]);

    return (
        <div className="p-6 bg-white rounded-lg">

            {/* Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-100 text-purple-800 p-5 rounded-lg shadow-sm text-center">
                    <span className="text-4xl font-bold">{adminCount}</span>
                    <div className="mt-1 font-medium">Total Admins</div>
                </div>
                <div className="bg-yellow-100 text-yellow-800 p-5 rounded-lg shadow-sm text-center">
                    <span className="text-4xl font-bold">{ownerCount}</span>
                    <div className="mt-1 font-medium">Total Owners</div>
                </div>
                <div className="bg-green-100 text-green-800 p-5 rounded-lg shadow-sm text-center">
                    <span className="text-4xl font-bold">{userCount}</span>
                    <div className="mt-1 font-medium">Total Users</div>
                </div>
            </div>

            {/* Search + Filters */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">All Customers ({count})</h2>
                <div className="flex items-center gap-2">
                    <select
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="username">Username</option>
                        <option value="email">Email</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Enter search value"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>

            {/* User Table */}
            <div className='h-96 overflow-y-auto'>
                {users.length > 0 ? (
                    <AllCustomers users={users} />
                ) : (
                    <p className="text-gray-500 text-sm">No users found.</p>
                )}
            </div>

            {/* Pagination */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setUrl(previous)}
                    disabled={!previous}
                    className={`px-4 py-2 bg-gray-200 text-gray-700 rounded ${!previous ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Previous
                </button>
                <button
                    onClick={() => setUrl(next)}
                    disabled={!next}
                    className={`px-4 py-2 bg-gray-200 text-gray-700 rounded ${!next ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllUser;
