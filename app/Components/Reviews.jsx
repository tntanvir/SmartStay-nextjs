// // // 'use client'

// // // import Image from "next/image";
// // // import Slider from "react-slick";
// // // import "slick-carousel/slick/slick.css";
// // // import "slick-carousel/slick/slick-theme.css";

// // // const Reviews = () => {
// // //     const testimonials = [
// // //         {
// // //             id: 1,
// // //             quote1:
// // //                 "Tenax comitatus ambulo regnum eligo, conturbo vis caelum cohors. Infit ustulo adoptio collum, speciosus lumen soluta.",
// // //             quote2:
// // //                 "Aer arceo umerus asperiores templum desidero caritas.",
// // //             name: "Walter Deckow",
// // //             role: "Property owner",
// // //             image: "/user-1.jpg",
// // //         },
// // //         {
// // //             id: 2,
// // //             quote1:
// // //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// // //             quote2:
// // //                 "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// // //             name: "John Doe",
// // //             role: "Real Estate Agent",
// // //             image: "/user-2.jpg",
// // //         },
// // //     ];

// // //     const settings = {
// // //         dots: true,
// // //         infinite: true,
// // //         speed: 500,
// // //         slidesToShow: 1,
// // //         slidesToScroll: 1,
// // //         autoplay: true,
// // //         autoplaySpeed: 4000, // Auto-slide every 4 seconds
// // //         arrows: false,
// // //         fade: true, // Smooth fade transition between slides
// // //     };

// // //     return (
// // //         <section className="pt-16 px-6 md:px-20 overflow-hidden">
// // //             <div className="bg-white text-black py-20 px-4 md:px-32 rounded-lg shadow-lg">
// // //                 <p className="text-sm text-purple-700 font-semibold flex items-center gap-2">
// // //                     <span className="border-t border-purple-700 w-6"></span> Testimonials <span className="border-t border-purple-700 w-6"></span>
// // //                 </p>
// // //                 <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">What Clients Say About Pillar</h2>

// // //                 {/* Slider */}
// // //                 <Slider {...settings}>
// // //                     {testimonials.map(({ id, quote1, quote2, name, role, image }) => (
// // //                         <div key={id} className="space-y-6 px-4">
// // //                             <p className="text-6xl text-pink-300 font-bold opacity-50">“</p>
// // //                             <p className="text-xl font-semibold text-gray-800 italic">“{quote1}”</p>
// // //                             <p className="text-lg font-semibold text-gray-700 italic">“{quote2}”</p>

// // //                             <div className="border-t border-gray-300 pt-6 flex items-center justify-start gap-4">
// // //                                 <Image
// // //                                     src={image}
// // //                                     alt={name}
// // //                                     width={60}
// // //                                     height={60}
// // //                                     className="rounded-full border-4 border-gray-300 shadow-lg"
// // //                                 />
// // //                                 <div>
// // //                                     <p className="font-bold text-lg text-gray-800">{name}</p>
// // //                                     <p className="text-sm text-gray-500">{role}</p>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </Slider>
// // //             </div>
// // //         </section>
// // //     );
// // // };

// // // export default Reviews;


// // // 'use client'
// // // import { useState, useEffect } from "react";
// // // import Image from "next/image";
// // // import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // // const Reviews = () => {
// // //     const [currentIndex, setCurrentIndex] = useState(0);
// // //     const [isAnimating, setIsAnimating] = useState(false);

// // //     const testimonials = [
// // //         {
// // //             id: 1,
// // //             quote: "Pillar transformed our property search experience completely. Their personalized approach and deep market knowledge helped us find our dream home in just two weeks. The team's dedication and professionalism exceeded all expectations.",
// // //             name: "Sarah Mitchell",
// // //             role: "Marketing Director",
// // //             image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// // //             rating: 5,
// // //             company: "Tech Solutions Inc."
// // //         },
// // //         {
// // //             id: 2,
// // //             quote: "Working with Pillar was an absolute game-changer for our investment portfolio. Their market insights and strategic guidance helped us secure premium properties with excellent ROI potential. Highly recommended!",
// // //             name: "David Chen",
// // //             role: "Investment Banker",
// // //             image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// // //             rating: 5,
// // //             company: "Goldman Sachs"
// // //         },
// // //         {
// // //             id: 3,
// // //             quote: "The level of service at Pillar is unmatched. From initial consultation to final closing, every detail was handled with care and precision. They made what could have been stressful into an enjoyable journey.",
// // //             name: "Emily Rodriguez",
// // //             role: "Entrepreneur",
// // //             image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// // //             rating: 5,
// // //             company: "StartupHub"
// // //         },
// // //         {
// // //             id: 4,
// // //             quote: "Exceptional expertise and customer service! Pillar helped us navigate the complex luxury property market with ease. Their network and negotiation skills saved us both time and money on our purchase.",
// // //             name: "James Wilson",
// // //             role: "CEO",
// // //             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// // //             rating: 5,
// // //             company: "Wilson Enterprises"
// // //         },
// // //         {
// // //             id: 5,
// // //             quote: "From day one, Pillar demonstrated unparalleled professionalism and market expertise. They helped us secure a prime commercial property that has exceeded our ROI expectations. Truly exceptional service.",
// // //             name: "Lisa Thompson",
// // //             role: "Business Owner",
// // //             image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// // //             rating: 5,
// // //             company: "Thompson Industries"
// // //         },
// // //         {
// // //             id: 6,
// // //             quote: "Outstanding service from start to finish. Pillar's attention to detail and commitment to client satisfaction is remarkable. They made our first home purchase smooth and stress-free. Cannot recommend them enough!",
// // //             name: "Michael Brown",
// // //             role: "Software Engineer",
// // //             image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// // //             rating: 5,
// // //             company: "Microsoft"
// // //         }
// // //     ];

