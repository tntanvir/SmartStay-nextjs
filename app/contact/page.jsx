

"use client";

import { useState } from "react";
import { FaEnvelope, FaUser, FaPhone, FaPaperPlane, FaExclamationCircle, FaCommentDots, FaCheckCircle } from "react-icons/fa";

export default function ModernContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 2000);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaCheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-semibold"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Let’s Start a <span className="text-purple-600">Conversation</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow border">
                            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                                <FaEnvelope className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
                            <p className="text-gray-600 dark:text-gray-300">hello@company.com</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow border">
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                                <FaPhone className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Call Us</h3>
                            <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow border space-y-6"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${errors.name
                                                ? 'border-red-500 focus:ring-red-500/20'
                                                : 'border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500/20 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white'
                                                }`}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="text-red-500 text-sm flex items-center">
                                            <FaExclamationCircle className="mr-1" /> {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${errors.email
                                                ? 'border-red-500 focus:ring-red-500/20'
                                                : 'border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500/20 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white'
                                                }`}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="text-red-500 text-sm flex items-center">
                                            <FaExclamationCircle className="mr-1" /> {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Phone Field */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Message *
                                </label>
                                <div className="relative">
                                    <FaCommentDots className="absolute left-4 top-4 text-gray-400" />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={6}
                                        className={`w-full pl-12 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 resize-none transition-all ${errors.message
                                            ? 'border-red-500 focus:ring-red-500/20'
                                            : 'border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500/20 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white'
                                            }`}
                                        placeholder="Tell us about your project, goals, and how we can help you..."
                                    />
                                </div>
                                {errors.message && (
                                    <p className="text-red-500 text-sm flex items-center">
                                        <FaExclamationCircle className="mr-1" /> {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-8 bg-purple-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center ${isSubmitting
                                    ? 'opacity-70 cursor-not-allowed'
                                    : 'hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02]'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <FaPaperPlane className="mr-2" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
