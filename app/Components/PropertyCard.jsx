import Image from "next/image";
import { FaHeart, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

export default function PropertyCard() {
    return (
        <div className="min-w-sm rounded-2xl overflow-hidden shadow-lg border bg-white">
            {/* Image Section */}
            <div className="relative">
                <Image
                    src="/d2c062c4-4b8d-4243-8f01-f61a03f9940a.png"
                    alt="Property Image"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover rounded-t-2xl"
                />

                {/* For Sale Tag */}
                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm rounded-full z-10">
                    For Sale
                </div>

                {/* Favorite Icon */}
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer">
                    <FaHeart className="text-gray-500 w-5 h-5" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-3">
                <h2 className="text-xl font-semibold">Charming Beach House</h2>
                <div className="flex items-center text-sm text-gray-600 gap-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    39581 Rohan Estates, New York
                </div>

                {/* Property Features */}
                <div className="flex justify-between text-sm text-gray-700 pt-2 border-t mt-4">
                    <div className="flex items-center gap-1">
                        <FaBed className="w-4 h-4" /> Bed 4
                    </div>
                    <div className="flex items-center gap-1">
                        <FaBath className="w-4 h-4" /> Bath 2
                    </div>
                    <div className="flex items-center gap-1">
                        <FaRulerCombined className="w-4 h-4" /> 1500 sqft
                    </div>
                </div>

                {/* Price and Button */}
                <div className="pt-4 mt-4 flex justify-between items-center border-t">
                    <span className="text-lg font-semibold text-black">$179,800.00</span>
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition text-sm">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
}