// // //     const itemsPerPage = window.innerWidth >= 1024 ? 2 : 1;
// // //     const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

// // //     const nextSlide = () => {
// // //         if (isAnimating) return;
// // //         setIsAnimating(true);
// // //         setCurrentIndex((prev) => (prev + 1) % totalSlides);
// // //         setTimeout(() => setIsAnimating(false), 500);
// // //     };

// // //     const prevSlide = () => {
// // //         if (isAnimating) return;
// // //         setIsAnimating(true);
// // //         setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
// // //         setTimeout(() => setIsAnimating(false), 500);
// // //     };

// // //     const goToSlide = (index) => {
// // //         if (isAnimating || index === currentIndex) return;
// // //         setIsAnimating(true);
// // //         setCurrentIndex(index);
// // //         setTimeout(() => setIsAnimating(false), 500);
// // //     };

// // //     useEffect(() => {
// // //         const interval = setInterval(() => {
// // //             nextSlide();
// // //         }, 6000);

// // //         return () => clearInterval(interval);
// // //     }, [currentIndex]);

// // //     const getVisibleTestimonials = () => {
// // //         const startIndex = currentIndex * itemsPerPage;
// // //         return testimonials.slice(startIndex, startIndex + itemsPerPage);
// // //     };

// // //     return (
// // //         <section className="py-20 px-4 md:px-8 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
// // //             {/* Background Elements */}
// // //             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
// // //                 <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
// // //                 <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
// // //             </div>

// // //             <div className="max-w-7xl mx-auto relative z-10">
// // //                 {/* Header */}
// // //                 <div className="text-center mb-16">
// // //                     <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
// // //                         <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
// // //                             Testimonials
// // //                         </span>
// // //                     </div>

// // //                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
// // //                         What Clients Say About
// // //                         <span className="block text-purple-600">Pillar</span>
// // //                     </h2>

// // //                     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// // //                         Real stories from satisfied clients who found their perfect properties with us
// // //                     </p>
// // //                 </div>

// // //                 {/* Slider Container */}
// // //                 <div className="relative">
// // //                     {/* Navigation Buttons */}
// // //                     <button
// // //                         onClick={prevSlide}
// // //                         disabled={isAnimating}
// // //                         className="absolute left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full border border-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
// // //                     >
// // //                         <FaChevronLeft size={18} />
// // //                     </button>

// // //                     <button
// // //                         onClick={nextSlide}
// // //                         disabled={isAnimating}
// // //                         className="absolute right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full border border-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
// // //                     >
// // //                         <FaChevronRight size={18} />
// // //                     </button>

// // //                     {/* Slider Track */}
// // //                     <div className="overflow-hidden rounded-2xl">
// // //                         <div
// // //                             className="flex transition-transform duration-500 ease-in-out"
// // //                             style={{
// // //                                 transform: `translateX(-${currentIndex * 100}%)`,
// // //                                 width: `${totalSlides * 100}%`
// // //                             }}
// // //                         >
// // //                             {Array.from({ length: totalSlides }).map((_, slideIndex) => (
// // //                                 <div
// // //                                     key={slideIndex}
// // //                                     className="w-full flex-shrink-0"
// // //                                     style={{ width: `${100 / totalSlides}%` }}
// // //                                 >
// // //                                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-2">
// // //                                         {testimonials
// // //                                             .slice(slideIndex * itemsPerPage, slideIndex * itemsPerPage + itemsPerPage)
// // //                                             .map((testimonial) => (
// // //                                                 <div
// // //                                                     key={testimonial.id}
// // //                                                     className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
// // //                                                 >
// // //                                                     {/* Quote Icon */}
// // //                                                     <div className="mb-6">
// // //                                                         <FaQuoteLeft className="text-3xl text-purple-600 opacity-60" />
// // //                                                     </div>

// // //                                                     {/* Stars */}
// // //                                                     <div className="flex gap-1 mb-6">
// // //                                                         {[...Array(testimonial.rating)].map((_, i) => (
// // //                                                             <FaStar
// // //                                                                 key={i}
// // //                                                                 className="text-yellow-400 text-lg"
// // //                                                             />
// // //                                                         ))}
// // //                                                     </div>

