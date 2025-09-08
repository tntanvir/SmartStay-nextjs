// "use client";

// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";
// import { FiUsers, FiHome, FiClipboard, FiUserPlus, FiClock } from "react-icons/fi";
// import { useUser } from "@/context/UserContext";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const StatsCard = ({ icon: Icon, title, value, color, today }) => (
//     <div className="flex items-center p-6 bg-white shadow-md rounded-xl border border-gray-200 transition hover:shadow-lg">
//         <div
//             className={`p-3 rounded-full mr-4 flex items-center justify-center`}
//             style={{ minWidth: 48, minHeight: 48, backgroundColor: `${color}20`, color: color }}
//         >
//             <Icon className="w-6 h-6" />
//         </div>
//         <div>
//             <p className="text-sm font-medium text-gray-500">{title}</p>
//             <p className="text-2xl font-semibold text-gray-900">{value}</p>
//             <p className="text-sm font-semibold text-gray-900">{today}</p>
//         </div>
//     </div>
// );

// export default function AnalyticsPage() {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [now, setNow] = useState(new Date());
//     const [period, setPeriod] = useState("this_month");
//     const { user } = useUser()

//     useEffect(() => {
//         const timer = setInterval(() => setNow(new Date()), 1000);
//         return () => clearInterval(timer);
//     }, []);

//     useEffect(() => {
//         fetch("https://smartstay-api.up.railway.app/analytics/analytics/", {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${sessionStorage.getItem('access')}`
//             }
//         })
//             .then((res) => {
//                 if (!res.ok) throw new Error("Failed to fetch analytics");
//                 return res.json();
//             })
//             .then((json) => {
//                 setData(json);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError(err.message);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading)
//         return (
//             <div className="flex items-center justify-center min-h-screen bg-gray-100">
//                 <p className="text-gray-600 text-xl">Loading analytics...</p>
//             </div>
//         );
//     if (error)
//         return (
//             <div className="flex items-center justify-center min-h-screen bg-gray-100">
//                 <p className="text-purple-600 text-xl">Error: {error}</p>
//             </div>
//         );

//     const currentPeriodData = data[period] || {};

//     // Make sure booking_statuses always exists
//     const bookingStatuses = currentPeriodData.booking_statuses || {};

//     const bookingStatusLabels = Object.keys(bookingStatuses).map(
//         (key) => key.charAt(0).toUpperCase() + key.slice(1)
//     );
//     const bookingStatusValues = Object.values(bookingStatuses);

//     const bookingStatusChartData = {
//         labels: bookingStatusLabels,
//         datasets: [
//             {
//                 label: "Bookings",
//                 data: bookingStatusValues,
//                 backgroundColor: "rgba(37, 99, 235, 0.7)",
//             },
//         ],
//     };

//     const horizontalBarOptions = {
//         indexAxis: "y",
//         responsive: true,
//         plugins: {
//             legend: { position: "top" },
//             title: { display: false },
//         },
//     };

//     return (
//         <div className="flex min-h-screen bg-gray-50 font-sans">
//             <main className="flex-1 p-8 overflow-auto">
//                 {/* Header */}
//                 <header className="flex justify-between items-center mb-8">
//                     <h1 className="text-4xl font-extrabold text-gray-900">Analytics Overview</h1>
//                     <div className="flex items-center space-x-3 text-gray-600">
//                         <FiClock className="w-6 h-6" />
//                         <time dateTime={now.toISOString()}>
//                             {now.toLocaleDateString(undefined, {
//                                 weekday: "long",
//                                 year: "numeric",
//                                 month: "long",
//                                 day: "numeric",
//                                 hour: "2-digit",
//                                 minute: "2-digit",
//                                 second: "2-digit",
//                             })}
//                         </time>
//                     </div>
//                 </header>

