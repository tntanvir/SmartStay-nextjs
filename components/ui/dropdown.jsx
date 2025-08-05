"use client";
import { useUser } from '@/context/UserContext';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

// --- UPDATED SVG ICONS TO MATCH THE NEW IMAGE ---
const User = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);

const Community = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);

const Subscription = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
);

const Settings = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" /><path d="M4 6h8" /><path d="M16 6h4" /><path d="M10 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" /><path d="M4 18h4" /><path d="M12 18h8" /><path d="M10 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" /><path d="M4 12h4" /><path d="M12 12h8" /></svg>
);

const HelpCenter = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" x2="12.01" y1="17" y2="17" /></svg>
);

const SignOut = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
);

const DropdownMenu = ({
    children,
    trigger
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleTriggerClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    }

    return (
        (<div className="relative inline-block text-left" ref={dropdownRef}>
            <div onClick={handleTriggerClick} className="cursor-pointer">
                {trigger}
            </div>
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-64 rounded-2xl shadow-xl bg-white dark:bg-zinc-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-in fade-in-0 zoom-in-95 p-2"
                    role="menu"
                    aria-orientation="vertical">
                    {children}
                </div>
            )}
        </div>)
    );
};

const DropdownMenuItem = ({
    children,
    onClick,
    active = false
}) => (
    <div

        onClick={(e) => {
            e.preventDefault();
            if (onClick) onClick();
        }}
        className={`
            text-zinc-800 dark:text-zinc-200 font-medium group flex items-center 
            px-3 py-2.5 text-sm rounded-lg transition-colors duration-150
            ${active
                ? 'bg-zinc-100 dark:bg-zinc-800'
                : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }
        `}
        role="menuitem"
    >
        {children}
    </div>
);

const DropdownMenuSeparator = () => (
    <div className="my-2 h-px bg-zinc-200 dark:bg-zinc-700" />
);

// --- Main App Component ---

export default function Dropdown({ user }) {

    const { logout } = useUser()

    const singout = () => {
        logout()
    }

    return (
        (<div className=" flex items-center justify-center font-sans ">
            <DropdownMenu
                trigger={

                    <img
                        src={user?.profile}
                        alt={user?.title}
                        width={500}
                        height={900}
                        className="w-full h-12 object-cover rounded-3xl"
                    />
                }>
                {console.log(user?.profile)}
                <div className="flex flex-col space-y-1">
                    <DropdownMenuItem active={true} >
                        <Link href='/deshboard' className='flex w-full'>
                            <User className="mr-3 h-5 w-5 text-zinc-500" />
                            <span >Profile</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log('Community clicked')}>
                        <Community className="mr-3 h-5 w-5 text-zinc-500" />
                        <span>Community</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log('Subscription clicked')}>
                        <Subscription className="mr-3 h-5 w-5 text-zinc-500" />
                        <span>Subscription</span>
                        <span
                            className="ml-auto text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-2 py-0.5">PRO</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                        <Link href='/forgot-password' className='flex'>
                            <Settings className="mr-3 h-5 w-5 text-zinc-500" />
                            <span>Change Password</span>
                        </Link>
                    </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <div className="flex flex-col space-y-1">
                    <DropdownMenuItem onClick={() => console.log('Help Center clicked')}>
                        <HelpCenter className="mr-3 h-5 w-5 text-zinc-500" />
                        <span>Help center</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => singout()}>
                        <SignOut className="mr-3 h-5 w-5 text-zinc-500" />
                        <span>Sign out</span>
                    </DropdownMenuItem>
                </div>
            </DropdownMenu>
        </div>)
    );
}
