// 'use client';

// import React, { useEffect, useState } from 'react';

// const Transactions = () => {
//     const [transactions, setTransactions] = useState([]);
//     const [total, setTotal] = useState(0);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchTransactions = async () => {
//             try {
//                 const res = await fetch('https://smartstay-api-production.up.railway.app/payment/payment');
//                 const data = await res.json();
//                 setTransactions(data.results.payments || []);
//                 setTotal(data.results.total_transactions || 0);
//                 setLoading(false);
//             } catch (err) {
//                 console.error(err);
//                 setLoading(false);
//             }
//         };

//         fetchTransactions();
//     }, []);

//     if (loading) {
//         return <p className="text-gray-500 text-center mt-10">Loading transactions...</p>;
//     }

//     const currencyColor = (currency) => {
//         switch (currency.toLowerCase()) {
//             case 'usd':
//                 return 'bg-green-100 text-green-800';
//             case 'cad':
//                 return 'bg-blue-100 text-blue-800';
//             case 'eur':
//                 return 'bg-purple-100 text-purple-800';
//             case 'gbp':
//                 return 'bg-indigo-100 text-indigo-800';
//             case 'jpy':
//                 return 'bg-yellow-100 text-yellow-800';
//             default:
//                 return 'bg-gray-100 text-gray-800';
//         }
//     };

//     return (
//         <div className="p-0 bg-gray-50 min-h-screen ">
//             <div className="max-w-7xl mx-auto">
//                 {/* Title */}
//                 <h1 className="text-3xl font-bold mb-6 text-gray-800">Transactions</h1>

//                 {/* Total Amount Card */}
//                 <div className="mb-6 p-4 bg-white rounded-xl shadow-md flex justify-between items-center">
//                     <span className="text-gray-600 font-medium text-lg">Total Transactions Amount:</span>
//                     <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
//                 </div>

//                 {/* Table Container */}
//                 <div className="overflow-x-auto bg-white rounded-xl shadow-md">
//                     <table className="table-auto w-full min-w-max divide-y divide-gray-200">
//                         <thead className="bg-gray-100 sticky top-0 z-10">
//                             <tr>
//                                 {['ID', 'Amount', 'Currency', 'Stripe Payment ID', 'User Email', 'Created At'].map((header) => (
//                                     <th
//                                         key={header}
//                                         scope="col"
//                                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
//                                     >
//                                         {header}
//                                     </th>
//                                 ))}
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {transactions.map((tx) => (
//                                 <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
//                                     <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">{tx.id}</td>
//                                     <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800">${parseFloat(tx.amount).toFixed(2)}</td>
//                                     <td className="px-6 py-3 whitespace-nowrap">
//                                         <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${currencyColor(tx.currency)}`}>
//                                             {tx.currency.toUpperCase()}
//                                         </span>
//                                     </td>
//                                     <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-600">{tx.stripe_payment_id}</td>
//                                     <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800">{tx.user_email}</td>
//                                     {/* <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{tx.booking_id}</td> */}
//                                     <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{new Date(tx.created_at).toLocaleString()}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Transactions;



'use client';

import React, { useEffect, useState } from 'react';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    const [currentUrl, setCurrentUrl] = useState('https://smartstay-api-production.up.railway.app/payment/payment');

    const fetchTransactions = async (url) => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();

            setTransactions(data.results.payments || []);
            setTotal(data.results.total_transactions || 0);
            setCount(data.count || 0);
            setNext(data.next);
            setPrevious(data.previous);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactions(currentUrl);
    }, [currentUrl]);

    if (loading) {
        return <p className="text-gray-500 text-center mt-10">Loading transactions...</p>;
    }

    const currencyColor = (currency) => {
        switch (currency.toLowerCase()) {
            case 'usd':
                return 'bg-green-100 text-green-800';
            case 'cad':
                return 'bg-blue-100 text-blue-800';
            case 'eur':
                return 'bg-purple-100 text-purple-800';
            case 'gbp':
                return 'bg-indigo-100 text-indigo-800';
            case 'jpy':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="p-0 bg-gray-50 min-h-screen ">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Transactions</h1>

                {/* Total Amount Card */}
                <div className="mb-6 p-4 bg-white rounded-xl shadow-md flex justify-between items-center">
                    <span className="text-gray-600 font-medium text-lg">Total Transactions Amount:</span>
                    <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
                </div>
                <span className="text-gray-600 text-sm">Total Records: {count}</span>
                {/* Table Container */}
                <div className="overflow-x-auto bg-white rounded-xl shadow-md">
                    <table className="table-auto w-full min-w-max divide-y divide-gray-200">
                        <thead className="bg-gray-100 sticky top-0 z-10">
                            <tr>
                                {['ID', 'Amount', 'Currency', 'Stripe Payment ID', 'User Email', 'Created At'].map((header) => (
                                    <th
                                        key={header}
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {transactions.map((tx) => (
                                <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">{tx.id}</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800">${parseFloat(tx.amount).toFixed(2)}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${currencyColor(tx.currency)}`}>
                                            {tx.currency.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-600">{tx.stripe_payment_id}</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800">{tx.user_email}</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{new Date(tx.created_at).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-6">
                    <button
                        onClick={() => setCurrentUrl(previous)}
                        disabled={!previous}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${previous ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    >
                        Previous
                    </button>

                    <button
                        onClick={() => setCurrentUrl(next)}
                        disabled={!next}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${next ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
