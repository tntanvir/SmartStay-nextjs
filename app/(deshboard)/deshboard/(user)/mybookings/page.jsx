'use client';

import React, { useEffect, useState } from 'react';
import MyBookingList from './mybookinglist';

const page = () => {


    const [data, setData] = useState([]);
    const [urls, setUrls] = useState('https://smartstay-api.up.railway.app/booking/booking')
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);

    useEffect(() => {
        fetch(`${urls}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('access')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                setData(data?.results?.bookings);
                setNext(data?.next);
                setPrevious(data?.previous);
            })

    }, [])

    return (
        <div>
            <h1 className='text-3xl font-bold text-purple-600 mb-6 text-start'>My Bookings Management</h1>
            <MyBookingList
                data={data}
                setUrls={setUrls}
                next={next}
                previous={previous}

            />
        </div>
    );
};

export default page;