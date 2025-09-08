


'use client'
import { useState, useEffect } from "react";
import SideBer from "../Components/SideBer";
import Drawer from 'react-modern-drawer'
import { CgMenuLeftAlt } from "react-icons/cg";
//import styles 👇
import 'react-modern-drawer/dist/index.css'

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false) // Add mounted state

    useEffect(() => {
        setMounted(true) // Only render after client mounts
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
            <div className="flex bg-slate-50 min-h-screen">
                {/* Mobile Drawer */}
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction="left"
                    className="bg-white shadow-lg !w-fit"
                >
                    <SideBer toggleDrawer={toggleDrawer} />
                </Drawer>

                {/* Desktop Sidebar */}
                <div className="hidden md:flex">
                    <SideBer toggleDrawer={toggleDrawer} />
                </div>

                {/* Main Content */}
                <main className="flex-1 p-6 bg-gray-50 rounded-xl overflow-hidden">
                    {children}
                </main>
            </div>
        </>
    )
}
