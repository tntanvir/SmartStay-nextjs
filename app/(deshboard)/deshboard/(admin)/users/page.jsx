import React from 'react';
import AllUser from '@/app/Components/admin_deshboard/AllUser';

const page = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">All Users Overview</h2>
            <AllUser />
        </div>
    );
};

export default page;