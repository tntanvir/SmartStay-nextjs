'use client'

import React, { useState } from "react";
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("user");
    const [address, setAddress] = useState("");
    const [profile, setProfile] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();


        const singup = {
            username,
            email,
            name,
            phone,
            role,
            address,
            profile,
            password
        }



        fetch('http://127.0.0.1:8000/auth/singup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(singup),
        }).then(res => res.json())
            .then(data => {
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
                router.push('/otp-varify')
            })
            .catch(e => console.log(e))



    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-4xl">
                {/* Header */}
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

                {/* Sign Up Form */}
                <form onSubmit={handleSubmit} className="space-y-5 md:grid md:grid-cols-2 md:gap-6">

                    {/* Left Section */}
                    <div className="space-y-5">
                        {/* Username input with icon */}
                        <div className="relative">
                            <RiAccountCircleLine className="absolute top-3 left-3 text-lg text-gray-500" />
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                className="peer pl-10 pr-4 py-3 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                        </div>

                        {/* Email input with icon */}
                        <div className="relative">
                            <MdOutlineMail className="absolute top-3 left-3 text-lg text-gray-500" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="peer pl-10 pr-4 py-3 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                        </div>

                        {/* Name input */}
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full Name"
                                className="peer pl-4 pr-4 py-3 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                        </div>

                        {/* Phone input */}
                        <div className="relative">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone Number"
                                className="peer pl-4 pr-4 py-3 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-5">
                        {/* Role selection */}
                        <div className="relative">
                            <select
                                id="role"
                                name="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="peer pl-4 pr-4 py-3 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            >
                                <option value="user">User</option>
                                <option value="hotel owner">Hotel Owner</option>
                            </select>
                        </div>

                        {/* Address input */}
                        <div className="relative">
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Address"
                                className="peer pl-4 pr-4 py-3 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                        </div>

                        {/* Profile input */}
                        <div className="relative">
                            <input
                                type="url"
                                id="profile"
                                name="profile"
                                value={profile}
                                onChange={(e) => setProfile(e.target.value)}
                                placeholder="Profile URL"
                                className="peer pl-4 pr-4 py-3 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="peer pl-4 pr-4 py-3 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                        </div>

                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 mt-6"
                    >
                        Sign Up
                    </button>

                </form>

                {/* Sign In Prompt */}
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/signin" className="text-blue-600 hover:underline">
                            Sign In
                        </Link>
                    </p>
                    <p className="text-sm text-gray-600">
                        <Link href="/otp-varify" className="text-blue-600 hover:underline">
                            OTP Varify
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