// // //                                                     {/* Quote */}
// // //                                                     <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
// // //                                                         "{testimonial.quote}"
// // //                                                     </blockquote>

// // //                                                     {/* Client Info */}
// // //                                                     <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
// // //                                                         <Image
// // //                                                             src={testimonial.image}
// // //                                                             alt={testimonial.name}
// // //                                                             width={60}
// // //                                                             height={60}
// // //                                                             className="rounded-full border-3 border-gray-200"
// // //                                                         />
// // //                                                         <div>
// // //                                                             <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
// // //                                                             <p className="text-purple-600 font-semibold text-sm">{testimonial.role}</p>
// // //                                                             <p className="text-gray-500 text-sm">{testimonial.company}</p>
// // //                                                         </div>
// // //                                                     </div>
// // //                                                 </div>
// // //                                             ))}
// // //                                     </div>
// // //                                 </div>
// // //                             ))}
// // //                         </div>
// // //                     </div>

// // //                     {/* Dots Navigation */}
// // //                     <div className="flex justify-center gap-2 mt-8">
// // //                         {Array.from({ length: totalSlides }).map((_, index) => (
// // //                             <button
// // //                                 key={index}
// // //                                 onClick={() => goToSlide(index)}
// // //                                 disabled={isAnimating}
// // //                                 className={`h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${index === currentIndex
// // //                                     ? 'w-8 bg-purple-600'
// // //                                     : 'w-3 bg-gray-300'
// // //                                     }`}
// // //                             />
// // //                         ))}
// // //                     </div>
// // //                 </div>

// // //                 {/* Stats Section */}
// // //                 <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
// // //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
// // //                         <div>
// // //                             <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
// // //                                 1,200+
// // //                             </div>
// // //                             <div className="text-gray-600 font-semibold text-lg">Happy Families</div>
// // //                         </div>
// // //                         <div>
// // //                             <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
// // //                                 4.9★
// // //                             </div>
// // //                             <div className="text-gray-600 font-semibold text-lg">Average Rating</div>
// // //                         </div>
// // //                         <div>
// // //                             <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
// // //                                 99%
// // //                             </div>
// // //                             <div className="text-gray-600 font-semibold text-lg">Satisfaction Rate</div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </section>
// // //     );
// // // };

// // // export default Reviews;




// // // 'use client'
// // // import { useState, useEffect } from "react";
// // // import Image from "next/image";
// // // import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // // const Reviews = () => {
// // //     const [currentIndex, setCurrentIndex] = useState(0);

// // //     const testimonials = [
// // //         {
// // //             id: 1,
// // //             quote: "Pillar transformed our property search experience completely. Their personalized approach and deep market knowledge helped us find our dream home in just two weeks. The team's dedication and professionalism exceeded all expectations.",
// // //             name: "Sarah Mitchell",
// // //             role: "Marketing Director",
// // //             image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// // //             rating: 5,
// // //             company: "Tech Solutions Inc."
// // //         },
// // //         {
// // //             id: 2,
// // //             quote: "Working with Pillar was an absolute game-changer for our investment portfolio. Their market insights and strategic guidance helped us secure premium properties with excellent ROI potential. Highly recommended!",
// // //             name: "David Chen",
// // //             role: "Investment Banker",
// // //             image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// // //             rating: 5,
// // //             company: "Goldman Sachs"
// // //         },
// // //         {
// // //             id: 3,
// // //             quote: "The level of service at Pillar is unmatched. From initial consultation to final closing, every detail was handled with care and precision. They made what could have been stressful into an enjoyable journey.",
// // //             name: "Emily Rodriguez",
// // //             role: "Entrepreneur",
// // //             image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// // //             rating: 5,
// // //             company: "StartupHub"
// // //         },
// // //         {
// // //             id: 4,
// // //             quote: "Exceptional expertise and customer service! Pillar helped us navigate the complex luxury property market with ease. Their network and negotiation skills saved us both time and money on our purchase.",
// // //             name: "James Wilson",
// // //             role: "CEO",
// // //             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// // //             rating: 5,
// // //             company: "Wilson Enterprises"
// // //         }
// // //     ];

// // //     // Simple logic: show 2 cards on desktop (lg+), 1 on mobile/tablet
// // //     const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1024;
// // //     const cardsPerSlide = isLargeScreen ? 2 : 1;
// // //     const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

// // //     const nextSlide = () => {
// // //         setCurrentIndex((prev) => (prev + 1) % totalSlides);
// // //     };

// // //     const prevSlide = () => {
// // //         setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
// // //     };

// // //     const goToSlide = (index) => {
// // //         setCurrentIndex(index);
// // //     };

// // //     // Get current testimonials to show
// // //     const getCurrentTestimonials = () => {
// // //         const startIndex = currentIndex * cardsPerSlide;
// // //         return testimonials.slice(startIndex, startIndex + cardsPerSlide);
// // //     };

// // //     // Auto-play slider
// // //     useEffect(() => {
// // //         const interval = setInterval(nextSlide, 5000);
// // //         return () => clearInterval(interval);
// // //     }, []);

