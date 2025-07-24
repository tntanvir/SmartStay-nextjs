import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function ExploreCities() {
    return (
        <section className="w-full px-6 md:px-20 py-20 bg-[#fafafa] text-black">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <p className="text-sm text-black font-semibold">Explore Cities</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-black">Explore The Neighborhoods</h2>
                    <p className="text-black mt-1">Find your dream apartment with our listing</p>
                </div>
                <button className="border px-5 py-2 rounded-lg text-sm hover:bg-gray-100 transition text-black">
                    Browse All Now
                </button>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Large Card */}
                <div className="md:row-span-2 relative rounded-3xl overflow-hidden bg-red-500">
                    <Image
                        src="/a8a153d1-bd03-4fa7-8e50-7e86dca8c2ba.png"
                        alt="Cape Town"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="absolute bottom-5 left-5 text-black">
                        <p className="text-sm font-medium">42 Properties</p>
                        <h3 className="text-lg font-semibold">Cape Town, South Africa</h3>
                    </div>
                </div>

                {/* Top Right - Sydney */}
                <div className="relative rounded-3xl overflow-hidden bg-red-500">
                    <Image
                        src="/a8a153d1-bd03-4fa7-8e50-7e86dca8c2ba.png"
                        alt="Sydney"
                        width={800}
                        height={400}
                        className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="absolute bottom-5 left-5 text-black">
                        <p className="text-sm font-medium">34 Properties</p>
                        <h3 className="text-lg font-semibold">Sydney, Australia</h3>
                    </div>
                </div>

                {/* Bottom Left - LA */}
                <div className="relative rounded-3xl overflow-hidden bg-red-500">
                    <Image
                        src="/a8a153d1-bd03-4fa7-8e50-7e86dca8c2ba.png"
                        alt="Los Angeles"
                        width={800}
                        height={400}
                        className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="absolute bottom-5 left-5 text-black">
                        <p className="text-sm font-medium">55 Properties</p>
                        <h3 className="text-lg font-semibold">Los Angeles, New York</h3>
                    </div>
                </div>

                {/* Bottom Right - Seoul */}
                <div className="relative rounded-3xl overflow-hidden bg-red-500">
                    <Image
                        src="/a8a153d1-bd03-4fa7-8e50-7e86dca8c2ba.png"
                        alt="Seoul"
                        width={800}
                        height={400}
                        className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="absolute bottom-5 left-5 text-black">
                        <p className="text-sm font-medium">25 Properties</p>
                        <h3 className="text-lg font-semibold">Seoul, South Korea</h3>
                    </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden bg-red-500">
                    <Image
                        src="/a8a153d1-bd03-4fa7-8e50-7e86dca8c2ba.png"
                        alt="Seoul"
                        width={800}
                        height={400}
                        className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="absolute bottom-5 left-5 text-black">
                        <p className="text-sm font-medium">25 Properties</p>
                        <h3 className="text-lg font-semibold">Seoul, South Korea</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
