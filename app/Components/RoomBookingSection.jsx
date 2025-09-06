// "use client"

// import { useState } from "react"
// import { Bounce, toast } from "react-toastify"

// function formatDate(dateString) {
//     if (!dateString) return ""
//     const [year, month, day] = dateString.split("-")
//     return `${day}-${month}-${year.slice(2)}`
// }
// function formatDatenext(dateString) {
//     if (!dateString) return ""
//     const [year, month, day] = dateString.split("-")
//     return `${day}-${month}-${year}`
// }

// export default function RoomBookingSection({ id }) {
//     const [startDate, setStartDate] = useState("")
//     const [endDate, setEndDate] = useState("")
//     const [is_booking, setBooking] = useState(false)


//     const handleCheck = () => {
//         if (!startDate || !endDate) {
//             toast.warning('Please select both start and end dates.', {
//                 position: "top-left",
//                 autoClose: 3999,
//                 hideProgressBar: false,
//                 closeOnClick: false,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//                 transition: Bounce,
//             });
//             return
//         }
//         const formattedDates = {
//             start_date: formatDate(startDate),
//             end_date: formatDate(endDate),
//         }

//         console.log("Booking Data:", formattedDates)
//         // alert(`Booking from ${formattedDates.start_date} to ${formattedDates.end_date}`)
//         const url = `https://smartstay-api-production.up.railway.app/room/rooms/${id}/check-availability/?start_date=${formattedDates.start_date}&end_date=${formattedDates.end_date}`
//         console.log(url)
//         fetch(url)
//             .then(res => res.json())
//             .then(data => {

//                 setBooking(data?.available)
//                 if (data?.available) {
//                     toast.success('Room Available this Date', {
//                         position: "top-left",
//                         autoClose: 3999,
//                         hideProgressBar: false,
//                         closeOnClick: false,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "light",
//                         transition: Bounce,
//                     });
//                 }
//                 else {
//                     toast.error(`Room Not available this ${data?.conflict?.start} to ${data?.conflict?.end} Date`, {
//                         position: "top-left",
//                         autoClose: 3999,
//                         hideProgressBar: false,
//                         closeOnClick: false,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "light",
//                         transition: Bounce,
//                     });
//                     setStartDate('')
//                     setEndDate('')
//                 }

//             })
//     }


//     const handleBook = () => {
//         const accessToken = sessionStorage.getItem('access');
//         if (!startDate || !endDate) {
//             toast.warning('Please select both start and end dates.', {
//                 position: "top-left",
//                 autoClose: 3999,
//                 hideProgressBar: false,
//                 closeOnClick: false,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//                 transition: Bounce,
//             });
//             return
//         }
//         const formattedDatesn = {
//             start_date: formatDatenext(startDate),
//             end_date: formatDatenext(endDate),
//             room: id

//         }
//         console.log(JSON.stringify(formattedDatesn))

