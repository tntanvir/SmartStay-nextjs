'use client';

import { useUser } from '@/context/UserContext';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
    FaHome,
    FaUser,
    FaCog,
    FaSignOutAlt,
    FaHotel,
    FaChartBar,
    FaBed,
    FaTools,
    FaUsers,
    FaClipboardList,
    FaHeart,
} from 'react-icons/fa';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import { MdOutlineAddHomeWork } from 'react-icons/md';

const getCurrentUserRole = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user?.role;
};

const DeshboardSidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(true);
    const [role, setRole] = useState(null);
    const { user, logout } = useUser();

    // Always call hooks at top level
    useEffect(() => {
        if (user) {
            setRole(user?.role);
        } else {
            const userRole = getCurrentUserRole();
            setRole(userRole);
        }
    }, [user]);

    // Early return for checkout page after all hooks
    if (pathname.includes('/deshboard/checkout')) {
        return null;
    }

    const userLinks = [
        { name: 'Home', href: '/', icon: <FaHome /> },
        { name: 'Analytics', href: '/deshboard/analytics', icon: <FaChartBar /> },
        { name: 'My Bookings', href: '/deshboard/mybookings', icon: <FaClipboardList /> },
        { name: 'Favorites', href: '/deshboard/favorites', icon: <FaHeart /> },
        { name: 'Profile', href: '/deshboard/profile', icon: <FaUser /> },
        { name: 'Settings', href: '/deshboard/settings', icon: <FaCog /> },
    ];

    const ownerLinks = [
        { name: 'Home', href: '/', icon: <FaHome /> },
        { name: 'Analytics', href: '/deshboard/analytics', icon: <FaChartBar /> },
        { name: 'Rooms', href: '/deshboard/rooms', icon: <FaBed /> },
        { name: 'Add Room', href: '/deshboard/rooms/add', icon: <MdOutlineAddHomeWork /> },
        { name: 'Bookings', href: '/deshboard/room-bookings', icon: <FaClipboardList /> },
        { name: 'Settings', href: '/deshboard/settings', icon: <FaCog /> },
        { name: 'Profile', href: '/deshboard/profile', icon: <FaUser /> },
    ];

    const adminLinks = [
        { name: 'Home', href: '/', icon: <FaHome /> },
        { name: 'Analytics', href: '/deshboard/analytics', icon: <FaChartBar /> },
        { name: 'Manage Users', href: '/deshboard/users', icon: <FaUsers /> },
        { name: 'Transactions', href: '/deshboard/transactions', icon: <FaMoneyCheckDollar /> },
        { name: 'Bookings', href: '/deshboard/bookings', icon: <FaClipboardList /> },
        { name: 'Profile', href: '/deshboard/profile', icon: <FaUser /> },
        { name: 'System Settings', href: '/deshboard/system', icon: <FaTools /> },
    ];

    const getLinksForRole = () => {
        if (role === 'admin') return adminLinks;
        if (role === 'hotel owner') return ownerLinks;
        return userLinks;
    };

    const navLinks = getLinksForRole();

    return (
        <aside
            className={`bg-white shadow-md min-h-screen p-5 flex flex-col transition-all duration-300 ${isOpen ? 'min-w-64' : 'max-w-20'
                }`}
        >
            <div className="flex items-center justify-between mb-10">
                {isOpen ? (
                    <h2
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-2xl cursor-pointer font-bold text-purple-600"
                    >
                        Dashboard
                    </h2>
                ) : (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-2xl text-purple-600 cursor-pointer font-bold w-full"
                    >
                        D
                    </button>
                )}
            </div>

            <nav className="space-y-4 flex-1">
                {role === null ? (
                    // Skeleton loader while role is null
                    Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 animate-pulse"
                            >
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                {isOpen && <div className="h-4 w-32 bg-gray-300 rounded"></div>}
                            </div>
                        ))
                ) : (
                    navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-3 p-3 rounded-lg transition hover:bg-purple-100 ${pathname === link.href
                                ? 'bg-purple-100 text-purple-700 font-medium'
                                : 'text-gray-700'
                                }`}
                        >
                            <span className="text-lg">{link.icon}</span>
                            {isOpen && <span>{link.name}</span>}
                        </Link>
                    ))
                )}
            </nav>

            <div className="mt-auto">
                <button
                    onClick={logout}
                    className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-purple-100 text-purple-500 hover:text-purple-600 cursor-pointer w-full"
                >
                    <FaSignOutAlt />
                    {isOpen && <span>Logout</span>}
                </button>
            </div>
        </aside>
    );
};

export default DeshboardSidebar;
