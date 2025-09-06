"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const ChangePasswordForm = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const router = useRouter(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (newPassword !== confirmPassword) {

            toast.error('New password and confirm password do not match');

            return;
        }
        if (newPassword.length < 6) {
            toast.error('New password must be at least 6 characters long');
            return;
        }

        const data = {
            old_password: oldPassword,
            new_password: newPassword,
            confirm_password: confirmPassword
        };
        const accessToken = sessionStorage.getItem('access');

        try {
            const response = await fetch('https://smartstay-api-production.up.railway.app/auth/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {

                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
                toast.success('Password changed successfully!'); // Show success toast
                router.push('/'); // Redirect to home after success
            } else {
                const result = await response.json();
                toast.error(result.detail || 'An error occurred'); // Show error toast
            }
        } catch (error) {
            toast.error('Failed to change password'); // Show error toast
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center mb-4">Change Your Password</h2>
            <div className="mb-4">
                <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">Old Password</label>
                <input
                    type="password"
                    id="oldPassword"
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                    type="password"
                    id="newPassword"
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>

            <div className="mb-4 text-center">
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                >
                    Change Password
                </button>
            </div>
            <p className='w-full text-center'>
                <Link className='text-sm hover:underline text-blue-600 w-full' href='/signin'>
                    Go to Signin?
                </Link>
            </p>

        </form>
    );
};

export default ChangePasswordForm;