// // //     return (
// // //         <section className="py-20 px-4 md:px-8 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
// // //             <div className="max-w-7xl mx-auto">
// // //                 {/* Header */}
// // //                 <div className="text-center mb-16">
// // //                     <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
// // //                         <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
// // //                             Testimonials
// // //                         </span>
// // //                     </div>

// // //                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
// // //                         What Clients Say About
// // //                         <span className="block text-purple-600">Pillar</span>
// // //                     </h2>

// // //                     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// // //                         Real stories from satisfied clients who found their perfect properties
// // //                     </p>
// // //                 </div>

// // //                 {/* Testimonials Display */}
// // //                 <div className="relative">
// // //                     {/* Navigation Buttons */}
// // //                     <button
// // //                         onClick={prevSlide}
// // //                         className="absolute left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full border border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-200 transition-colors"
// // //                     >
// // //                         <FaChevronLeft size={18} />
// // //                     </button>

// // //                     <button
// // //                         onClick={nextSlide}
// // //                         className="absolute right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full border border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-200 transition-colors"
// // //                     >
// // //                         <FaChevronRight size={18} />
// // //                     </button>

// // //                     {/* Current Testimonials */}
// // //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[400px]">
// // //                         {getCurrentTestimonials().map((testimonial) => (
// // //                             <div
// // //                                 key={testimonial.id}
// // //                                 className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 opacity-0 animate-fadeIn"
// // //                                 style={{
// // //                                     animation: 'fadeIn 0.5s ease-in-out forwards'
// // //                                 }}
// // //                             >
// // //                                 {/* Quote Icon */}
// // //                                 <div className="mb-6">
// // //                                     <FaQuoteLeft className="text-3xl text-purple-600 opacity-60" />
// // //                                 </div>

// // //                                 {/* Stars */}
// // //                                 <div className="flex gap-1 mb-6">
// // //                                     {[...Array(testimonial.rating)].map((_, i) => (
// // //                                         <FaStar key={i} className="text-yellow-400 text-lg" />
// // //                                     ))}
// // //                                 </div>

// // //                                 {/* Quote */}
// // //                                 <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
// // //                                     "{testimonial.quote}"
// // //                                 </blockquote>

// // //                                 {/* Client Info */}
// // //                                 <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
// // //                                     <Image
// // //                                         src={testimonial.image}
// // //                                         alt={testimonial.name}
// // //                                         width={60}
// // //                                         height={60}
// // //                                         className="rounded-full"
// // //                                     />
// // //                                     <div>
// // //                                         <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
// // //                                         <p className="text-purple-600 font-semibold text-sm">{testimonial.role}</p>
// // //                                         <p className="text-gray-500 text-sm">{testimonial.company}</p>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         ))}

// // //                         {/* Fill empty space on large screens if odd number of testimonials */}
// // //                         {isLargeScreen && getCurrentTestimonials().length === 1 && (
// // //                             <div className="hidden lg:block"></div>
// // //                         )}
// // //                     </div>

// // //                     {/* Dots Navigation */}
// // //                     <div className="flex justify-center gap-2 mt-8">
// // //                         {Array.from({ length: totalSlides }).map((_, index) => (
// // //                             <button
// // //                                 key={index}
// // //                                 onClick={() => goToSlide(index)}
// // //                                 className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
// // //                                         ? 'w-8 bg-purple-600'
// // //                                         : 'w-3 bg-gray-300 hover:bg-gray-400'
// // //                                     }`}
// // //                             />
// // //                         ))}
// // //                     </div>

// // //                     {/* Slide Counter */}
// // //                     <div className="text-center mt-4 text-gray-500 text-sm">
// // //                         {currentIndex + 1} of {totalSlides}
// // //                     </div>
// // //                 </div>

// // //                 {/* Stats Section */}
// // //                 <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
// // //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
// // //                         <div>
// // //                             <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">1,200+</div>
// // //                             <div className="text-gray-600 font-semibold text-lg">Happy Families</div>
// // //                         </div>
// // //                         <div>
// // //                             <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">4.9★</div>
// // //                             <div className="text-gray-600 font-semibold text-lg">Average Rating</div>
// // //                         </div>
// // //                         <div>
// // //                             <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">99%</div>
// // //                             <div className="text-gray-600 font-semibural text-lg">Satisfaction Rate</div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <style jsx>{`
// // //                 .testimonial-card {
// // //                     opacity: 1;
// // //                     transform: translateY(0);
// // //                 }
// // //             `}</style>
// // //         </section>
// // //     );
// // // };

// // // export default Reviews;



// // 'use client'
// // import { useState, useEffect } from "react";
// // import Image from "next/image";
// // import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // const Reviews = () => {
// //     const [currentIndex, setCurrentIndex] = useState(0);