//                 {/* Period Switch Tabs */}
//                 <div className="flex space-x-4 mb-8">
//                     {[
//                         { key: "today", label: "Daily" },
//                         { key: "this_week", label: "Weekly" },
//                         { key: "this_month", label: "Monthly" },
//                         { key: "this_year", label: "Yearly" },
//                     ].map((tab) => (
//                         <button
//                             key={tab.key}
//                             onClick={() => setPeriod(tab.key)}
//                             className={`px-4 py-2 rounded-lg font-medium transition ${period === tab.key
//                                 ? "bg-purple-600 text-white shadow"
//                                 : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
//                                 }`}
//                         >
//                             {tab.label}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Stats Cards */}
//                 <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
//                     {user?.role !== 'user' ? <StatsCard
//                         icon={FiUsers}
//                         title="Total Users"
//                         value={period === "today" || period === "this_week" || period === "this_year"
//                             ? currentPeriodData.new_users || 0
//                             : data.totals.users}
//                         color="#2563eb"
//                     /> : <></>}
//                     <StatsCard
//                         icon={FiHome}
//                         title="Total Rooms"
//                         value={period === "today" || period === "this_week" || period === "this_year"
//                             ? currentPeriodData.new_rooms || 0
//                             : data.totals.rooms}
//                         color="#10b981"
//                     />
//                     <StatsCard
//                         icon={FiClipboard}
//                         title="Total Bookings"
//                         value={period === "today" || period === "this_week" || period === "this_year"
//                             ? currentPeriodData.new_bookings || 0
//                             : data.totals.bookings}
//                         color="#f59e0b"
//                     />
//                     {user?.role !== 'user' ? <StatsCard
//                         icon={FiUserPlus}
//                         title="New Users"
//                         value={currentPeriodData.new_users || 0}
//                         color="#6366f1"
//                     /> : <></>}
//                 </section>

//                 {/* Booking Status Chart */}
//                 <section className="bg-white rounded-lg shadow p-6 mb-10 border border-gray-200 max-w-4xl mx-auto">
//                     <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
//                         Booking Statuses ({period.replace("_", " ").toUpperCase()})
//                     </h2>
//                     {bookingStatusLabels.length > 0 ? (
//                         <Bar data={bookingStatusChartData} />
//                     ) : (
//                         <p className="text-center text-gray-500">No booking status data available.</p>
//                     )}
//                 </section>

//                 {/* Top Rooms & Users */}
//                 <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//                     {/* Top Rooms */}
//                     <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
//                         <h3 className="text-xl font-semibold mb-6 text-gray-800">Top Booking Rooms</h3>
//                         {data.top_rooms.length > 0 ? (
//                             <Bar
//                                 data={{
//                                     labels: data.top_rooms.map((r) => r.room__title),
//                                     datasets: [
//                                         {
//                                             label: "Bookings",
//                                             data: data.top_rooms.map((r) => r.total_bookings),
//                                             backgroundColor: "rgba(16, 185, 129, 0.8)",
//                                         },
//                                     ],
//                                 }}
//                                 options={horizontalBarOptions}
//                             />
//                         ) : (
//                             <p className="text-gray-600">No data available.</p>
//                         )}
//                     </div>

//                     {/* Top Users */}
//                     <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
//                         <h3 className="text-xl font-semibold mb-6 text-gray-800">Top Users by Bookings</h3>
//                         {data.top_users.length > 0 ? (
//                             <Bar
//                                 data={{
//                                     labels: data.top_users.map((u) => u.user__username),
//                                     datasets: [
//                                         {
//                                             label: "Bookings",
//                                             data: data.top_users.map((u) => u.total_bookings),
//                                             backgroundColor: "rgba(234, 179, 8, 0.8)",
//                                         },
//                                     ],
//                                 }}
//                                 options={horizontalBarOptions}
//                             />
//                         ) : (
//                             <p className="text-gray-600">No data available.</p>
//                         )}
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// }


"use client";

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { FiUsers, FiHome, FiClipboard, FiUserPlus, FiClock } from "react-icons/fi";
import { useUser } from "@/context/UserContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatsCard = ({ icon: Icon, title, value, color, today }) => (
    <div className="flex items-center p-4 md:p-6 bg-white shadow-md rounded-xl border border-gray-200 transition hover:shadow-lg w-full">
        <div
            className={`p-3 rounded-full mr-4 flex items-center justify-center`}
            style={{ minWidth: 48, minHeight: 48, backgroundColor: `${color}20`, color: color }}
        >
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            <p className="text-sm font-semibold text-gray-900">{today}</p>
        </div>
    </div>
);

