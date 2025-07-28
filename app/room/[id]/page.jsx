// 'use client'
// import Image from 'next/image';
// import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

// const room = {
//     title: "Savant Smart Home",
//     address: "39581 Rohan Estates, New York",
//     city: "New York, USA",
//     price: "$5,805.00",
//     beds: 4,
//     baths: 3,
//     size: "4000 sqft",
//     description: "This meticulously remodeled 'Savant Smart Home' is a true gem. Featuring four bedrooms and three bathrooms, including a master with a jacuzzi tub, walk-in shower, and steam room, it combines style with cutting-edge technology.",
//     images: [
//         "/images/smart-home-1.jpg",
//         "/images/smart-home-2.jpg",
//         "/images/smart-home-3.jpg",
//         "/images/smart-home-4.jpg",
//     ]
// };

// const PropertyDetails = () => {
//     return (
//         <section className="max-w-7xl mx-auto px-6 py-10">
//             {/* Property Image Carousel */}
//             <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
//                 <div className="flex gap-4">
//                     {room.images.map((image, index) => (
//                         <div key={index} className="w-full">
//                             <Image
//                                 src={image}
//                                 alt={room.title}
//                                 width={1500}
//                                 height={900}
//                                 className="w-full h-96 object-cover rounded-xl"
//                             />
//                         </div>
//                     ))}
//                 </div>
//                 <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-full text-sm">
//                     For Sale
//                 </div>
//             </div>

//             {/* Property Info */}
//             <div className="text-center">
//                 <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{room.title}</h1>
//                 <p className="text-xl text-gray-600 mt-2">{room.address}</p>
//                 <div className="flex justify-center items-center gap-4 mt-4 text-gray-500">
//                     <div className="flex items-center gap-1">
//                         <FaMapMarkerAlt className="text-red-500" />
//                         {room.city}
//                     </div>
//                     <div className="flex items-center gap-1">
//                         <span className="font-semibold">{room.price}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Room Features */}
//             <div className="flex flex-col md:flex-row justify-between gap-6 mt-8 border-t pt-6">
//                 <div className="flex items-center gap-2 text-gray-600">
//                     <FaBed className="w-5 h-5 text-gray-600" />
//                     <span>{room.beds} Beds</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-600">
//                     <FaBath className="w-5 h-5 text-gray-600" />
//                     <span>{room.baths} Baths</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-600">
//                     <FaRulerCombined className="w-5 h-5 text-gray-600" />
//                     <span>{room.size}</span>
//                 </div>
//             </div>

//             {/* Description Section */}
//             <div className="mt-10">
//                 <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
//                 <p className="mt-4 text-lg text-gray-600">{room.description}</p>
//             </div>

//             {/* Property Highlights */}
//             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t pt-6">
//                 <div className="flex flex-col gap-4 text-gray-600">
//                     <h3 className="text-xl font-semibold">Property Highlights</h3>
//                     <ul>
//                         <li><strong>ID No.:</strong> 1234</li>
//                         <li><strong>Type:</strong> Residential</li>
//                         <li><strong>Rooms:</strong> 6</li>
//                         <li><strong>Purpose:</strong> For Rent</li>
//                         <li><strong>Parking:</strong> Yes</li>
//                     </ul>
//                 </div>
//                 <div className="flex flex-col gap-4 text-gray-600">
//                     <h3 className="text-xl font-semibold">Additional Features</h3>
//                     <ul>
//                         <li><strong>Elevator:</strong> Yes</li>
//                         <li><strong>WiFi:</strong> Yes</li>
//                         <li><strong>Built In:</strong> 1985</li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Contact & View More */}
//             <div className="mt-10 flex justify-between items-center border-t pt-6">
//                 <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
//                     Contact Seller
//                 </button>
//                 <button className="px-6 py-2 border-2 border-gray-600 text-gray-600 rounded-lg hover:bg-gray-100 transition duration-300">
//                     View More Details
//                 </button>
//             </div>
//         </section>
//     );
// };

// export default PropertyDetails;



import RoomDetails from '@/app/Components/RoomDetails';
import React from 'react';

const PropertyDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://127.0.0.1:8000/room/rooms/${id}`)
    const data = await res.json()
    console.log(data)


    return (
        <div>
            {/* {id && id} */}
            <RoomDetails data={data} />
        </div>
    );
};

export default PropertyDetails;
