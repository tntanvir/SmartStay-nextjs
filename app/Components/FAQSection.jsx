// 'use client'

// import { useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";

// const faqs = [
//     {
//         question: "What is Pillar real estate?",
//         answer: "Pillar is a modern real estate agency offering luxury, commercial, and residential properties across regions."
//     },
//     {
//         question: "How to work pillar all services?",
//         answer: "You can access Pillar's services via the website or mobile app, offering property search, booking, and consultation."
//     },
//     {
//         question: "What resources are available for interfaith dialogue?",
//         answer: "Pillar encourages community growth and inclusivity. We provide event spaces and support inclusive housing discussions."
//     },
//     {
//         question: "What programs are available for developer?",
//         answer: "We offer partnership programs, development opportunities, and land acquisition options for developers."
//     },
//     {
//         question: "How can I contribute to the local real estate?",
//         answer: "You can contribute through referrals, investments, or collaborating with us on local development projects."
//     },
// ];

// export default function FAQSection() {
//     const [openIndex, setOpenIndex] = useState(null);

//     const toggle = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <section className="bg-[#f7f2f0] py-16 px-4 md:px-20">
//             <div className="max-w-4xl mx-auto">
//                 <h3 className="text-center text-sm font-semibold text-purple-800 mb-2 uppercase tracking-wide">
//                     Frequently Ask Questions
//                 </h3>
//                 <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
//                     What Would You Like <br /> To Know About Pillar?
//                 </h2>

//                 <div className="space-y-4">
//                     {faqs.map((faq, index) => (
//                         <div key={index} className="bg-white rounded-xl shadow p-5">
//                             <button
//                                 onClick={() => toggle(index)}
//                                 className="flex justify-between items-center w-full text-left"
//                             >
//                                 <span className="font-semibold text-lg">
//                                     {index + 1}. {faq.question}
//                                 </span>
//                                 <span className="text-purple-700">
//                                     {openIndex === index ? <FaMinus /> : <FaPlus />}
//                                 </span>
//                             </button>
//                             {openIndex === index && (
//                                 <div className="mt-3 text-gray-600 text-sm">
//                                     {faq.answer}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


'use client'
import { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const faqs = [
    {
        question: "What is Pillar real estate?",
        answer: "Pillar is a modern real estate agency offering luxury, commercial, and residential properties across regions. We combine innovative technology with personalized service to help you find your perfect property match."
    },
    {
        question: "How to work with all Pillar services?",
        answer: "You can access Pillar's comprehensive services through our website or mobile app. We offer property search, virtual tours, booking consultations, and dedicated support throughout your entire real estate journey."
    },
    {
        question: "What resources are available for community dialogue?",
        answer: "Pillar encourages community growth and inclusivity. We provide event spaces, facilitate neighborhood meetings, and support inclusive housing discussions to build stronger, more connected communities."
    },
    {
        question: "What programs are available for developers?",
        answer: "We offer comprehensive partnership programs including development opportunities, land acquisition options, project financing assistance, and market analysis to help developers succeed in today's competitive market."
    },
    {
        question: "How can I contribute to local real estate growth?",
        answer: "You can contribute through property referrals, investment opportunities, collaborating on local development projects, or joining our community advisory board to shape the future of real estate in your area."
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 px-4 md:px-20 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-15 blur-lg"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header section with enhanced styling */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
                        <FaQuestionCircle className="text-purple-600 text-sm" />
                        <span className="text-sm font-semibold text-purple-800 uppercase tracking-wide">
                            Frequently Asked Questions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-800 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 leading-tight">
                        What Would You Like <br />
                        To Know About Pillar?
                    </h2>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Find answers to common questions about our services, processes, and how we can help you achieve your real estate goals.
                    </p>
                </div>

                {/* FAQ Items with enhanced design */}
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${openIndex === index ? 'ring-2 ring-purple-200 shadow-2xl' : ''
                                }`}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="flex justify-between items-center w-full text-left p-6 md:p-8"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${openIndex === index
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-purple-100 text-purple-600 group-hover:bg-purple-200'
                                        }`}>
                                        {index + 1}
                                    </div>
                                    <span className="font-semibold text-lg md:text-xl text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                                        {faq.question}
                                    </span>
                                </div>

                                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                    ? 'bg-purple-600 text-white rotate-180'
                                    : 'bg-purple-100 text-purple-600 group-hover:bg-purple-200 hover:rotate-90'
                                    }`}>
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </div>
                            </button>

                            {/* Animated answer section */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-6 md:px-8 pb-6 md:pb-8">
                                    <div className="ml-12 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-l-4 border-purple-400">
                                        <p className="text-gray-700 leading-relaxed text-base">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}