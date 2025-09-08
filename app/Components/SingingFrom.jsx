// 'use client'

// import { useUser } from "@/context/UserContext";
// import Link from "next/link";

// import React, { useState } from "react";
// import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";


// const SingingFrom = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const { login } = useUser();


//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Basic form validation (optional)
//         if (!username || !password) {
//             alert("Please enter both username and password.");
//             return;
//         }

//         login({ username, password });
//     };

//     return (
//         <div className="h-screen flex justify-center items-center">
//             <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
//                 <p className='w-full text-center'><Link className='text-sm hover:underline text-purple-600 w-full' href='/'>Back to home?</Link></p>
//                 <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

//                 {/* Login Form */}
//                 <form onSubmit={handleSubmit} className="space-y-5">

//                     {/* Username input with icon */}
//                     <div className="relative">
//                         <RiAccountCircleLine className="absolute top-3 left-3 text-lg text-gray-500" />
//                         <input
//                             type="text"
//                             id="username"
//                             name="username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             placeholder="Username"
//                             className="peer pl-10 pr-4 py-3 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
//                         />
//                     </div>

//                     {/* Password input with icon */}
//                     <div className="relative">
//                         <RiLockPasswordLine className="absolute top-3 left-3 text-lg text-gray-500" />
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Password"
//                             className="peer pl-10 pr-4 py-3 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
//                         />
//                     </div>

//                     {/* Sign In Button */}
//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
//                     >
//                         Login
//                     </button>


//                     <div className="text-center mt-4">
//                         <Link href="/forgot-password" className="text-sm text-purple-600 hover:underline">
//                             Forgot Password?
//                         </Link>
//                     </div>
//                 </form>

//                 {/* Sign Up Prompt */}
//                 <div className="text-center mt-4">
//                     <p className="text-sm text-gray-600">
//                         Don't have an account?{" "}
//                         <Link href="/signup" className="text-purple-600 hover:underline">
//                             Sign Up
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingingFrom;


'use client'

import { useUser } from "@/context/UserContext";
import Link from "next/link";
import React, { useState } from "react";
import { RiAccountCircleLine, RiLockPasswordLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const SignInForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        setIsLoading(true);
        try {
            await login({ username, password });
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex justify-center items-center p-4">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md relative overflow-hidden">
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
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-gray-500 text-sm">Sign in to your account</p>
                    </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    {/* Username input */}
                    <div className="group">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>
                        <div className="relative">
                            <RiAccountCircleLine className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-xl transition-colors group-focus-within:text-purple-500" />
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {/* Password input */}
                    <div className="group">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <RiLockPasswordLine className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-xl transition-colors group-focus-within:text-purple-500" />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                disabled={isLoading}
                            >
                                {showPassword ? <RiEyeOffLine className="text-xl" /> : <RiEyeLine className="text-xl" />}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="flex justify-end">
                        <Link
                            href="/forgot-password"
                            className="text-sm text-purple-600 hover:text-purple-700 hover:underline transition-colors duration-300"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Signing in...
                            </>
                        ) : (
                            "Sign In"
                        )}
                    </button>
                </form>

                {/* Sign Up Prompt */}
                <div className="text-center mt-8 pt-6 border-t border-gray-200/50 relative z-10">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-purple-600 hover:text-purple-700 font-semibold hover:underline transition-colors duration-300"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;