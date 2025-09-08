'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


const OTPVerify = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter()
    // Handle OTP input change
    const handleOtpChange = (e, index) => {
        const value = e.target.value;

        if (/[^0-9]/.test(value)) return; // Only allow numbers
        setOtp((prevOtp) => {
            const newOtp = [...prevOtp];
            newOtp[index] = value;
            return newOtp;
        });

        // Move focus to next input
        if (value && index < otp.length - 1) {
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            nextInput?.focus();
        }
    };

    // Handle key press for backspace (move focus to previous input)
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '') {
            const prevInput = document.getElementById(`otp-input-${index - 1}`);
            prevInput?.focus();
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpValue = otp.join('');

        // Check if OTP and email are valid
        if (!email || otpValue.length !== 6) {
            setIsValid(false);
            setErrorMessage('Please enter a valid email and a 6-digit OTP.');
            toast.error('Please enter a valid email and a 6-digit OTP.');
            return;
        }

        // Prepare data to send to the backend
        const data = { email, otp: otpValue };

        try {
            const response = await fetch('https://smartstay-api.up.railway.app/auth/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('OTP Verified Successfully');
                setIsValid(true);
                setErrorMessage('');
                router.push('signin')
            } else {
                setIsValid(false);
                setErrorMessage(result.message || 'Invalid OTP or email.');
                toast.error(result.message || 'Invalid OTP or email.');
            }
        } catch (error) {
            setIsValid(false);
            setErrorMessage('There was an error. Please try again later.');
            toast.error('There was an error. Please try again later.');
        }
    };

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="flex flex-col items-center p-10 bg-gray-100 rounded-xl shadow-lg mx-auto ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">OTP Verification</h2>

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

                    {/* OTP Inputs */}
                    <div className="flex space-x-4 mb-6 w-full justify-center">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-input-${index}`}
                                type="text"
                                value={digit}
                                onChange={(e) => handleOtpChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                maxLength={1}
                                className="w-14 h-14 text-xl text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition duration-300"
                                autoFocus={index === 0}
                            />
                        ))}
                    </div>

                    {/* Error Message */}
                    {!isValid && <p className="text-purple-500 text-sm mb-4">{errorMessage}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-500 text-white text-lg font-semibold rounded-lg hover:bg-purple-600 transition duration-300"
                    >
                        Verify OTP
                    </button>
                </form>
                <div className='pt-3'>
                    <Link href='reset-otp' className=' text-purple-500'>Resend OTP</Link>
                </div>
                <p className='w-full text-center'><Link className='text-sm hover:underline text-purple-600 w-full' href='/signin'>Go to Signin?</Link></p>
            </div>


        </div>
    );
};

export default OTPVerify;
