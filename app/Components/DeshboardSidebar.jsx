'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const DeshboardSidebar = ({ isOpen, setIsOpen }) => {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/deshboard', icon: <FaHome /> },
        { name: 'Profile', href: '/deshboard/profile', icon: <FaUser /> },
        { name: 'Settings', href: '/deshboard/settings', icon: <FaCog /> },
    ];

    return (
        <aside
            className={`bg-white shadow-md h-screen p-5 flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'
                }`}
        >
            <div className="flex items-center justify-between mb-10">
                {
                    isOpen ? <h2 onClick={() => setIsOpen(!isOpen)}
                        className={`text-3xl cursor-pointer font-bold text-purple-600 transition-opacity duration-200 `}

                    >
                        deshboard
                    </h2>

                        : <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`text-3xl cursor-pointer font-bold text-purple-600 transition-opacity duration-200 w-full`}
                        >
                            D
                        </button>
                }
            </div>

            <nav className="space-y-4 flex-1">
                {navLinks.map((link) => (
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
                ))}
            </nav>

            <div className="mt-auto">
                <Link
                    href="/auth/signin"
                    className="flex items-center gap-3 text-red-500 hover:text-red-600"
                >
                    <FaSignOutAlt />
                    {isOpen && <span>Logout</span>}
                </Link>
            </div>
        </aside>
    );
};

export default DeshboardSidebar;
