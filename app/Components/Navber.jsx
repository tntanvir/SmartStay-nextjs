'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import { useUser } from '@/context/UserContext'
import Dropdown from '@/components/ui/dropdown'

export default function Navber() {
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useUser()
    const toggleMenu = () => setIsOpen(!isOpen)
    const router = usePathname()

    const isSignInOrSignUp = router === '/signin' || router === '/signup' || router === '/otp-varify' || router === '/reset-otp' || router === '/forgot-password' || router.startsWith('/deshboard')
    // console.log(router)

    if (isSignInOrSignUp) {
        return null
    }

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
    ]


    return (
        <nav className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg  w-full sticky top-0 z-50 transition-all duration-500 ease-in-out">
            <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-3xl font-bold text-black hover:text-gray-200 transition duration-300 ease-in-out">
                    SmartStay
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10 justify-center items-center">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-black hover:text-yellow-400 font-semibold transition duration-300 ease-in-out"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {user ?

                        <div className="w-full">

                            <Dropdown user={user} />
                            {console.log(user?.profile)}

                        </div>

                        :
                        <Link
                            href="/signin"
                            className="text-black bg-yellow-500 hover:bg-yellow-600 py-2 px-6 rounded-md font-medium transition duration-300 ease-in-out"
                        >
                            Singin
                        </Link>
                    }
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-3xl text-black">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Animation */}
            <div
                className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
            >
                <div className="bg-white bg-opacity-30 backdrop-blur-lg px-4 pb-6 space-y-5">
                    {links.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block text-black hover:text-yellow-400 font-medium transition duration-300 ease-in-out transform ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity delay-${index * 100}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Login Button for Mobile */}
                    <Link
                        href="/signin"
                        className="block text-black bg-yellow-500 hover:bg-yellow-600 py-2 px-6 rounded-md font-medium transition duration-300 ease-in-out"
                        onClick={() => setIsOpen(false)}
                    >
                        Signin
                    </Link>
                </div>
            </div>
        </nav>
    )
}



