"use client";

import React, { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const RoomAdd = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: "",
        docs: "",
        image: "",
        location: "",
        country: "",
        price: "",
        bed: "",
        bath: "",
        sqft: "",
        types: [],
        max_capacity: "",
    });

    const [loading, setLoading] = useState(false);

    const ROOM_TYPES = ["ac", "wifi", "tv", "geyser", "breakfast"];
    const CAPACITY_OPTIONS = ["single", "double", "triple"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckbox = (e) => {
        const { value, checked } = e.target;
        let updatedTypes = [...formData.types];

        if (checked) {
            updatedTypes.push(value);
        } else {
            updatedTypes = updatedTypes.filter((type) => type !== value);
        }

        setFormData({ ...formData, types: updatedTypes });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const accessToken = sessionStorage.getItem("access");
            const res = await fetch("https://smartstay-api-production.up.railway.app/room/rooms/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Room created successfully!", {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    onClose: () => router.push("/deshboard/rooms"),
                });
            } else {
                toast.error(
                    data.error ? JSON.stringify(data.error) : "Something went wrong"
                );
            }
        } catch (error) {
            toast.error("Failed to connect to server.");
        }

        setLoading(false);
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10">
            <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-purple-600 mb-2">
                    Create a New Room
                </h2>
                <p className="text-gray-600">
                    Fill in the details below to add a new room.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <input
                    type="text"
                    name="title"
                    placeholder="Room Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400"
                    required
                />

                <textarea
                    name="docs"
                    placeholder="Description"
                    value={formData.docs}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400"
                    rows={3}
                    required
                />

                <input
                    type="url"
                    name="image"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400"
                    required
                />

                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400"
                        required
                    />
                    <input
                        type="number"
                        name="bed"
                        placeholder="Bed"
                        value={formData.bed}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                        type="number"
                        name="bath"
                        placeholder="Bath"
                        value={formData.bath}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                        type="number"
                        name="sqft"
                        placeholder="Sqft"
                        value={formData.sqft}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                <div>
                    <p className="font-medium mb-2">Amenities</p>
                    <div className="flex flex-wrap gap-4">
                        {ROOM_TYPES.map((type) => (
                            <label key={type} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    value={type}
                                    checked={formData.types.includes(type)}
                                    onChange={handleCheckbox}
                                />
                                {type.toUpperCase()}
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="font-medium mb-2">Max Capacity</p>
                    <select
                        name="max_capacity"
                        value={formData.max_capacity}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400"
                    >
                        <option value="">Select</option>
                        {CAPACITY_OPTIONS.map((cap) => (
                            <option key={cap} value={cap}>
                                {cap.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition disabled:opacity-50"
                >
                    {loading ? "Submitting..." : "Add Room"}
                </button>
            </form>


        </div>
    );
};

export default RoomAdd;