export default function AnalyticsPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [now, setNow] = useState(new Date());
    const [period, setPeriod] = useState("this_month");
    const { user } = useUser();

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        fetch("https://smartstay-api.up.railway.app/analytics/analytics/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem("access")}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch analytics");
                return res.json();
            })
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading)
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-gray-600 text-xl">Loading analytics...</p>
            </div>
        );
    if (error)
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-purple-600 text-xl">Error: {error}</p>
            </div>
        );

    const currentPeriodData = data[period] || {};
    const bookingStatuses = currentPeriodData.booking_statuses || {};
    const bookingStatusLabels = Object.keys(bookingStatuses).map(
        (key) => key.charAt(0).toUpperCase() + key.slice(1)
    );
    const bookingStatusValues = Object.values(bookingStatuses);

    const bookingStatusChartData = {
        labels: bookingStatusLabels,
        datasets: [
            {
                label: "Bookings",
                data: bookingStatusValues,
                backgroundColor: "rgba(37, 99, 235, 0.7)",
            },
        ],
    };

    const horizontalBarOptions = {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" },
            title: { display: false },
        },
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 font-sans">
            <main className="flex-1 p-4 md:p-8 overflow-auto w-full">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-3 md:space-y-0">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Analytics Overview</h1>
                    <div className="flex items-center space-x-3 text-gray-600 text-sm md:text-base">
                        <FiClock className="w-5 h-5 md:w-6 md:h-6" />
                        <time dateTime={now.toISOString()}>
                            {now.toLocaleDateString(undefined, {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                            })}
                        </time>
                    </div>
                </header>

                {/* Period Switch Tabs */}
                <div className="flex flex-wrap space-x-2 md:space-x-4 mb-8">
                    {[
                        { key: "today", label: "Daily" },
                        { key: "this_week", label: "Weekly" },
                        { key: "this_month", label: "Monthly" },
                        { key: "this_year", label: "Yearly" },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setPeriod(tab.key)}
                            className={`px-3 md:px-4 py-2 rounded-lg font-medium transition ${period === tab.key
                                ? "bg-purple-600 text-white shadow"
                                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Stats Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {user?.role !== "user" && (
                        <StatsCard
                            icon={FiUsers}
                            title="Total Users"
                            value={
                                period === "today" || period === "this_week" || period === "this_year"
                                    ? currentPeriodData.new_users || 0
                                    : data.totals.users
                            }
                            color="#2563eb"
                        />
                    )}
                    <StatsCard
                        icon={FiHome}
                        title="Total Rooms"
                        value={
                            period === "today" || period === "this_week" || period === "this_year"
                                ? currentPeriodData.new_rooms || 0
                                : data.totals.rooms
                        }
                        color="#10b981"
                    />
                    <StatsCard
                        icon={FiClipboard}
                        title="Total Bookings"
                        value={
                            period === "today" || period === "this_week" || period === "this_year"
                                ? currentPeriodData.new_bookings || 0
                                : data.totals.bookings
                        }
                        color="#f59e0b"
                    />
                    {user?.role !== "user" && (
                        <StatsCard
                            icon={FiUserPlus}
                            title="New Users"
                            value={currentPeriodData.new_users || 0}
                            color="#6366f1"
                        />
                    )}
                </section>

                {/* Booking Status Chart */}
                <section className="bg-white rounded-lg shadow p-4 md:p-6 mb-10 border border-gray-200 max-w-full md:max-w-4xl mx-auto h-96 md:h-80">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center text-gray-800">
                        Booking Statuses ({period.replace("_", " ").toUpperCase()})
                    </h2>
                    {bookingStatusLabels.length > 0 ? (
                        <Bar data={bookingStatusChartData} options={horizontalBarOptions} />
                    ) : (
                        <p className="text-center text-gray-500">No booking status data available.</p>
                    )}
                </section>

                {/* Top Rooms & Users */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-full md:max-w-6xl mx-auto">
                    {/* Top Rooms */}
                    <div className="bg-white rounded-lg shadow p-4 md:p-6 border border-gray-200 h-96 md:h-80">
                        <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-gray-800">Top Booking Rooms</h3>
                        {data.top_rooms.length > 0 ? (
                            <Bar
                                data={{
                                    labels: data.top_rooms.map((r) => r.room__title),
                                    datasets: [
                                        {
                                            label: "Bookings",
                                            data: data.top_rooms.map((r) => r.total_bookings),
                                            backgroundColor: "rgba(16, 185, 129, 0.8)",
                                        },
                                    ],
                                }}
                                options={horizontalBarOptions}
                            />
                        ) : (
                            <p className="text-gray-600">No data available.</p>
                        )}
                    </div>

                    {/* Top Users */}
                    <div className="bg-white rounded-lg shadow p-4 md:p-6 border border-gray-200 h-96 md:h-80">
                        <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-gray-800">Top Users by Bookings</h3>
                        {data.top_users.length > 0 ? (
                            <Bar
                                data={{
                                    labels: data.top_users.map((u) => u.user__username),
                                    datasets: [
                                        {
                                            label: "Bookings",
                                            data: data.top_users.map((u) => u.total_bookings),
                                            backgroundColor: "rgba(234, 179, 8, 0.8)",
                                        },
                                    ],
                                }}
                                options={horizontalBarOptions}
                            />
                        ) : (
                            <p className="text-gray-600">No data available.</p>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}
