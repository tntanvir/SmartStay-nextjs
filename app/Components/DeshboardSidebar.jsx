'use client';

import { useUser } from '@/context/UserContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

const getCurrentUserRole = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user?.role;
};

const DeshboardSidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(true);
    const [role, setRole] = useState(null);

    const { user, logout } = useUser();

    useEffect(() => {
        if (user) {
            setRole(user?.role);
        } else {
            const userRole = getCurrentUserRole();
            setRole(userRole);
        }
    }, []);

    const userLinks = [
        { name: 'Home', href: '/deshboard', icon: <FaHome /> },
        { name: 'My Bookings', href: '/deshboard/mybookings', icon: <FaClipboardList /> },
        { name: 'Favorites', href: '/deshboard/favorites', icon: <FaHeart /> },
        { name: 'Profile', href: '/deshboard/profile', icon: <FaUser /> },
        { name: 'Settings', href: '/deshboard/settings', icon: <FaCog /> },
    ];

    const ownerLinks = [
        { name: 'Home', href: '/deshboard', icon: <FaHome /> },
        // { name: 'My Hotels', href: '/deshboard/hotels', icon: <FaHotel /> },
        { name: 'Rooms', href: '/deshboard/rooms', icon: <FaBed /> },
        { name: 'Bookings', href: '/deshboard/room-bookings', icon: <FaClipboardList /> },
        { name: 'Analytics', href: '/deshboard/analytics', icon: <FaChartBar /> },
        { name: 'Settings', href: '/deshboard/settings', icon: <FaCog /> },
    ];

    const adminLinks = [
        { name: 'Dashboard', href: '/deshboard', icon: <FaHome /> },
        { name: 'Manage Users', href: '/deshboard/users', icon: <FaUsers /> },
        { name: 'Manage Hotels', href: '/deshboard/hotels', icon: <FaHotel /> },
        { name: 'Bookings', href: '/deshboard/bookings', icon: <FaClipboardList /> },
        { name: 'System Settings', href: '/deshboard/system', icon: <FaTools /> },
        { name: 'Analytics', href: '/deshboard/analytics', icon: <FaChartBar /> },
    ];

    const getLinksForRole = () => {
        if (role === 'admin') return adminLinks;
        if (role === 'hotel owner') return ownerLinks;
        return userLinks;
    };

    const navLinks = getLinksForRole();

    return (
        <aside
            className={`bg-white shadow-md min-h-screen p-5 flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'
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
                        className="text-2xl text-purple-600"
                    >
                        D
                    </button>
                )}
            </div>

            <nav className="space-y-4 flex-1">
                {role === null ? (
                    // Skeleton loader
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
                    className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-red-100 text-red-500 hover:text-red-600 cursor-pointer w-full"
                >
                    <FaSignOutAlt />
                    {isOpen && <span>Logout</span>}
                </button>
            </div>
        </aside>
    );
};

export default DeshboardSidebar;
