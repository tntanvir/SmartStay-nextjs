'use client'
import Link from "next/link";
import { FaHeart, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { toast } from "react-toastify";

export default function PropertyCard({ image, title, location, bed, bath, sqft, price, id, total_bookings }) {
    const AddMYFavorites = (id) => {
        fetch(`https://smartstay-api-production.up.railway.app/favorites/favorites/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('access')}`,
            },
            body: JSON.stringify({ room_id: id }),
        })
            .then(res => res.json())
            .then(data => {


                if (data.error) {
                    toast.warning(data.error);
                }
                else {
                    toast.success("Room added to favorites!");
                }
            })
            .catch(err => {
                console.error(err);
            });
    };
    return (
        <div className="min-w-sm rounded-2xl overflow-hidden shadow-lg border bg-white">
            {/* Image Section */}
            <div className="relative group">
                <img
                    src={image}
                    alt="Property Image"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                />

                {/* For Sale Tag */}
                {total_bookings ?
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm rounded-full z-10 shadow-lg">
                        Total Bookings: {total_bookings}
                    </div>
                    :
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm rounded-full z-10 shadow-lg">
                        For Sale
                    </div>}

                {/* Favorite Icon */}
                <div
                    onClick={() => AddMYFavorites(id)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-red-500 hover:text-white transition">
                    <FaHeart className="w-5 h-5" />
                </div>
            </div>


            {/* Content Section */}
            <div className="p-5 space-y-3">
                <h2 className="text-xl font-semibold">{title}</h2>
                <div className="flex items-center text-sm text-gray-600 gap-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    {location}
                </div>

                {/* Property Features */}
                <div className="flex justify-between text-sm text-gray-700 pt-2 border-t mt-4">
                    <div className="flex items-center gap-1">
                        <FaBed className="w-4 h-4" /> Bed {bed}
                    </div>
                    <div className="flex items-center gap-1">
                        <FaBath className="w-4 h-4" /> Bath {bath}
                    </div>
                    <div className="flex items-center gap-1">
                        <FaRulerCombined className="w-4 h-4" /> {sqft} sqft
                    </div>
                </div>

                {/* Price and Button */}
                <div className="pt-4 mt-4 flex justify-between items-center border-t">
                    <span className="text-lg font-semibold text-black">${price}</span>
                    <Link href={`/room/${id}`}>
                        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition text-sm">
                            View More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
