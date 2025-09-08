

'use client'

import React, { useState } from "react";
import { RiAccountCircleLine, RiLockPasswordLine, RiEyeLine, RiEyeOffLine, RiUserLine, RiPhoneLine, RiMapPinLine, RiImageLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        name: "",
        phone: "",
        role: "user",
        address: "",
        profile: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://smartstay-api.up.railway.app/auth/singup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                router.push('/otp-verify');
            } else {
                toast.error(data.message || 'Registration failed', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
        } catch (error) {
            console.error('Registration error:', error);
            toast.error('Network error. Please try again.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const inputFields = [
        {
            name: "username",
            type: "text",
            placeholder: "Choose a username",
            icon: RiAccountCircleLine,
            label: "Username",
            required: true
        },
        {
            name: "email",
            type: "email",
            placeholder: "Enter your email",
            icon: MdOutlineMail,
            label: "Email Address",
            required: true
        },
        {
            name: "name",
            type: "text",
            placeholder: "Enter your full name",
            icon: RiUserLine,
            label: "Full Name",
            required: true
        },
        {
            name: "phone",
            type: "tel",
            placeholder: "Enter phone number",
            icon: RiPhoneLine,
            label: "Phone Number",
            required: true
        },
        {
            name: "address",
            type: "text",
            placeholder: "Enter your address",
            icon: RiMapPinLine,
            label: "Address",
            required: false
        },
        {
            name: "profile",
            type: "url",
            placeholder: "Profile image URL (optional)",
            icon: RiImageLine,
            label: "Profile Image",
            required: false
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex justify-center items-center p-4">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-5xl relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-purple-500/5 pointer-events-none"></div>

                {/* Header */}
                <div className="relative z-10 mb-8">
                    <Link
                        className="inline-flex items-center text-sm text-gray-500 hover:text-purple-600 transition-colors duration-300 mb-4"
                        href="/"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to home
                    </Link>

                    <div className="text-center">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent mb-2">
                            Create Account
                        </h1>
                        <p className="text-gray-500 text-sm">Join us today and get started</p>
                    </div>
                </div>

                {/* Sign Up Form */}
                <form onSubmit={handleSubmit} className="relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {inputFields.slice(0, 3).map((field) => {
                                const IconComponent = field.icon;
                                return (
                                    <div key={field.name} className="group">
                                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                                            {field.label} {field.required && <span className="text-red-500">*</span>}
                                        </label>
                                        <div className="relative">
                                            <IconComponent className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-xl transition-colors group-focus-within:text-purple-500" />
                                            <input
                                                type={field.type}
                                                id={field.name}
                                                name={field.name}
                                                value={formData[field.name]}
                                                onChange={handleInputChange}
                                                placeholder={field.placeholder}
                                                required={field.required}
                                                disabled={isLoading}
                                                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="group">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <RiPhoneLine className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-xl transition-colors group-focus-within:text-purple-500" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter phone number"
                                        required
                                        disabled={isLoading}
                                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                                    />
                                </div>
                            </div>

                            {/* Role */}
                            <div className="group">
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                                    Role <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        disabled={isLoading}
                                        className="w-full pl-4 pr-4 py-4 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white appearance-none cursor-pointer"
                                    >
                                        <option value="user">User</option>
                                        <option value="hotel owner">Hotel Owner</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="group">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                    Address
                                </label>
                                <div className="relative">
                                    <RiMapPinLine className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-xl transition-colors group-focus-within:text-purple-500" />
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Enter your address"
                                        disabled={isLoading}
                                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row - Profile and Password */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Profile URL */}
                        <div className="group">
                            <label htmlFor="profile" className="block text-sm font-medium text-gray-700 mb-2">
                                Profile Image URL
                            </label>
                            <div className="relative">
                                <RiImageLine className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-xl transition-colors group-focus-within:text-purple-500" />
                                <input
                                    type="url"
                                    id="profile"
                                    name="profile"
                                    value={formData.profile}
                                    onChange={handleInputChange}
                                    placeholder="https://example.com/image.jpg"
                                    disabled={isLoading}
                                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="group">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <RiLockPasswordLine className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-xl transition-colors group-focus-within:text-purple-500" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Create a strong password"
                                    required
                                    disabled={isLoading}
                                    className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    disabled={isLoading}
                                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <RiEyeOffLine className="text-xl" /> : <RiEyeLine className="text-xl" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Creating Account...
                            </>
                        ) : (
                            "Create Account"
                        )}
                    </button>
                </form>

                {/* Sign In Prompt */}
                <div className="text-center mt-8 pt-6 border-t border-gray-200/50 relative z-10 space-y-2">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            href="/signin"
                            className="text-purple-600 hover:text-purple-700 font-semibold hover:underline transition-colors duration-300"
                        >
                            Sign In
                        </Link>
                    </p>
                    <p className="text-sm text-gray-600">
                        <Link
                            href="/otp-varify"
                            className="text-purple-600 hover:text-purple-700 hover:underline transition-colors duration-300"
                        >
                            Verify OTP
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;