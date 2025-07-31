



import RoomDetails from '@/app/Components/RoomDetails';
import React from 'react';

const PropertyDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://127.0.0.1:8000/room/rooms/${id}`)
    const data = await res.json()
    console.log(data)


    return (
        <div>
            {/* {id && id} */}
            <RoomDetails data={data} />
        </div>
    );
};

export default PropertyDetails;
