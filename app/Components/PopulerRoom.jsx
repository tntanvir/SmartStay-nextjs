// import React from 'react';
// import PropertyCard from './PropertyCard';

// const PopulerRoom = () => {
//     return (
//         <div className=''>
//             <h1 className='text-center text-4xl'>Best Properties Sale</h1>
//             <div >
//                 <div className='grid grid-cols-3 justify-center items-center'>
//                     <PropertyCard />
//                     <PropertyCard />
//                     <PropertyCard />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PopulerRoom;

import React from 'react';
import PropertyCard from './PropertyCard';

const PopulerRoom = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-center text-4xl mb-6'>Best Properties Sale</h1>
            <div className='w-full flex justify-center'>
                <div className='grid grid-cols-3 gap-4'>
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                </div>
            </div>
        </div>
    );
};

export default PopulerRoom;