// //     const testimonials = [
// //         {
// //             id: 1,
// //             quote: "Pillar transformed our property search experience completely. Their personalized approach and deep market knowledge helped us find our dream home in just two weeks. The team's dedication and professionalism exceeded all expectations.",
// //             name: "Sarah Mitchell",
// //             role: "Marketing Director",
// //             image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// //             rating: 5,
// //             company: "Tech Solutions Inc."
// //         },
// //         {
// //             id: 2,
// //             quote: "Working with Pillar was an absolute game-changer for our investment portfolio. Their market insights and strategic guidance helped us secure premium properties with excellent ROI potential. Highly recommended!",
// //             name: "David Chen",
// //             role: "Investment Banker",
// //             image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// //             rating: 5,
// //             company: "Goldman Sachs"
// //         },
// //         {
// //             id: 3,
// //             quote: "The level of service at Pillar is unmatched. From initial consultation to final closing, every detail was handled with care and precision. They made what could have been stressful into an enjoyable journey.",
// //             name: "Emily Rodriguez",
// //             role: "Entrepreneur",
// //             image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// //             rating: 5,
// //             company: "StartupHub"
// //         },
// //         {
// //             id: 4,
// //             quote: "Exceptional expertise and customer service! Pillar helped us navigate the complex luxury property market with ease. Their network and negotiation skills saved us both time and money on our purchase.",
// //             name: "James Wilson",
// //             role: "CEO",
// //             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
// //             rating: 5,
// //             company: "Wilson Enterprises"
// //         }
// //     ];

// //     // Simple logic: show 2 cards on desktop (lg+), 1 on mobile/tablet
// //     const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1024;
// //     const cardsPerSlide = isLargeScreen ? 2 : 1;
// //     const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

// //     const nextSlide = () => {
// //         setCurrentIndex((prev) => (prev + 1) % totalSlides);
// //     };

// //     const prevSlide = () => {
// //         setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
// //     };

// //     const goToSlide = (index) => {
// //         setCurrentIndex(index);
// //     };

// //     // Get current testimonials to show
// //     const getCurrentTestimonials = () => {
// //         const startIndex = currentIndex * cardsPerSlide;
// //         return testimonials.slice(startIndex, startIndex + cardsPerSlide);
// //     };

// //     // Auto-play slider
// //     useEffect(() => {
// //         const interval = setInterval(nextSlide, 5000);
// //         return () => clearInterval(interval);
// //     }, []);

// //     return (
// //         <section className="py-20 px-4 md:px-8 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
// //             <div className="max-w-7xl mx-auto">
// //                 {/* Header */}
// //                 <div className="text-center mb-16">
// //                     <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
// //                         <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
// //                             Testimonials
// //                         </span>
// //                     </div>

// //                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
// //                         What Clients Say About
// //                         <span className="block text-purple-600">Pillar</span>
// //                     </h2>

// //                     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //                         Real stories from satisfied clients who found their perfect properties
// //                     </p>
// //                 </div>

// //                 {/* Testimonials Display */}
// //                 <div className="relative">
// //                     {/* Navigation Buttons */}
// //                     <button
// //                         onClick={prevSlide}
// //                         className="absolute left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full border border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-200 transition-colors"
// //                     >
// //                         <FaChevronLeft size={18} />
// //                     </button>

// //                     <button
// //                         onClick={nextSlide}
// //                         className="absolute right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full border border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-200 transition-colors"
// //                     >
// //                         <FaChevronRight size={18} />
// //                     </button>

// //                     {/* Current Testimonials */}
// //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[400px]">
// //                         {getCurrentTestimonials().map((testimonial) => (
// //                             <div
// //                                 key={testimonial.id}
// //                                 className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 opacity-0 animate-fadeIn"
// //                                 style={{
// //                                     animation: 'fadeIn 0.5s ease-in-out forwards'
// //                                 }}
// //                             >
// //                                 {/* Quote Icon */}
// //                                 <div className="mb-6">
// //                                     <FaQuoteLeft className="text-3xl text-purple-600 opacity-60" />
// //                                 </div>

// //                                 {/* Stars */}
// //                                 <div className="flex gap-1 mb-6">
// //                                     {[...Array(testimonial.rating)].map((_, i) => (
// //                                         <FaStar key={i} className="text-yellow-400 text-lg" />
// //                                     ))}
// //                                 </div>

// //                                 {/* Quote */}
// //                                 <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
// //                                     "{testimonial.quote}"
// //                                 </blockquote>

// //                                 {/* Client Info */}
// //                                 <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
// //                                     <Image
// //                                         src={testimonial.image}
// //                                         alt={testimonial.name}
// //                                         width={60}
// //                                         height={60}
// //                                         className="rounded-full"
// //                                     />
// //                                     <div>
// //                                         <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
// //                                         <p className="text-purple-600 font-semibold text-sm">{testimonial.role}</p>
// //                                         <p className="text-gray-500 text-sm">{testimonial.company}</p>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         ))}

// //                         {/* Fill empty space on large screens if odd number of testimonials */}
// //                         {isLargeScreen && getCurrentTestimonials().length === 1 && (
// //                             <div className="hidden lg:block"></div>
// //                         )}
// //                     </div>

