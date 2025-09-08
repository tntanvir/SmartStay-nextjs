// import React from 'react';
// import {
//     Hotel,
//     Shield,
//     Headphones,
//     Globe,
//     ArrowRight,
//     Check,
//     Star,
//     TrendingUp,
//     Lock,
//     Zap,
//     Users
// } from 'lucide-react';

// const AboutPage = () => {
//     const metrics = [
//         { value: "2M+", label: "Bookings Completed", growth: "+127%" },
//         { value: "15K+", label: "Hotel Partners", growth: "+89%" },
//         { value: "120+", label: "Countries Covered", growth: "+45%" },
//         { value: "4.9", label: "Average Rating", growth: "★★★★★" }
//     ];

//     const features = [
//         {
//             icon: Zap,
//             title: "Lightning Fast",
//             description: "Sub-second search results with real-time availability",
//         },
//         {
//             icon: Lock,
//             title: "Bank-Level Security",
//             description: "256-bit SSL encryption with PCI DSS compliance",
//         },
//         {
//             icon: Globe,
//             title: "Global Network",
//             description: "Partnerships with premium hotels worldwide",
//         },
//         {
//             icon: Users,
//             title: "Expert Support",
//             description: "24/7 multilingual customer success team",
//         }
//     ];

//     const values = [
//         {
//             title: "Innovation First",
//             description: "Leveraging AI and machine learning to personalize every booking experience"
//         },
//         {
//             title: "Trust & Transparency",
//             description: "No hidden fees, honest reviews, and upfront pricing for complete peace of mind"
//         },
//         {
//             title: "Sustainable Travel",
//             description: "Partnering with eco-certified hotels to promote responsible tourism"
//         }
//     ];

//     const timeline = [
//         { year: "2020", title: "Founded", desc: "Started with a vision to revolutionize hotel booking" },
//         { year: "2021", title: "Series A", desc: "Raised $15M to expand globally" },
//         { year: "2022", title: "AI Integration", desc: "Launched smart recommendation engine" },
//         { year: "2023", title: "Market Leader", desc: "Became #1 booking platform in 5 countries" },
//         { year: "2024", title: "Going Public", desc: "Preparing for IPO with 500% revenue growth" }
//     ];

//     return (
//         <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen">
//             {/* Hero Section */}
//             <section className="py-20 px-6 relative overflow-hidden">
//                 {/* Background Elements */}
//                 <div className="absolute inset-0">
//                     <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
//                     <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//                 </div>

//                 <div className="max-w-6xl mx-auto text-center relative z-10">
//                     <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200 rounded-full mb-8 shadow-lg">
//                         <TrendingUp className="text-purple-600 mr-2 w-5 h-5" />
//                         <span className="text-sm font-semibold text-purple-800">Trusted by 2M+ travelers worldwide</span>
//                     </div>

//                     <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800">
//                             Redefining
//                         </span>
//                         <br />
//                         <span className="text-gray-900">Hospitality</span>
//                     </h1>

//                     <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
//                         We're not just another booking platform. We're the future of travel technology,
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-bold"> powered by AI</span> and driven by an obsession for perfect customer experiences.
//                     </p>

