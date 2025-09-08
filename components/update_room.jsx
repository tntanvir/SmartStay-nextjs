'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react";
import { useState } from "react";

export default function UpdateRoomData({ id }) {
    const [data, setData] = useState(null);
    const [formData, setFormData] = useState({});

    const loadData = (id) => {
        fetch(`https://smartstay-api.up.railway.app/room/rooms/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('access')}`
            }
        })
            .then(response => response.json())
            .then(res => {
                setData(res);
                setFormData(res);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        fetch(`https://smartstay-api.up.railway.app/room/rooms/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('access')}`
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(updated => {
                setData(updated);
                console.log("Updated:", updated);
            })
            .catch(error => console.error('Error updating data:', error));
    };

    return (
        <AlertDialog maxWidth="xl">
            <AlertDialogTrigger asChild>
                <Button
                    onClick={() => loadData(id)}
                    className="flex items-center gap-1 px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition cursor-pointer"
                >
                    <Pencil size={16} />
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="max-w-xl max-h-[80vh] overflow-y-auto scrollbar-hide">
                <AlertDialogHeader>
                    <AlertDialogTitle>Update Room Data</AlertDialogTitle>

                    {data ? (
                        <div className="space-y-4 mt-2">
                            <div>
                                <label className="block text-sm font-medium mb-1">Image</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image || ""}
                                    onChange={handleChange}
                                    placeholder="Image URL"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title || ""}
                                    onChange={handleChange}
                                    placeholder="Title"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Docs</label>
                                <input
                                    type="text"
                                    name="docs"
                                    value={formData.docs || ""}
                                    onChange={handleChange}
                                    placeholder="Docs"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location || ""}
                                    onChange={handleChange}
                                    placeholder="Location"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price || ""}
                                    onChange={handleChange}
                                    placeholder="Price"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Bed</label>
                                <input
                                    type="number"
                                    name="bed"
                                    value={formData.bed || ""}
                                    onChange={handleChange}
                                    placeholder="Bed"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Bath</label>
                                <input
                                    type="number"
                                    name="bath"
                                    value={formData.bath || ""}
                                    onChange={handleChange}
                                    placeholder="Bath"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Sqft</label>
                                <input
                                    type="number"
                                    name="sqft"
                                    value={formData.sqft || ""}
                                    onChange={handleChange}
                                    placeholder="Sqft"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>
                        </div>
                    ) : (
                        <p>No data available</p>
                    )}

                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleUpdate}
                        className="bg-green-500 hover:bg-green-600 text-white"
                    >
                        Update
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