// //                     {/* Dots Navigation */}
// //                     <div className="flex justify-center gap-2 mt-8">
// //                         {Array.from({ length: totalSlides }).map((_, index) => (
// //                             <button
// //                                 key={index}
// //                                 onClick={() => goToSlide(index)}
// //                                 className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
// //                                         ? 'w-8 bg-purple-600'
// //                                         : 'w-3 bg-gray-300 hover:bg-gray-400'
// //                                     }`}
// //                             />
// //                         ))}
// //                     </div>

// //                     {/* Slide Counter */}
// //                     <div className="text-center mt-4 text-gray-500 text-sm">
// //                         {currentIndex + 1} of {totalSlides}
// //                     </div>
// //                 </div>

// //                 {/* Stats Section */}
// //                 <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
// //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
// //                         <div>
// //                             <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">1,200+</div>
// //                             <div className="text-gray-600 font-semibold text-lg">Happy Families</div>
// //                         </div>
// //                         <div>
// //                             <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">4.9★</div>
// //                             <div className="text-gray-600 font-semibold text-lg">Average Rating</div>
// //                         </div>
// //                         <div>
// //                             <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">99%</div>
// //                             <div className="text-gray-600 font-semibural text-lg">Satisfaction Rate</div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <style jsx>{`
// //                 .testimonial-card {
// //                     opacity: 1;
// //                     transform: translateY(0);
// //                 }
// //             `}</style>
// //         </section>
// //     );
// // };

// // export default Reviews;

// 'use client'
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Reviews = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [direction, setDirection] = useState("right");
//     const [cardsPerSlide, setCardsPerSlide] = useState(1);

//     const testimonials = [
//         {
//             id: 1,
//             quote: "Pillar transformed our property search experience completely. Their personalized approach and deep market knowledge helped us find our dream home in just two weeks. The team's dedication and professionalism exceeded all expectations.",
//             name: "Sarah Mitchell",
//             role: "Marketing Director",
//             image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//             rating: 5,
//             company: "Tech Solutions Inc.",
//         },
//         {
//             id: 2,
//             quote: "Working with Pillar was an absolute game-changer for our investment portfolio. Their market insights and strategic guidance helped us secure premium properties with excellent ROI potential. Highly recommended!",
//             name: "David Chen",
//             role: "Investment Banker",
//             image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//             rating: 5,
//             company: "Goldman Sachs",
//         },
//         {
//             id: 3,
//             quote: "The level of service at Pillar is unmatched. From initial consultation to final closing, every detail was handled with care and precision. They made what could have been stressful into an enjoyable journey.",
//             name: "Emily Rodriguez",
//             role: "Entrepreneur",
//             image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//             rating: 5,
//             company: "StartupHub",
//         },
//         {
//             id: 4,
//             quote: "Exceptional expertise and customer service! Pillar helped us navigate the complex luxury property market with ease. Their network and negotiation skills saved us both time and money on our purchase.",
//             name: "James Wilson",
//             role: "CEO",
//             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//             rating: 5,
//             company: "Wilson Enterprises",
//         },
//     ];

//     // ✅ Responsive cardsPerSlide
//     useEffect(() => {
//         const updateCardsPerSlide = () => {
//             if (window.innerWidth >= 1024) {
//                 setCardsPerSlide(2);
//             } else {
//                 setCardsPerSlide(1);
//             }
//         };

//         updateCardsPerSlide();
//         window.addEventListener("resize", updateCardsPerSlide);

//         return () => window.removeEventListener("resize", updateCardsPerSlide);
//     }, []);

//     const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

//     const nextSlide = () => {
//         setDirection("right");
//         setCurrentIndex((prev) => (prev + 1) % totalSlides);
//     };

//     const prevSlide = () => {
//         setDirection("left");
//         setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//     };

//     const goToSlide = (index) => {
//         setDirection(index > currentIndex ? "right" : "left");
//         setCurrentIndex(index);
//     };

//     const getCurrentTestimonials = () => {
//         const startIndex = currentIndex * cardsPerSlide;
//         return testimonials.slice(startIndex, startIndex + cardsPerSlide);
//     };

//     useEffect(() => {
//         const interval = setInterval(nextSlide, 5000);
//         return () => clearInterval(interval);
//     }, [cardsPerSlide]);

//     return (
//         <section className="py-20 px-4 md:px-8 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
//             <div className="max-w-6xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                         Client <span className="text-purple-600">Testimonials</span>
//                     </h2>
//                     <p className="text-gray-600 max-w-2xl mx-auto">
//                         Real stories from satisfied clients who found their perfect properties
//                     </p>
//                 </div>

//                 {/* Slider */}
//                 <div className="relative overflow-hidden">
//                     <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8`}>
//                         {getCurrentTestimonials().map((testimonial) => (
//                             <div
//                                 key={testimonial.id}
//                                 className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-slide-${direction}`}
//                             >
//                                 <div className="mb-6">
//                                     <FaQuoteLeft className="text-3xl text-purple-600 opacity-60" />
//                                 </div>

