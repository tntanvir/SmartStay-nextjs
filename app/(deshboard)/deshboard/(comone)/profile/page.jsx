"use client";

import { useUser } from "@/context/UserContext";
import { useState } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("about");
    const { user } = useUser();

    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-500">
                Loading profile...
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left side */}
                <div className="space-y-6">
                    {/* Profile Image */}
                    <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center">
                        <img
                            src={user.profile}
                            alt={user.name}
                            className="w-40 h-40 object-cover rounded-full border-4 border-blue-100"
                        />
                        <h2 className="mt-4 font-bold text-lg text-gray-800">
                            {user.name}
                        </h2>
                        <p className="text-gray-500 text-sm">@{user.username}</p>
                        {user.is_verified ? (
                            <p className="flex items-center text-green-600 text-sm mt-2">
                                <FaCheckCircle className="mr-1" /> Verified
                            </p>
                        ) : (
                            <p className="flex items-center text-red-600 text-sm mt-2">
                                <FaTimesCircle className="mr-1" /> Not Verified
                            </p>
                        )}
                    </div>

                    {/* Status */}
                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h3 className="font-semibold text-gray-700 mb-2">Account Status</h3>
                        <p
                            className={`inline-block px-3 py-1 rounded-full text-sm ${user.is_active
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                                }`}
                        >
                            {user.is_active ? "Active" : "Inactive"}
                        </p>
                    </div>
                </div>

                {/* Right side */}
                <div className="md:col-span-2 space-y-6">
                    {/* Header */}
                    <div className="bg-white p-6 rounded-2xl shadow">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {user.name}
                                </h1>
                                <p className="text-blue-500 capitalize">{user.role}</p>
                                <p className="flex items-center text-gray-500 text-sm mt-1">
                                    <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                                    {user.address}
                                </p>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">🔖</button>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3 mt-4">
                            <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
                                Send Message
                            </button>
                            <button className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600">
                                Contacts
                            </button>
                            <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
                                Report User
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="bg-white p-6 rounded-2xl shadow">
                        {/* Tab Nav */}
                        <div className="flex space-x-6 border-b pb-2 mb-4">
                            <button
                                onClick={() => setActiveTab("timeline")}
                                className={`pb-1 ${activeTab === "timeline"
                                    ? "text-blue-500 border-b-2 border-blue-500"
                                    : "text-gray-500"
                                    }`}
                            >
                                Timeline
                            </button>
                            <button
                                onClick={() => setActiveTab("about")}
                                className={`pb-1 ${activeTab === "about"
                                    ? "text-blue-500 border-b-2 border-blue-500"
                                    : "text-gray-500"
                                    }`}
                            >
                                About
                            </button>
                        </div>

                        {/* Tab Content */}
                        {activeTab === "about" && (
                            <div className="space-y-6">
                                {/* Contact Info */}
                                <div>
                                    <h3 className="font-semibold text-gray-700 mb-3">
                                        Contact Information
                                    </h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-center">
                                            <FaPhone className="w-4 h-4 mr-2 text-blue-500" />
                                            {user.phone}
                                        </li>
                                        <li className="flex items-center">
                                            <FaMapMarkerAlt className="w-4 h-4 mr-2 text-blue-500" />
                                            {user.address}
                                        </li>
                                        <li className="flex items-center">
                                            <FaEnvelope className="w-4 h-4 mr-2 text-blue-500" />
                                            {user.email}
                                        </li>
                                    </ul>
                                </div>

                                {/* Basic Info */}
                                <div>
                                    <h3 className="font-semibold text-gray-700 mb-3">
                                        Account Information
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        <strong>Joined:</strong>{" "}
                                        {new Date(user.joined).toLocaleDateString()}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Last Login:</strong>{" "}
                                        {new Date(user.last_login).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === "timeline" && (
                            <p className="text-gray-500">
                                Timeline events will go here...
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
