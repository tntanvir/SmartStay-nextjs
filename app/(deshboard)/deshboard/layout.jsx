'use client';


import DeshboardSidebar from '@/app/Components/DeshboardSidebar';
import { useState } from 'react';


export default function deshboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex">
            <DeshboardSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <main
                className={`transition-all duration-300 w-full p-6 bg-gray-50 min-h-screen ${isSidebarOpen ? 'ml-0 ' : 'ml-0'
                    }`}
            >
                {children}
            </main>
        </div>
    );
}