//                                 <div className="flex gap-1 mb-6">
//                                     {[...Array(testimonial.rating)].map((_, i) => (
//                                         <FaStar key={i} className="text-yellow-400 text-lg" />
//                                     ))}
//                                 </div>

//                                 <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
//                                     "{testimonial.quote}"
//                                 </blockquote>

//                                 <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
//                                     <Image
//                                         src={testimonial.image}
//                                         alt={testimonial.name}
//                                         width={60}
//                                         height={60}
//                                         className="rounded-full"
//                                     />
//                                     <div>
//                                         <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
//                                         <p className="text-purple-600 font-semibold text-sm">{testimonial.role}</p>
//                                         <p className="text-gray-500 text-sm">{testimonial.company}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Nav Buttons */}
//                     <button
//                         onClick={prevSlide}
//                         className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
//                     >
//                         <FaChevronLeft />
//                     </button>
//                     <button
//                         onClick={nextSlide}
//                         className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
//                     >
//                         <FaChevronRight />
//                     </button>
//                 </div>

//                 {/* Dots */}
//                 <div className="flex justify-center gap-2 mt-6">
//                     {Array.from({ length: totalSlides }).map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => goToSlide(index)}
//                             className={`h-3 rounded-full transition-all ${index === currentIndex
//                                 ? "w-8 bg-purple-600"
//                                 : "w-3 bg-gray-300"
//                                 }`}
//                         />
//                     ))}
//                 </div>
//             </div>

//             {/* Animations */}
//             <style jsx>{`
//                 @keyframes slide-right {
//                   from {
//                     opacity: 0;
//                     transform: translateX(100%);
//                   }
//                   to {
//                     opacity: 1;
//                     transform: translateX(0);
//                   }
//                 }
//                 @keyframes slide-left {
//                   from {
//                     opacity: 0;
//                     transform: translateX(-100%);
//                   }
//                   to {
//                     opacity: 1;
//                     transform: translateX(0);
//                   }
//                 }
//                 .animate-slide-right {
//                   animation: slide-right 0.6s ease forwards;
//                 }
//                 .animate-slide-left {
//                   animation: slide-left 0.6s ease forwards;
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default Reviews;


