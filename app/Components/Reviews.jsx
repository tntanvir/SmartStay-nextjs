'use client'

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const testimonials = [
        {
            id: 1,
            quote1:
                "Tenax comitatus ambulo regnum eligo, conturbo vis caelum cohors. Infit ustulo adoptio collum, speciosus lumen soluta.",
            quote2:
                "Aer arceo umerus asperiores templum desidero caritas.",
            name: "Walter Deckow",
            role: "Property owner",
            image: "/user-1.jpg",
        },
        {
            id: 2,
            quote1:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quote2:
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "John Doe",
            role: "Real Estate Agent",
            image: "/user-2.jpg",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000, // Auto-slide every 4 seconds
        arrows: false,
        fade: true, // Smooth fade transition between slides
    };

    return (
        <section className="pt-16 px-6 md:px-20 overflow-hidden">
            <div className="bg-white text-black py-20 px-4 md:px-32 rounded-lg shadow-lg">
                <p className="text-sm text-purple-700 font-semibold flex items-center gap-2">
                    <span className="border-t border-purple-700 w-6"></span> Testimonials <span className="border-t border-purple-700 w-6"></span>
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">What Clients Say About Pillar</h2>

                {/* Slider */}
                <Slider {...settings}>
                    {testimonials.map(({ id, quote1, quote2, name, role, image }) => (
                        <div key={id} className="space-y-6 px-4">
                            <p className="text-6xl text-pink-300 font-bold opacity-50">“</p>
                            <p className="text-xl font-semibold text-gray-800 italic">“{quote1}”</p>
                            <p className="text-lg font-semibold text-gray-700 italic">“{quote2}”</p>

                            <div className="border-t border-gray-300 pt-6 flex items-center justify-start gap-4">
                                <Image
                                    src={image}
                                    alt={name}
                                    width={60}
                                    height={60}
                                    className="rounded-full border-4 border-gray-300 shadow-lg"
                                />
                                <div>
                                    <p className="font-bold text-lg text-gray-800">{name}</p>
                                    <p className="text-sm text-gray-500">{role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Reviews;