//                     <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//                         <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105">
//                             Explore Our Platform
//                             <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform w-5 h-5" />
//                         </button>
//                         <button className="group border-2 border-purple-300 text-purple-700 px-12 py-5 rounded-2xl font-bold text-lg hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 flex items-center">
//                             Watch Demo
//                             <div className="ml-3 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* Metrics Section */}
//             <section className="py-20 px-6 border-t border-purple-100">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                         {metrics.map((metric, index) => (
//                             <div key={index} className="text-center p-8 bg-white/60 backdrop-blur-sm border border-purple-100 rounded-3xl hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
//                                 <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-3">
//                                     {metric.value}
//                                 </div>
//                                 <div className="text-gray-700 font-bold mb-3 text-lg">{metric.label}</div>
//                                 <div className="text-sm font-semibold flex items-center justify-center">
//                                     {metric.growth.includes('★') ? (
//                                         <span className="text-yellow-500 text-lg">{metric.growth}</span>
//                                     ) : (
//                                         <span className="text-green-600 flex items-center">
//                                             <TrendingUp className="mr-1 w-4 h-4" />
//                                             {metric.growth}
//                                         </span>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section className="py-20 px-6 border-t border-purple-100 bg-gradient-to-r from-purple-50 to-indigo-50">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="text-center mb-16">
//                         <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-full font-bold text-sm mb-8 shadow-lg">
//                             <Star className="mr-2 w-4 h-4" />
//                             ENTERPRISE-GRADE PLATFORM
//                         </div>
//                         <h2 className="text-5xl md:text-6xl font-black mb-8">
//                             <span className="text-gray-900">Built for </span>
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Scale</span>
//                         </h2>
//                         <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//                             Our technology infrastructure handles millions of concurrent users with
//                             <span className="text-purple-600 font-bold"> 99.99% uptime</span> and sub-second response times globally.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {features.map((feature, index) => {
//                             const IconComponent = feature.icon;
//                             return (
//                                 <div key={index} className="group p-8 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-3xl hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
//                                     <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300">
//                                         <IconComponent className="text-white text-2xl" />
//                                     </div>
//                                     <h3 className="text-2xl font-black text-gray-900 mb-4">{feature.title}</h3>
//                                     <p className="text-gray-700 mb-6 text-lg leading-relaxed">{feature.description}</p>
//                                     <div className="flex items-center text-purple-600 font-bold group-hover:text-purple-700 transition-colors">
//                                         Learn more
//                                         <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4" />
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* Values Section */}
//             <section className="py-20 px-6 border-t border-purple-100">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//                         <div>
//                             <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-full font-bold text-sm mb-8 shadow-lg">
//                                 <Check className="mr-2 w-4 h-4" />
//                                 OUR CORE VALUES
//                             </div>
//                             <h2 className="text-5xl font-black mb-10">
//                                 <span className="text-gray-900">Principles That </span>
//                                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Drive Us Forward</span>
//                             </h2>
//                             <div className="space-y-10">
//                                 {values.map((value, index) => (
//                                     <div key={index} className="flex items-start space-x-6">
//                                         <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-xl shadow-purple-500/30">
//                                             {index + 1}
//                                         </div>
//                                         <div>
//                                             <h3 className="text-2xl font-black text-gray-900 mb-3">
//                                                 {value.title}
//                                             </h3>
//                                             <p className="text-gray-700 text-lg leading-relaxed">
//                                                 {value.description}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="p-10 bg-gradient-to-br from-purple-100 to-indigo-100 border border-purple-200 rounded-3xl shadow-2xl shadow-purple-500/20">
//                             <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
//                                 99.99%
//                             </div>
//                             <div className="text-2xl font-black text-gray-900 mb-4">Platform Uptime</div>
//                             <div className="text-gray-700 text-lg leading-relaxed">
//                                 Our commitment to reliability means your bookings are always secure and your
//                                 customers never experience downtime.
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Timeline Section */}
//             <section className="py-20 px-6 border-t border-purple-100 bg-gradient-to-r from-purple-50 to-indigo-50">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-5xl font-black mb-6">
//                             <span className="text-gray-900">Our Journey to </span>
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Excellence</span>
//                         </h2>
//                         <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//                             From startup to industry leader - see how we've revolutionized travel technology
//                         </p>
//                     </div>

//                     <div className="space-y-8">
//                         {timeline.map((item, index) => (
//                             <div key={index} className="flex items-start space-x-8 p-8 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-3xl hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-102">
//                                 <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-xl shadow-purple-500/30">
//                                     {item.year}
//                                 </div>
//                                 <div>
//                                     <h3 className="text-2xl font-black text-gray-900 mb-3">{item.title}</h3>
//                                     <p className="text-gray-700 text-lg leading-relaxed">{item.desc}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}

//         </div>
//     );
// };

// export default AboutPage;

import React from 'react';
import {
    FaHotel,
    FaShieldAlt,
    FaHeadphones,
    FaGlobe,
    FaArrowRight,
    FaCheck,
    FaStar,

    FaLock,
    FaBolt,
    FaUsers
} from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';