'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const testimonials = [
        {
            id: 1,
            quote: "Pillar transformed our entire property search experience. Their personalized approach, combined with deep market knowledge, helped us discover our dream home in record time. The level of professionalism and attention to detail was truly exceptional.",
            name: "Sarah Mitchell",
            role: "Marketing Director",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 5,
            company: "TechCorp Solutions",
            location: "San Francisco, CA"
        },
        {
            id: 2,
            quote: "Working with Pillar was an absolute game-changer for our investment portfolio. Their strategic insights and market expertise helped us secure premium properties that exceeded our ROI expectations by 40%. Simply outstanding!",
            name: "David Chen",
            role: "Investment Director",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 5,
            company: "Goldman Sachs",
            location: "New York, NY"
        },
        {
            id: 3,
            quote: "From initial consultation to closing day, Pillar's service was flawless. They handled every detail with precision and care, making what could have been a stressful process incredibly smooth and enjoyable. Truly world-class service.",
            name: "Emily Rodriguez",
            role: "Tech Entrepreneur",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 5,
            company: "InnovateHub",
            location: "Austin, TX"
        },
        {
            id: 4,
            quote: "Pillar's expertise in luxury real estate is unmatched. Their negotiation skills and industry connections saved us both time and money while securing our perfect property. The entire team exceeded every expectation we had.",
            name: "James Wilson",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 5,
            company: "Wilson Enterprises",
            location: "Miami, FL"
        },
        {
            id: 5,
            quote: "The personalized attention and market insights from Pillar made all the difference. They understood exactly what we were looking for and delivered beyond our wildest expectations. Professional, reliable, and results-driven.",
            name: "Lisa Thompson",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 5,
            company: "Design Studio Pro",
            location: "Los Angeles, CA"
        },
        {
            id: 6,
            quote: "Outstanding service from day one! Pillar's team guided us through every step of our first home purchase with patience and expertise. Their commitment to client satisfaction is remarkable and truly sets them apart.",
            name: "Michael Brown",
            role: "Software Engineer",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 5,
            company: "Microsoft",
            location: "Seattle, WA"
        }
    ];

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, currentIndex]);

    // Get current testimonial for main display
    const currentTestimonial = testimonials[currentIndex];

    // Get adjacent testimonials for preview
    const getAdjacentTestimonials = () => {
        const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        const nextIndex = (currentIndex + 1) % testimonials.length;
        return {
            prev: testimonials[prevIndex],
            next: testimonials[nextIndex]
        };
    };

    const adjacent = getAdjacentTestimonials();

    return (
        <section className="py-24 px-4 md:px-8 lg:px-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 shadow-lg mb-8">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-200"></div>
                            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse animation-delay-400"></div>
                        </div>
                        <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 uppercase tracking-wider">
                            Client Success Stories
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 mb-8 leading-tight">
                        Voices of
                        <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Satisfaction
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover why thousands of clients choose Pillar for their real estate journey
                    </p>
                </div>

                {/* Main Testimonial Display */}
                <div className="relative mb-16">
                    {/* Navigation Controls */}
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                        <button
                            onClick={toggleAutoPlay}
                            className="bg-white/90 backdrop-blur-sm hover:bg-white text-purple-600 p-3 rounded-full shadow-lg border border-purple-100 transition-all duration-300 hover:scale-110"
                        >
                            {isAutoPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
                        </button>
                    </div>

                    {/* Preview Cards */}
                    <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 w-80 shadow-lg border border-white/50 transform -rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer"
                            onClick={prevSlide}>
                            <div className="flex items-center gap-3 mb-4">
                                <Image src={adjacent.prev.image} alt={adjacent.prev.name} width={40} height={40} className="rounded-full" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-sm">{adjacent.prev.name}</h4>
                                    <p className="text-purple-600 text-xs">{adjacent.prev.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-3">"{adjacent.prev.quote.substring(0, 120)}..."</p>
                        </div>
                    </div>

                    <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 w-80 shadow-lg border border-white/50 transform rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer"
                            onClick={nextSlide}>
                            <div className="flex items-center gap-3 mb-4">
                                <Image src={adjacent.next.image} alt={adjacent.next.name} width={40} height={40} className="rounded-full" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-sm">{adjacent.next.name}</h4>
                                    <p className="text-purple-600 text-xs">{adjacent.next.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-3">"{adjacent.next.quote.substring(0, 120)}..."</p>
                        </div>
                    </div>

                    {/* Main Card */}
                    <div className="max-w-4xl mx-auto">
                        <div
                            key={currentTestimonial.id}
                            className="bg-white/90 backdrop-blur-lg rounded-3xl p-12 lg:p-16 shadow-2xl border border-white/50 relative overflow-hidden transform transition-all duration-600"
                            style={{
                                animation: isTransitioning ? 'slideIn 0.6s ease-out' : 'none'
                            }}
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"></div>
                            <div className="absolute top-8 right-8 opacity-10">
                                <FaQuoteLeft className="text-8xl text-purple-600" />
                            </div>

                            {/* Rating */}
                            <div className="flex justify-center gap-2 mb-8">
                                {[...Array(currentTestimonial.rating)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className="text-yellow-400 text-2xl drop-shadow-sm"
                                        style={{
                                            animation: `starGlow 2s ease-in-out ${i * 0.1}s infinite`
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-12 font-light italic text-center relative z-10">
                                "{currentTestimonial.quote}"
                            </blockquote>

                            {/* Client Info */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 border-t border-gray-200">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                                    <Image
                                        src={currentTestimonial.image}
                                        alt={currentTestimonial.name}
                                        width={80}
                                        height={80}
                                        className="relative rounded-full border-4 border-white shadow-xl z-10"
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-3 border-white z-20"></div>
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="font-bold text-2xl text-gray-900 mb-2">{currentTestimonial.name}</h4>
                                    <p className="text-purple-600 font-semibold text-lg mb-1">{currentTestimonial.role}</p>
                                    <p className="text-gray-600 mb-1">{currentTestimonial.company}</p>
                                    <p className="text-gray-500 text-sm">{currentTestimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        disabled={isTransitioning}
                        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-purple-600 text-purple-600 hover:text-white p-4 rounded-full shadow-xl border-2 border-purple-200 hover:border-purple-600 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaChevronLeft size={20} />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={isTransitioning}
                        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-purple-600 text-purple-600 hover:text-white p-4 rounded-full shadow-xl border-2 border-purple-200 hover:border-purple-600 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-3 mb-16">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isTransitioning}
                            className={`transition-all duration-300 rounded-full disabled:cursor-not-allowed ${index === currentIndex
                                    ? 'w-12 h-4 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg'
                                    : 'w-4 h-4 bg-gray-300 hover:bg-purple-400 hover:scale-125'
                                }`}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-purple-600 to-blue-600 h-full rounded-full transition-all duration-300"
                            style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>Review {currentIndex + 1}</span>
                        <span>{testimonials.length} Total</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-white/80 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50">
                    <div className="text-center group">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                            2,500+
                        </div>
                        <div className="text-gray-600 font-semibold text-lg">Happy Clients</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                            4.9★
                        </div>
                        <div className="text-gray-600 font-semibold text-lg">Average Rating</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                            99%
                        </div>
                        <div className="text-gray-600 font-semibold text-lg">Satisfaction</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                            24/7
                        </div>
                        <div className="text-gray-600 font-semibold text-lg">Support</div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(100px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                    }
                }
                
                @keyframes starGlow {
                    0%, 100% { transform: scale(1); filter: brightness(1); }
                    50% { transform: scale(1.1); filter: brightness(1.2); }
                }
                
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                .animation-delay-200 {
                    animation-delay: 0.2s;
                }
                
                .animation-delay-400 {
                    animation-delay: 0.4s;
                }
                
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};

export default Reviews;