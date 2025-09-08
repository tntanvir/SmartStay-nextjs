
'use client'
import { useEffect, useState } from 'react';
import DeshboardSidebar from '@/app/Components/DeshboardSidebar';
import Drawer from 'react-modern-drawer'
import { CgMenuLeftAlt } from "react-icons/cg";
import 'react-modern-drawer/dist/index.css'



export default function deshboardLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    if (!mounted) return null;

    return (
        <>
            <div className="md:hidden bg-slate-50 p-4">
                <CgMenuLeftAlt className="text-2xl cursor-pointer" onClick={toggleDrawer} />
            </div>
            <div className="flex">
                {/* <DeshboardSidebar /> */}
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction="left"
                    className="bg-white shadow-lg !w-fit"
                >
                    <DeshboardSidebar toggleDrawer={toggleDrawer} />
                </Drawer>

                {/* Desktop Sidebar */}
                <div className="hidden md:flex">
                    <DeshboardSidebar toggleDrawer={toggleDrawer} />
                </div>
                <main
                    className={`transition-all duration-300 w-full px-2 py-6 bg-gray-50 min-h-screen `}
                >
                    {children}
                </main>
            </div>
        </>
    );
}
