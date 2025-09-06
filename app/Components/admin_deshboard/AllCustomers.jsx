'use client';

import AlertComponent from '@/components/comp-313';
import React, { useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

const roleColors = {
    user: 'bg-blue-100 text-blue-800',
    admin: 'bg-pink-100 text-pink-800',
};


const AllUsers = ({ users }) => {



    return (
        <div className="py-6 bg-white rounded-lg ">

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>

                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>

                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 ">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-4 py-4 flex items-center gap-3">
                                    <img src={user?.profile} alt="" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <div className="font-medium text-gray-900">{user.name}</div>
                                        <div className="text-gray-500 text-sm">{user.username}</div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-gray-500">{user?.email}</td>
                                <td className="px-4 py-4">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${roleColors[user.role] || 'bg-orange-100 text-orange-800'}`}
                                    >
                                        {user.role}
                                    </span>
                                </td>

                                <td className="px-4 py-4 text-green-600">{user?.activity ? 'Active' : 'Inactive'}</td>


                                <td className="px-4 py-4 flex justify-end gap-3">
                                    {/* <button className="text-blue-500 hover:text-blue-700 cursor-pointer" title="Update">
                                        <FiEdit size={18} />
                                    </button> */}
                                    <AlertComponent id={user?.id} />


                                    <button className="text-purple-500 hover:text-purple-700 cursor-pointer" title="Delete">
                                        <FiTrash size={18} />
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

export default AllUsers;