//         fetch(`https://smartstay-api-production.up.railway.app/booking/booking`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${accessToken}`
//             },
//             body: JSON.stringify(formattedDatesn),
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 if (data?.room) {
//                     toast.success('Booking Successful!', {
//                         position: "top-left",
//                         autoClose: 3999,
//                         hideProgressBar: false,
//                         closeOnClick: false,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "light",
//                         transition: Bounce,
//                     });
//                     setStartDate('')
//                     setEndDate('')
//                     setBooking('')
//                 }
//                 else {
//                     toast.error(`${data?.error}`, {
//                         position: "top-left",
//                         autoClose: 3999,
//                         hideProgressBar: false,
//                         closeOnClick: false,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "light",
//                         transition: Bounce,
//                     });
//                     setStartDate('')
//                     setEndDate('')
//                     setBooking('')
//                 }
//             })
//     }

//     return (
//         <div className="mt-16 flex flex-col md:flex-row justify-between items-center border-t pt-10 gap-8 px-4 sm:px-10">
//             <div className="flex gap-6 justify-center items-center bg-white shadow-md rounded-2xl p-6 w-full">
//                 {/* Start Date Input */}
//                 <div className="flex items-center justify-center gap-2">
//                     <label htmlFor="startDate" className="mb-2 text-sm font-medium text-gray-700">
//                         Start Date
//                     </label>
//                     <input
//                         type="date"
//                         id="startDate"
//                         value={startDate}
//                         onChange={(e) => setStartDate(e.target.value)}
//                         className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     />
//                 </div>

//                 {/* End Date Input */}
//                 <div className="flex items-center justify-center gap-2">
//                     <label htmlFor="endDate" className="mb-2 text-sm font-medium text-gray-700">
//                         End Date
//                     </label>
//                     <input
//                         type="date"
//                         id="endDate"
//                         value={endDate}
//                         onChange={(e) => setEndDate(e.target.value)}
//                         className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     />
//                 </div>
//                 {is_booking ?
//                     <button
//                         onClick={handleBook}
//                         className="mt-6 md:mt-0 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
//                     >
//                         Book Now
//                     </button>
//                     : <button
//                         onClick={handleCheck}
//                         className="mt-6 md:mt-0 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
//                     >
//                         Check Now
//                     </button>}
//             </div>


//         </div>
//     )
// }



"use client"

import { useState } from "react"
import { Bounce, toast } from "react-toastify"
import { FaCalendarAlt, FaClock, FaCheckCircle, FaSpinner, FaStar } from "react-icons/fa"

function formatDate(dateString) {
    if (!dateString) return ""
    const [year, month, day] = dateString.split("-")
    return `${day}-${month}-${year.slice(2)}`
}
function formatDatenext(dateString) {
    if (!dateString) return ""
    const [year, month, day] = dateString.split("-")
    return `${day}-${month}-${year}`
}

export default function RoomBookingSection({ id }) {
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [is_booking, setBooking] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleCheck = async () => {
        if (!startDate || !endDate) {
            toast.warning('Please select both start and end dates.', {
                position: "top-right",
                autoClose: 3999,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return
        }

        setIsLoading(true)

        const formattedDates = {
            start_date: formatDate(startDate),
            end_date: formatDate(endDate),
        }

        console.log("Booking Data:", formattedDates)
        const url = `https://smartstay-api-production.up.railway.app/room/rooms/${id}/check-availability/?start_date=${formattedDates.start_date}&end_date=${formattedDates.end_date}`

        try {
            const res = await fetch(url)
            const data = await res.json()

            setBooking(data?.available)
            if (data?.available) {
                toast.success('🎉 Room Available for these dates!', {
                    position: "top-right",
                    autoClose: 3999,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            } else {
                toast.error(`❌ Room Not available from ${data?.conflict?.start} to ${data?.conflict?.end}`, {
                    position: "top-right",
                    autoClose: 3999,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setStartDate('')
                setEndDate('')
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.', {
                position: "top-right",
                autoClose: 3999,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } finally {
            setIsLoading(false)
        }
    }

    const handleBook = async () => {
        const accessToken = sessionStorage.getItem('access');
        if (!startDate || !endDate) {
            toast.warning('Please select both start and end dates.', {
                position: "top-right",
                autoClose: 3999,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return
        }

        setIsLoading(true)

        const formattedDatesn = {
            start_date: formatDatenext(startDate),
            end_date: formatDatenext(endDate),
            room: id
        }

        try {
            const res = await fetch(`https://smartstay-api-production.up.railway.app/booking/booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(formattedDatesn),
            })
            const data = await res.json()

            if (data?.room) {
                toast.success('🎉 Booking Successful! Welcome to your stay!', {
                    position: "top-right",
                    autoClose: 3999,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setStartDate('')
                setEndDate('')
                setBooking('')
            } else {
                toast.error(`❌ ${data?.error}`, {
                    position: "top-right",
                    autoClose: 3999,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setStartDate('')
                setEndDate('')
                setBooking('')
            }
        } catch (error) {
            toast.error('Booking failed. Please try again.', {
                position: "top-right",
                autoClose: 3999,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } finally {
            setIsLoading(false)
        }
    }

    // Calculate nights between dates
    const calculateNights = () => {
        if (!startDate || !endDate) return 0
        const start = new Date(startDate)
        const end = new Date(endDate)
        const timeDiff = end.getTime() - start.getTime()
        return Math.ceil(timeDiff / (1000 * 3600 * 24))
    }

    const nights = calculateNights()

    return (
        <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-3xl"></div>

            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <FaCalendarAlt className="text-purple-200" />
                                Book Your Stay
                            </h3>
                            <p className="text-purple-100 mt-1">Select your dates and reserve instantly</p>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-purple-100">
                            <FaStar className="text-yellow-300 fill-current" />
                            <span className="font-semibold">4.9 Rating</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-8">
                    {/* Date Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Check-in Date */}
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 text-lg font-semibold text-slate-700">
                                <FaCalendarAlt className="text-purple-500" />
                                Check-in Date
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 bg-slate-50 hover:bg-white"
                                />
                            </div>
                        </div>

                        {/* Check-out Date */}
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 text-lg font-semibold text-slate-700">
                                <FaCalendarAlt className="text-blue-500" />
                                Check-out Date
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    min={startDate || new Date().toISOString().split('T')[0]}
                                    className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-slate-50 hover:bg-white"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Booking Summary */}
                    {startDate && endDate && nights > 0 && (
                        <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-2xl p-6 mb-6 border border-slate-100">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <FaClock className="text-purple-600" />
                                    <span className="font-semibold text-slate-700">Stay Duration</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-purple-600">{nights}</p>
                                    <p className="text-sm text-slate-600">{nights === 1 ? 'night' : 'nights'}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Availability Status */}
                    {is_booking && (
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-green-600 text-xl" />
                                <div>
                                    <p className="font-semibold text-green-800">Great news! This room is available</p>
                                    <p className="text-green-600 text-sm">Ready to complete your booking</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {is_booking ? (
                            <button
                                onClick={handleBook}
                                disabled={isLoading}
                                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isLoading ? (
                                    <>
                                        <FaSpinner className="animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <FaCheckCircle />
                                        Complete Booking
                                    </>
                                )}
                            </button>
                        ) : (
                            <button
                                onClick={handleCheck}
                                disabled={isLoading || !startDate || !endDate}
                                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isLoading ? (
                                    <>
                                        <FaSpinner className="animate-spin" />
                                        Checking...
                                    </>
                                ) : (
                                    <>
                                        <FaCalendarAlt />
                                        Check Availability
                                    </>
                                )}
                            </button>
                        )}
                    </div>

                    {/* Help Text */}
                    <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-sm text-slate-600 text-center flex items-center justify-center gap-2">
                            <FaClock className="text-slate-400" />
                            Free cancellation up to 24 hours before check-in
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}