const AboutPage = () => {
    const metrics = [
        { value: "2M+", label: "Bookings Completed", growth: "+127%" },
        { value: "15K+", label: "Hotel Partners", growth: "+89%" },
        { value: "120+", label: "Countries Covered", growth: "+45%" },
        { value: "4.9", label: "Average Rating", growth: "★★★★★" }
    ];

    const features = [
        {
            icon: FaBolt,
            title: "Lightning Fast",
            description: "Sub-second search results with real-time availability",
        },
        {
            icon: FaLock,
            title: "Bank-Level Security",
            description: "256-bit SSL encryption with PCI DSS compliance",
        },
        {
            icon: FaGlobe,
            title: "Global Network",
            description: "Partnerships with premium hotels worldwide",
        },
        {
            icon: FaUsers,
            title: "Expert Support",
            description: "24/7 multilingual customer success team",
        }
    ];

    const values = [
        {
            title: "Innovation First",
            description: "Leveraging AI and machine learning to personalize every booking experience"
        },
        {
            title: "Trust & Transparency",
            description: "No hidden fees, honest reviews, and upfront pricing for complete peace of mind"
        },
        {
            title: "Sustainable Travel",
            description: "Partnering with eco-certified hotels to promote responsible tourism"
        }
    ];

    const timeline = [
        { year: "2020", title: "Founded", desc: "Started with a vision to revolutionize hotel booking" },
        { year: "2021", title: "Series A", desc: "Raised $15M to expand globally" },
        { year: "2022", title: "AI Integration", desc: "Launched smart recommendation engine" },
        { year: "2023", title: "Market Leader", desc: "Became #1 booking platform in 5 countries" },
        { year: "2024", title: "Going Public", desc: "Preparing for IPO with 500% revenue growth" }
    ];

    return (
        <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen">
            {/* Hero Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200 rounded-full mb-6 sm:mb-8 shadow-lg">
                        <MdTrendingUp className="text-purple-600 mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-semibold text-purple-800">Trusted by 2M+ travelers worldwide</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight px-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800">
                            Redefining
                        </span>
                        <br />
                        <span className="text-gray-900">Hospitality</span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
                        We're not just another booking platform. We're the future of travel technology,
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-bold"> powered by AI</span> and driven by an obsession for perfect customer experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                        <button className="w-full sm:w-auto group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105">
                            Explore Our Platform
                            <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button className="w-full sm:w-auto group border-2 border-purple-300 text-purple-700 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center">
                            Watch Demo
                            <div className="ml-3 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-purple-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {metrics.map((metric, index) => (
                            <div key={index} className="text-center p-4 sm:p-6 md:p-8 bg-white/60 backdrop-blur-sm border border-purple-100 rounded-2xl sm:rounded-3xl hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-2 sm:mb-3">
                                    {metric.value}
                                </div>
                                <div className="text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">{metric.label}</div>
                                <div className="text-xs sm:text-sm font-semibold flex items-center justify-center">
                                    {metric.growth.includes('★') ? (
                                        <span className="text-yellow-500 text-sm sm:text-base md:text-lg">{metric.growth}</span>
                                    ) : (
                                        <span className="text-green-600 flex items-center">
                                            <MdTrendingUp className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
                                            {metric.growth}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-purple-100 bg-gradient-to-r from-purple-50 to-indigo-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-8 shadow-lg">
                            <FaStar className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                            ENTERPRISE-GRADE PLATFORM
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 px-2">
                            <span className="text-gray-900">Built for </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Scale</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
                            Our technology infrastructure handles millions of concurrent users with
                            <span className="text-purple-600 font-bold"> 99.99% uptime</span> and sub-second response times globally.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="group p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl sm:rounded-3xl hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300">
                                        <IconComponent className="text-white text-lg sm:text-xl md:text-2xl" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                                    <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">{feature.description}</p>
                                    <div className="flex items-center text-purple-600 font-bold group-hover:text-purple-700 transition-colors text-sm sm:text-base">
                                        Learn more
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-3 h-3 sm:w-4 sm:h-4" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-purple-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-8 shadow-lg">
                                <FaCheck className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                                OUR CORE VALUES
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-10">
                                <span className="text-gray-900">Principles That </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Drive Us Forward</span>
                            </h2>
                            <div className="space-y-6 sm:space-y-8 md:space-y-10">
                                {values.map((value, index) => (
                                    <div key={index} className="flex items-start space-x-4 sm:space-x-6">
                                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-sm sm:text-base md:text-lg shadow-xl shadow-purple-500/30">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2 sm:mb-3">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 p-6 sm:p-8 md:p-10 bg-gradient-to-br from-purple-100 to-indigo-100 border border-purple-200 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-500/20">
                            <div className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4 sm:mb-6">
                                99.99%
                            </div>
                            <div className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4">Platform Uptime</div>
                            <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                Our commitment to reliability means your bookings are always secure and your
                                customers never experience downtime.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-purple-100 bg-gradient-to-r from-purple-50 to-indigo-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 px-2">
                            <span className="text-gray-900">Our Journey to </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Excellence</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
                            From startup to industry leader - see how we've revolutionized travel technology
                        </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl sm:rounded-3xl hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-102">
                                <div className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-sm sm:text-base md:text-lg shadow-xl shadow-purple-500/30">
                                    {item.year}
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}

        </div>
    );
};

export default AboutPage;