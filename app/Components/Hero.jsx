// "use client";
// import Image from "next/image";

// export default function Hero() {
//     return (
//         <div className="relative min-h-screen w-full overflow-hidden">
//             {/* Background Grid with Fade */}
//             <div
//                 className="absolute inset-0 z-0"
//                 style={{
//                     backgroundImage: `
//             linear-gradient(to right, #e2e8f0 1px, transparent 1px),
//             linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
//           `,
//                     backgroundSize: "20px 30px",
//                     WebkitMaskImage:
//                         "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
//                     maskImage:
//                         "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
//                 }}
//             />

//             {/* Main Content */}
//             <section className="relative z-10 w-full py-16 px-6 md:px-20">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                     {/* Left Content */}
//                     <div className="space-y-6">
//                         <p className="text-purple-500 font-semibold text-lg">Welcome To SmartStay</p>
//                         <h1 className="text-4xl md:text-5xl font-bold text-black">
//                             Find Your Perfect <span className="text-purple-500">Home</span> to Life Spend
//                         </h1>

//                         {/* Stats Section */}
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
//                             <div>
//                                 <p className="text-xl font-bold">1950+</p>
//                                 <p className="text-sm text-gray-600">Project Handover</p>
//                             </div>
//                             <div>
//                                 <p className="text-xl font-bold">2M+</p>
//                                 <p className="text-sm text-gray-600">Monthly Visitors</p>
//                             </div>
//                             <div>
//                                 <p className="text-xl font-bold">850+</p>
//                                 <p className="text-sm text-gray-600">Property Ready</p>
//                             </div>
//                             <div>
//                                 <p className="text-xl font-bold">98%</p>
//                                 <p className="text-sm text-gray-600">Happy Customers</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Image */}
//                     <div className="rounded-3xl overflow-hidden shadow-lg">
//                         <Image
//                             src="/895c8557-4a00-4e38-abb2-666802ba188e.png"
//                             alt="Map"
//                             width={800}
//                             height={600}
//                             className="w-full h-auto object-cover"
//                             priority
//                         />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }



"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 to-white ">
            {/* Enhanced Background Grid with Better Fade */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 70% at 50% 0%, #000 40%, transparent 100%)",
                    maskImage:
                        "radial-gradient(ellipse 80% 70% at 50% 0%, #000 40%, transparent 100%)",
                }}
            />

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-purple-100 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-blue-100 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute bottom-32 left-20 w-12 h-12 bg-indigo-100 rounded-full opacity-40 animate-pulse"></div>

            {/* Main Content */}
            <section className="relative z-10 w-full py-20 px-6 md:px-20 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 animate-fade-in-up">
                            {/* Welcome Badge */}
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 border border-purple-200">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                                <p className="text-purple-700 font-semibold text-sm tracking-wide">
                                    WELCOME TO SMARTSTAY
                                </p>
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                    <span className="text-slate-900">Find Your</span><br />
                                    <span className="text-slate-900">Perfect </span>
                                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                        Home
                                    </span><br />
                                    <span className="text-slate-700 text-4xl md:text-5xl lg:text-6xl">
                                        to Spend Life
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                                    Discover exceptional properties with SmartStay. We make finding your dream home effortless with our curated selection and personalized service.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-indigo-700">
                                    Explore Properties
                                </button>
                                <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-purple-300 hover:text-purple-700 transition-all duration-300 hover:bg-purple-50">
                                    Learn More
                                </button>
                            </div>

                            {/* Enhanced Stats Section */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-slate-100">
                                <div className="text-center lg:text-left group hover:scale-105 transition-transform duration-300">
                                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                        1,950+
                                    </p>
                                    <p className="text-sm text-slate-600 font-medium mt-1">Projects Delivered</p>
                                </div>
                                <div className="text-center lg:text-left group hover:scale-105 transition-transform duration-300">
                                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                        2M+
                                    </p>
                                    <p className="text-sm text-slate-600 font-medium mt-1">Monthly Visitors</p>
                                </div>
                                <div className="text-center lg:text-left group hover:scale-105 transition-transform duration-300">
                                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                        850+
                                    </p>
                                    <p className="text-sm text-slate-600 font-medium mt-1">Ready Properties</p>
                                </div>
                                <div className="text-center lg:text-left group hover:scale-105 transition-transform duration-300">
                                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                        98%
                                    </p>
                                    <p className="text-sm text-slate-600 font-medium mt-1">Satisfied Clients</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image with Enhanced Styling */}
                        <div className="relative animate-fade-in-right">
                            {/* Decorative background elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-3xl blur-2xl opacity-30"></div>
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl opacity-20 rotate-12"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl opacity-20 -rotate-12"></div>

                            {/* Main image container */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                                <Image
                                    src="/895c8557-4a00-4e38-abb2-666802ba188e.png"
                                    alt="SmartStay Properties Map Interface"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                    priority
                                />

                                {/* Floating info card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg z-20">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-800">Interactive Map</p>
                                            <p className="text-xs text-slate-600">Explore properties in real-time</p>
                                        </div>
                                        <div className="w-12 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fade-in-right {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                
                .animate-fade-in-right {
                    animation: fade-in-right 0.8s ease-out 0.2s forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
}