

'use client'
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { FaHeart, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { toast } from "react-toastify";
import { MdHome } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";
export default function PropertyCard({ image, title, location, bed, bath, sqft, price, id, total_bookings }) {

    const { user } = useUser();
    const AddMYFavorites = (id) => {
        fetch(`https://smartstay-api.up.railway.app/favorites/favorites/`, {
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
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-purple-100 hover:border-purple-200">
            {/* Image Section */}
            <div className="relative group overflow-hidden">
                <img
                    src={image}
                    alt="Property Image"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />

                {/* Status Tag */}
                {total_bookings ? (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-100/50 to-purple-200/65 text-purple-800 px-4 py-2 text-sm font-medium rounded-full shadow-lg flex items-center gap-1 justify-center">
                        <HiOutlineSparkles /> {total_bookings} Bookings
                    </div>
                ) : (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-100/50 to-purple-200/65 text-purple-800 px-4 py-2 text-sm font-medium rounded-full shadow-lg flex items-center gap-1 justify-center">
                        <MdHome /> For Booking
                    </div>
                )}

                {/* Favorite Icon */}
                {user && <button
                    onClick={() => AddMYFavorites(id)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                    <FaHeart className="w-4 h-4" />
                </button>}
            </div>

            {/* Content Section */}
            <div className="px-6 py-3">
                {/* Title & Location */}
                <div className="mb-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-purple-700 transition-colors duration-200">{title}</h3>
                    <div className="flex items-center text-gray-600">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                            <FaMapMarkerAlt className="w-3 h-3 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium">{location}</span>
                    </div>
                </div>

                {/* Property Features */}
                <div className="flex justify-between items-center mb-5 p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center mb-1">
                            <FaBed className="w-4 h-4 text-purple-700" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{bed}</span>
                        <span className="text-xs text-gray-500">Beds</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center mb-1">
                            <FaBath className="w-4 h-4 text-purple-700" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{bath}</span>
                        <span className="text-xs text-gray-500">Baths</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center mb-1">
                            <FaRulerCombined className="w-4 h-4 text-purple-700" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{sqft}</span>
                        <span className="text-xs text-gray-500">Sqft</span>
                    </div>
                </div>

                {/* Price and Button */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                            ${price}
                        </span>
                        <span className="text-sm text-gray-500">per month</span>
                    </div>

                    <Link href={`/room/${id}`}>
                        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            View Details →
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
