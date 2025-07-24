"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background Grid with Fade */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
                    backgroundSize: "20px 30px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                    maskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                }}
            />

            {/* Main Content */}
            <section className="relative z-10 w-full py-16 px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-[#ff4e4e] font-semibold text-lg">Welcome To Pillar</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-black">
                            Find Your Perfect <span className="text-[#ff4e4e]">Home</span> to Life Spend
                        </h1>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                            <div>
                                <p className="text-xl font-bold">1950+</p>
                                <p className="text-sm text-gray-600">Project Handover</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold">2M+</p>
                                <p className="text-sm text-gray-600">Monthly Visitors</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold">850+</p>
                                <p className="text-sm text-gray-600">Property Ready</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold">98%</p>
                                <p className="text-sm text-gray-600">Happy Customers</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src="/895c8557-4a00-4e38-abb2-666802ba188e.png"
                            alt="Map"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
