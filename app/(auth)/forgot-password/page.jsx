import React from 'react';
import ChangePasswordForm from '@/app/Components/ChangePasswordForm';


const page = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-3xl">
                <ChangePasswordForm />
            </div>
        </div>
    );
};

export default page;