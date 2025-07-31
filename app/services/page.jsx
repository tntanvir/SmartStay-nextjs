// 'use client'

import React, { Suspense } from 'react';
import Services from '../Components/Services';

const page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Services />
        </Suspense>
    );
};

export const dynamic = "force-dynamic";

export default page;