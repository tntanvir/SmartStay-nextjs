// import Image from "next/image";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaApple, FaGooglePlay, FaHome } from "react-icons/fa";

// export default function Footer() {
//     return (
//         <footer className="bg-[#0c0c1d] text-white pt-16 px-6 md:px-20 z-50">
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
//                 {/* Logo & Description */}
//                 <div>
//                     <Image src="/logo.svg" alt="Piller Logo" width={120} height={40} />
//                     <p className="mt-4 text-sm text-gray-300">
//                         Pillar is a luxury to the resilience, adaptability, Spacious modern villa living
//                         room with centrally placed swimming pool blending indoor-outdoor.
//                     </p>
//                     <div className="mt-4 space-y-3 text-sm">
//                         <div className="flex items-center gap-2">
//                             <FaPhoneAlt className="text-purple-400" /> +00 (123) 456 789 012
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <FaEnvelope className="text-purple-400" /> infomail123@domain.com
//                         </div>
//                         <div className="flex items-start gap-2">
//                             <FaMapMarkerAlt className="text-purple-400 mt-1" />
//                             <span>West 2nd lane, Inner circular road, New York City</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Featured Houses */}
//                 <div>
//                     <h4 className="font-semibold mb-4">Featured Houses</h4>
//                     <ul className="space-y-2 text-sm text-gray-300">
//                         {["#Villa", "#Commercial", "#Farm Houses", "#Apartments", "#Apartments"].map((item) => (
//                             <li key={item} className="flex items-center gap-2">
//                                 <FaHome className="text-purple-400" /> {item}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Quick Links */}
//                 <div>
//                     <h4 className="font-semibold mb-4">Quick Links</h4>
//                     <ul className="space-y-2 text-sm text-gray-300">
//                         {["Strategy Services", "Management", "Privacy & Policy", "Sitemap", "Term & Conditions"].map((item) => (
//                             <li key={item} className="flex items-center gap-2">
//                                 <FaHome className="text-purple-400" /> {item}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Support */}
//                 <div>
//                     <h4 className="font-semibold mb-4">Support</h4>
//                     <ul className="space-y-2 text-sm text-gray-300">
//                         {["Help Center", "FAQs", "Contact Us", "Ticket Support", "Live Chat"].map((item) => (
//                             <li key={item} className="flex items-center gap-2">
//                                 <FaHome className="text-purple-400" /> {item}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Newsletter */}
//                 <div>
//                     <h4 className="font-semibold mb-4">Newsletter</h4>
//                     <p className="text-sm text-gray-300 mb-4">Sign up to receive the latest articles</p>
//                     <input
//                         type="email"
//                         placeholder="Enter Email"
//                         className="w-full p-2 rounded-md text-black mb-3"
//                     />
//                     <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded-md">
//                         Subscribe Now
//                     </button>
//                     <div className="mt-3 text-xs text-gray-400">
//                         <input type="checkbox" className="mr-2" />
//                         I have read and agree to the terms & conditions
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom App Promo */}
//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
//                 <div className="flex items-center gap-4 p-4 bg-[#15152c] rounded-xl">
//                     <Image src="/home-icon.png" alt="home" width={40} height={40} />
//                     <p className="text-white text-lg font-semibold">Need to Home buy or sell?</p>
//                 </div>
//                 <div className="flex items-center gap-4 p-4 bg-[#15152c] rounded-xl">
//                     <FaApple className="text-3xl" />
//                     <div>
//                         <p className="text-sm">Download on the</p>
//                         <p className="font-bold text-lg">App Store</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-4 p-4 bg-[#15152c] rounded-xl">
//                     <FaGooglePlay className="text-3xl" />
//                     <div>
//                         <p className="text-sm">GET IT ON</p>
//                         <p className="font-bold text-lg">Google Play</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="text-center text-xs text-gray-500 mt-10 pb-6">
//                 &copy; {new Date().getFullYear()} PILLER. All rights reserved.
//             </div>
//         </footer>
//     );
// }


import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaApple, FaGooglePlay, FaHome } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0c0c1d] text-white pt-16 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                {/* Logo & Description */}
                <div>
                    <Image src="/logo.svg" alt="Piller Logo" width={120} height={40} />
                    <p className="mt-4 text-sm text-gray-300">
                        Pillar is a luxury to the resilience, adaptability, Spacious modern villa living
                        room with centrally placed swimming pool blending indoor-outdoor.
                    </p>
                    <div className="mt-4 space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-purple-400" /> +00 (123) 456 789 012
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-purple-400" /> infomail123@domain.com
                        </div>
                        <div className="flex items-start gap-2">
                            <FaMapMarkerAlt className="text-purple-400 mt-1" />
                            <span>West 2nd lane, Inner circular road, New York City</span>
                        </div>
                    </div>
                </div>

                {/* Featured Houses */}
                <div>
                    <h4 className="font-semibold mb-4">Featured Houses</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {["#Villa", "#Commercial", "#Farm Houses", "#Apartments", "#Apartments"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <FaHome className="text-purple-400" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {["Strategy Services", "Management", "Privacy & Policy", "Sitemap", "Term & Conditions"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <FaHome className="text-purple-400" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {["Help Center", "FAQs", "Contact Us", "Ticket Support", "Live Chat"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <FaHome className="text-purple-400" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-semibold mb-4">Newsletter</h4>
                    <p className="text-sm text-gray-300 mb-4">Sign up to receive the latest articles</p>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="w-full p-2 rounded-md text-black mb-3"
                    />
                    <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded-md">
                        Subscribe Now
                    </button>
                    <div className="mt-3 text-xs text-gray-400">
                        <input type="checkbox" className="mr-2" />
                        I have read and agree to the terms & conditions
                    </div>
                </div>
            </div>

            {/* Bottom App Promo */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="flex items-center gap-4 p-4 bg-[#15152c] rounded-xl">
                    <Image src="/home-icon.png" alt="home" width={40} height={40} />
                    <p className="text-white text-lg font-semibold">Need to Home buy or sell?</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#15152c] rounded-xl">
                    <FaApple className="text-3xl" />
                    <div>
                        <p className="text-sm">Download on the</p>
                        <p className="font-bold text-lg">App Store</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#15152c] rounded-xl">
                    <FaGooglePlay className="text-3xl" />
                    <div>
                        <p className="text-sm">GET IT ON</p>
                        <p className="font-bold text-lg">Google Play</p>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-gray-500 mt-10 pb-6">
                &copy; {new Date().getFullYear()} PILLER. All rights reserved.
            </div>
        </footer>
    );
}
