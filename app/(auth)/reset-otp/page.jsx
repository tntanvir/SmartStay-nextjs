'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


const ResetOtp = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    // Handle form submission to resend OTP
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setIsValid(false);
            setErrorMessage('Please enter your email.');
            toast.error('Please enter your email.');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('https://smartstay-api-production.up.railway.app/auth/resend-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('OTP has been resent to your email');
                setIsValid(true);
                setErrorMessage('');
                router.push('/otp-varify')

            } else {
                setIsValid(false);
                setErrorMessage(result.message || 'An error occurred. Please try again later.');
                toast.error(result.message || 'An error occurred. Please try again later.');
            }
        } catch (error) {
            setIsValid(false);
            setErrorMessage('There was an error. Please try again later.');
            toast.error('There was an error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="flex flex-col items-center p-10 bg-gray-100 rounded-xl shadow-lg mx-auto w-full sm:w-96">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">Reset OTP</h2>

                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">

                    {/* Email Input */}
                    <div className="mb-6 w-full">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full py-3 px-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition duration-300"
                            required
                        />
                    </div>

                    {/* Error Message */}
                    {!isValid && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-purple-500 text-white text-lg font-semibold rounded-lg hover:bg-purple-600 transition duration-300"
                    >
                        {loading ? 'Sending...' : 'Resend OTP'}
                    </button>
                </form>
                <p className='w-full text-center pt-1'><Link className='text-sm hover:underline text-blue-600 w-full' href='/signin'>Go to Signin?</Link></p>
            </div>


        </div>
    );
};

export default ResetOtp;
