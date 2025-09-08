

'use client';
import { useEffect, useState, useRef } from "react";
import { FaChevronRight, FaChevronLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { IoIosQuote } from "react-icons/io";

const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            },
        },
    ],
};

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        fetch("https://smartstay-api.up.railway.app/review/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => {
                console.error("Error fetching reviews:", err);
                setReviews([]);
            });
    }, []);

    // Skeleton loader
    const skeletons = Array.from({ length: 6 });

    return (
        <section className="flex flex-col justify-center items-center px-4 py-20  relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400 rounded-full opacity-30 blur-lg"></div>

            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
                    <IoIosQuote className="text-purple-600 text-sm" />
                    <span className="text-sm font-semibold text-purple-800 uppercase tracking-wide">
                        Testimonials
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-800 via-purple-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">
                    What Our Clients <br /> Are Saying
                </h2>



                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Real feedback from real clients who love our service
                </p>
            </div>

            <div className="w-full max-w-7xl relative">
                {/* Custom Arrows with enhanced styling */}
                <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-2 z-40">
                    <button
                        className="text-2xl bg-white shadow-2xl hover:bg-purple-600 hover:text-white text-purple-600 rounded-full p-4 transition-all duration-300 transform hover:scale-110 border border-purple-100"
                        onClick={() => sliderRef.current?.slickPrev()}
                        aria-label="Previous"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="text-2xl bg-white shadow-2xl hover:bg-purple-600 hover:text-white text-purple-600 rounded-full p-4 transition-all duration-300 transform hover:scale-110 border border-purple-100"
                        onClick={() => sliderRef.current?.slickNext()}
                        aria-label="Next"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {reviews === null
                        ? skeletons.map((_, i) => (
                            <div key={i} className="p-4">
                                <div className="bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse rounded-3xl p-8 flex flex-col items-center text-center min-h-[400px]" />
                            </div>
                        ))
                        : reviews.map((review) => (
                            <div key={review.id} className="p-4">
                                <div className="bg-white shadow-sm rounded-3xl p-8 flex flex-col items-center text-center min-h-[400px] relative overflow-hidden group border border-purple-400">
                                    {/* Card background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/30 rounded-3xl"></div>

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center h-full">
                                        <div className="relative mb-6">
                                            <img
                                                src={review.user.profile}
                                                alt={review.user.name}
                                                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl"
                                            />
                                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{review.user.name}</h3>
                                        <p className="text-slate-500 text-sm font-medium mb-4 bg-slate-100 px-3 py-1 rounded-full">
                                            {review.user.address}
                                        </p>

                                        <div className="flex gap-1 text-yellow-400 mb-6 text-lg">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <FaStar key={i} className="drop-shadow-sm" />
                                            ))}
                                            {[...Array(5 - review.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-slate-200" />
                                            ))}
                                        </div>

                                        <div className="flex-grow flex items-center">
                                            <p className="text-slate-700 leading-relaxed text-center text-sm italic">
                                                "{review.reviews}"
                                            </p>
                                        </div>
                                    </div>

                                    {/* Quote decoration */}
                                    <div className="absolute top-6 right-6 text-6xl text-purple-100 font-serif">"</div>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </section>
    );
};

export default Reviews;