



import RoomDetails from '@/app/Components/RoomDetails';
import React from 'react';

const PropertyDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`https://smartstay-api.up.railway.app/room/rooms/${id}`)
    const data = await res.json()



    return (
        <div>
            {/* {id && id} */}
            {data && <RoomDetails data={data} />}
        </div>
    );
};

export default PropertyDetails;
