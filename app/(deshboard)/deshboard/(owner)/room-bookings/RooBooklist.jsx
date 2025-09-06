import UpdateRoom_Status from "@/components/UpdateRoom_Status";

export default function RooBooklist({ data, setUrls, next, previous }) {
    return (
        <div className="overflow-x-auto w-full bg-white shadow-lg rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr className="text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">
                        <th className="px-6 py-3">Booking</th>
                        <th className="px-3 py-3">Start Date</th>
                        <th className="px-3 py-3">End Date</th>
                        <th className="px-6 py-3">Rate</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Payment</th>
                        <th className="px-4 py-3">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                    {data?.map(
                        ({
                            id,
                            room,
                            start_date,
                            end_date,
                            status,
                            payment_status,
                            user,
                            total_price,
                        }) => (
                            <tr
                                key={id}
                                className="hover:bg-gray-50 transition-colors duration-200"
                            >
                                {/* Combined Room + User column */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-4">
                                        {/* Room Image */}
                                        <img
                                            src={room?.image}
                                            alt="Room"
                                            className="w-20 h-16 rounded-lg object-cover border border-gray-200 shadow-sm"
                                            loading="lazy"
                                        />

                                        {/* Room + User Info */}
                                        <div>
                                            <p className="font-semibold text-gray-900">{room?.title}</p>
                                            <p className="text-xs text-gray-400 select-text">#{id.slice(0, 8)}</p>

                                            <div className="flex items-center gap-2 mt-2">
                                                <img
                                                    src={user?.profile || "/default-user.png"}
                                                    alt="User"
                                                    className="w-8 h-8 rounded-full object-cover border border-gray-300"
                                                />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">
                                                        {user?.name || "Unknown"}
                                                    </p>
                                                    <p className="text-xs text-gray-500 truncate max-w-[150px]">
                                                        {user?.email || ""}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-3 py-4 text-sm text-gray-700 whitespace-nowrap">
                                    {start_date}
                                </td>

                                <td className="px-3 py-4 text-sm text-gray-700 whitespace-nowrap">
                                    {end_date}
                                </td>

                                <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                                    ${total_price}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
                                                ${status === "confirmed"
                                                ? "bg-green-100 text-green-700"
                                                : status === "pending"
                                                    ? "bg-orange-200 text-orange-700"
                                                    : status === "cancelled"
                                                        ? "bg-purple-100 text-purple-700"
                                                        : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {status.charAt(0).toUpperCase() + status.slice(1)}
                                    </span>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${payment_status === "paid"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-purple-100 text-purple-700"
                                            }`}
                                    >
                                        {payment_status.charAt(0).toUpperCase() +
                                            payment_status.slice(1)}
                                    </span>
                                </td>

                                <td className="px-4 py-4 whitespace-nowrap">
                                    <div className="flex gap-3 items-center">
                                        <UpdateRoom_Status id={id} />
                                    </div>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center p-4 bg-gray-50 border-t border-gray-200">
                <button
                    onClick={() => setUrls(previous)}
                    disabled={!previous}
                    className={`px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${!previous && "opacity-50 cursor-not-allowed"
                        }`}
                >
                    Previous
                </button>
                <button
                    onClick={() => setUrls(next)}
                    disabled={!next}
                    className={`px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${!next && "opacity-50 cursor-not-allowed"
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
