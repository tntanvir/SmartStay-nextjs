'use client'

import React, { useState } from "react";
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";

const SingingFrom = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log({ username, password });
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
                {/* Header */}
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

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

                    {/* Password input with icon */}
                    <div className="relative">
                        <RiLockPasswordLine className="absolute top-3 left-3 text-lg text-gray-500" />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="peer pl-10 pr-4 py-3 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        />
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>

                    {/* Forgot Password Link */}
                    <div className="text-center mt-4">
                        <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                </form>

                {/* Sign Up Prompt */}
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a href="/signup" className="text-blue-600 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingingFrom;
