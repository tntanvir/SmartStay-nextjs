'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiUser, FiHome, FiInfo, FiGrid, FiMail } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import { useUser } from '@/context/UserContext'
import Dropdown from '@/components/ui/dropdown'
import PopOver from '@/components/comp-384'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { user } = useUser()
    const toggleMenu = () => setIsOpen(!isOpen)
    const router = usePathname()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
            setScrolled(isScrolled)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isSignInOrSignUp = router === '/signin' || router === '/signup' || router === '/otp-varify' || router === '/reset-otp' || router === '/forgot-password' || router.startsWith('/deshboard')

    if (isSignInOrSignUp) {
        return null
    }

    const links = [
        { href: '/', label: 'Home', icon: FiHome },
        { href: '/about', label: 'About', icon: FiInfo },
        { href: '/services', label: 'Services', icon: FiGrid },
        { href: '/contact', label: 'Contact', icon: FiMail },
    ]

    return (
        <nav className={`bg-white bg-opacity-30 backdrop-blur-lg shadow-lg  w-full sticky top-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'backdrop-blur-xl bg-opacity-50 shadow-xl' : ''}`}>
            {/* Decorative top border */}
            {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-purple-500 to-indigo-500"></div> */}

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between py-4">
                    {/* Enhanced Logo */}
                    <Link href="/" className="group flex items-center space-x-2">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-purple-700 transition-all duration-300">
                            SmartStay
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {/* Navigation Links */}
                        <div className="flex items-center space-x-1">
                            {links.map((link) => {
                                const isActive = router === link.href
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`group relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${isActive
                                            ? 'text-purple-600 bg-purple-50 shadow-md'
                                            : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50/70'
                                            }`}
                                    >
                                        <link.icon className="w-4 h-4" />
                                        <span>{link.label}</span>
                                        {isActive && (
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-purple-500 rounded-full"></div>
                                        )}
                                    </Link>
                                )
                            })}
                        </div>

                        {/* User Section */}
                        <div className="flex items-center gap-4">
                            {user ? (
                                <div className="flex items-center gap-3">
                                    <div className="hidden md:flex flex-col text-right">
                                        <span className="text-sm font-semibold text-slate-700">Welcome back!</span>
                                        <span className="text-xs text-slate-500">{user?.name || user?.email}</span>
                                    </div>
                                    {/* <Dropdown user={user} /> */}
                                    <PopOver user={user} />
                                </div>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <Link
                                        href="/signin"
                                        className="px-4 py-2 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/signup"
                                        className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                                    >
                                        <FiUser className="w-4 h-4" />
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all duration-300 transform hover:scale-105"
                        >
                            {isOpen ?
                                <FiX className="w-6 h-6 text-slate-700" /> :
                                <FiMenu className="w-6 h-6 text-slate-700" />
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-y-scroll w-full transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="bg-white/60 backdrop-blur-md rounded-2xl mx-2 mb-4  border border-white/50 shadow-none">
                        <div className="p-2 space-y-4">
                            {/* Mobile Navigation Links */}
                            {links.map((link, index) => {
                                const isActive = router === link.href
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-3 p-3 rounded-xl font-semibold transition-all duration-300 ${isActive
                                            ? 'text-purple-600 bg-purple-50 shadow-md transform translate-x-2'
                                            : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50/70 hover:translate-x-1'
                                            }`}
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                            animation: isOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                                        }}
                                    >
                                        <link.icon className="w-5 h-5" />
                                        <span>{link.label}</span>
                                    </Link>
                                )
                            })}

                            {/* Mobile User Section */}
                            <div className="pt-4 border-t border-slate-200">
                                {user ? (
                                    <div className="flex items-center gap-3 p-3">
                                        <div className="flex-1">
                                            <div className="text-sm font-semibold text-slate-700">Welcome back!</div>
                                            <div className="text-xs text-slate-500">{user?.name || user?.email}</div>
                                        </div>
                                        <PopOver user={user} />
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <Link
                                            href="/signin"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-center gap-2 p-3 text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all duration-300"
                                        >
                                            Sign In
                                        </Link>
                                        <Link
                                            href="/signup"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-purple-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <FiUser className="w-4 h-4" />
                                            Get Started
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </nav>
    )
}