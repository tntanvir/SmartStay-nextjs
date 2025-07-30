"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useState, useContext, useEffect } from 'react';
const UserContext = createContext();


export const useUser = () => useContext(UserContext);
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter()
    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (loginData) => {
        fetch('http://127.0.0.1:8000/auth/singin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
            .then(res => res.json())
            .then(data => {
                setUser(data?.user)
                sessionStorage.setItem('access', data?.access)
                sessionStorage.setItem('refresh', data?.refresh)
                sessionStorage.setItem('user', JSON.stringify(data?.user));
                router.push('/')

            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while logging in.");
            });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};


