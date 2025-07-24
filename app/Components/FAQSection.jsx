'use client'

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
        question: "What is Pillar real estate?",
        answer: "Pillar is a modern real estate agency offering luxury, commercial, and residential properties across regions."
    },
    {
        question: "How to work pillar all services?",
        answer: "You can access Pillar's services via the website or mobile app, offering property search, booking, and consultation."
    },
    {
        question: "What resources are available for interfaith dialogue?",
        answer: "Pillar encourages community growth and inclusivity. We provide event spaces and support inclusive housing discussions."
    },
    {
        question: "What programs are available for developer?",
        answer: "We offer partnership programs, development opportunities, and land acquisition options for developers."
    },
    {
        question: "How can I contribute to the local real estate?",
        answer: "You can contribute through referrals, investments, or collaborating with us on local development projects."
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#f7f2f0] py-16 px-4 md:px-20">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-center text-sm font-semibold text-purple-800 mb-2 uppercase tracking-wide">
                    Frequently Ask Questions
                </h3>
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
                    What Would You Like <br /> To Know About Pillar?
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl shadow p-5">
                            <button
                                onClick={() => toggle(index)}
                                className="flex justify-between items-center w-full text-left"
                            >
                                <span className="font-semibold text-lg">
                                    {index + 1}. {faq.question}
                                </span>
                                <span className="text-purple-700">
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="mt-3 text-gray-600 text-sm">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
