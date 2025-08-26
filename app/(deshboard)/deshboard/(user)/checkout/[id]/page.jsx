


'use client';

import React, { use, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useParams } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { Slide, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');
    const { id } = useParams();
    const { user } = useUser();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('https://smartstay-api-production.up.railway.app/payment/payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    currency: country,
                    user_email: email,
                    booking_id: id,
                }),
            });

            const data = await res.json();
            const clientSecret = data.client_secret;

            const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: { email, name },
                },
            });

            if (error) {
                alert(error.message);
            } else if (paymentIntent.status === 'succeeded') {
                // alert('✅ Payment successful!');
                toast.success('Payment successful!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
                router.push('/deshboard');
            }
        } catch (err) {
            toast.error('Payment failed!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
            router.push('/deshboard');
        }

        setLoading(false);
    };

    useEffect(() => {
        if (user) {
            setEmail(user.email);
            setName(user.name);
        }
    }, [user]);

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow space-y-4">
            <h2 className="text-xl font-bold mb-2">Complete Your Payment</h2>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="test@example.com"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                    readOnly
                />
            </div>

            {/* Card Information */}
            <div>
                <label className="block text-sm font-medium mb-1">Card Information</label>
                <div className="border border-gray-300 rounded p-3">
                    <CardElement />
                </div>
            </div>

            {/* Name on Card */}
            <div>
                <label className="block text-sm font-medium mb-1">Name on Card</label>
                <input
                    type="text"
                    value={name}
                    // onChange={(e) => setName(e.target.value)}
                    placeholder="Zhang San"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                    readOnly
                />
            </div>

            {/* Country and ZIP */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Country/Region</label>
                    {/* <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                    </select> */}
                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select Currency</option>
                        <option value="usd">USD - United States Dollar</option>
                        <option value="cad">CAD - Canadian Dollar</option>
                        <option value="gbp">GBP - British Pound</option>
                        <option value="aud">AUD - Australian Dollar</option>
                        <option value="eur">EUR - Euro</option>
                        <option value="jpy">JPY - Japanese Yen</option>
                        <option value="nzd">NZD - New Zealand Dollar</option>
                        <option value="sgd">SGD - Singapore Dollar</option>
                        <option value="chf">CHF - Swiss Franc</option>
                        <option value="sek">SEK - Swedish Krona</option>
                        <option value="dkk">DKK - Danish Krone</option>
                        <option value="nok">NOK - Norwegian Krone</option>
                        <option value="hkd">HKD - Hong Kong Dollar</option>
                        <option value="twd">TWD - Taiwan Dollar</option>
                        <option value="ils">ILS - Israeli Shekel</option>
                    </select>


                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">ZIP</label>
                    <input
                        type="text"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        placeholder="12345"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
            >
                {loading ? 'Processing...' : 'Pay'}
            </button>
        </form>
    );
}

export default function PaymentPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
}
