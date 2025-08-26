"use client"

import { useState } from "react"
import { Bounce, toast } from "react-toastify"

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


    const handleCheck = () => {
        if (!startDate || !endDate) {
            toast.warning('Please select both start and end dates.', {
                position: "top-left",
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
        const formattedDates = {
            start_date: formatDate(startDate),
            end_date: formatDate(endDate),
        }

        console.log("Booking Data:", formattedDates)
        // alert(`Booking from ${formattedDates.start_date} to ${formattedDates.end_date}`)
        const url = `https://smartstay-api-production.up.railway.app/room/rooms/${id}/check-availability/?start_date=${formattedDates.start_date}&end_date=${formattedDates.end_date}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setBooking(data?.available)
                if (data?.available) {
                    toast.success('Room Available this Date', {
                        position: "top-left",
                        autoClose: 3999,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                }
                else {
                    toast.error(`Room Not available this ${data?.conflict?.start} to ${data?.conflict?.end} Date`, {
                        position: "top-left",
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

            })
    }


    const handleBook = () => {
        const accessToken = sessionStorage.getItem('access');
        if (!startDate || !endDate) {
            toast.warning('Please select both start and end dates.', {
                position: "top-left",
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
        const formattedDatesn = {
            start_date: formatDatenext(startDate),
            end_date: formatDatenext(endDate),
            room: id

        }
        console.log(JSON.stringify(formattedDatesn))

        fetch(`https://smartstay-api-production.up.railway.app/booking/booking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(formattedDatesn),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.room) {
                    toast.success('Booking Successful!', {
                        position: "top-left",
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
                else {
                    toast.error(`${data?.error}`, {
                        position: "top-left",
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
            })
    }

    return (
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center border-t pt-10 gap-8 px-4 sm:px-10">
            <div className="flex gap-6 justify-center items-center bg-white shadow-md rounded-2xl p-6 w-full">
                {/* Start Date Input */}
                <div className="flex items-center justify-center gap-2">
                    <label htmlFor="startDate" className="mb-2 text-sm font-medium text-gray-700">
                        Start Date
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* End Date Input */}
                <div className="flex items-center justify-center gap-2">
                    <label htmlFor="endDate" className="mb-2 text-sm font-medium text-gray-700">
                        End Date
                    </label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                {is_booking ?
                    <button
                        onClick={handleBook}
                        className="mt-6 md:mt-0 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        Book Now
                    </button>
                    : <button
                        onClick={handleCheck}
                        className="mt-6 md:mt-0 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        Check Now
                    </button>}
            </div>


        </div>
    )
}
