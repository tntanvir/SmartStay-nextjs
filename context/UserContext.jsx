"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Slide, toast } from 'react-toastify';
import Cookies from 'js-cookie';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (loginData) => {
        fetch('https://smartstay-api-production.up.railway.app/auth/singin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
            .then(res => res.json())
            .then(data => {
                setUser(data?.user);
                if (data.access) {
                    sessionStorage.setItem('access', data?.access);
                    sessionStorage.setItem('refresh', data?.refresh);
                    sessionStorage.setItem('user', JSON.stringify(data?.user));
                    Cookies.set('access', data.access, { path: '/', secure: true, sameSite: 'lax' });
                    Cookies.set('refresh', data.refresh, { path: '/', secure: true, sameSite: 'lax' });
                    toast.success('Log In successfully!', {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Slide,
                    });
                    router.push('/deshboard/analytics');
                } else {
                    toast.error("An error occurred while logging in.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error("An error occurred while logging in.");
            });
    };

    const logout = () => {
        const refreshToken = sessionStorage.getItem('refresh');
        const accessToken = sessionStorage.getItem('access');

        if (!refreshToken) {
            console.error("No refresh token found");
            return;
        }

        try {
            fetch('https://smartstay-api-production.up.railway.app/auth/singout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ token: refreshToken }),
            })
                .then(res => res.json())
                .then(data => {
                    setUser(null);
                    sessionStorage.removeItem('access');
                    sessionStorage.removeItem('refresh');
                    sessionStorage.removeItem('user');
                    Cookies.remove('access', { path: '/' });
                    Cookies.remove('refresh', { path: '/' });
                    toast.success('Logged out successfully!', {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Slide,
                    });
                    router.push('/signin');
                });
        } catch {
            sessionStorage.removeItem('access');
            sessionStorage.removeItem('refresh');
            sessionStorage.removeItem('user');
            Cookies.remove('access', { path: '/' });
            Cookies.remove('refresh', { path: '/' });
            toast.error("Error during logout.");
            router.push('/signin');
        }
    };


    // const refreshToken = async () => {
    //     const refresh = sessionStorage.getItem("refresh");

    //     if (!refresh) {
    //         return;
    //     }

    //     try {
    //         const res = await fetch(`https://smartstay-api-production.up.railway.app/auth/refresh`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ refresh }),
    //         });

    //         const data = await res.json();

    //         // ✅ Check if both access and refresh tokens are returned
    //         if (data.access && data.refresh) {
    //             sessionStorage.setItem("access", data.access);
    //             sessionStorage.setItem("refresh", data.refresh);
    //             console.log("✅ Access and refresh token updated");
    //         } else if (data.access) {
    //             sessionStorage.setItem("access", data.access);
    //             console.log("✅ Access token refreshed (no new refresh token)");
    //         } else {
    //             console.warn("⚠️ Failed to get new access token", data);
    //         }

    //     } catch (err) {
    //         console.error("❌ Token refresh failed:", err);
    //     }
    // };


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (sessionStorage.getItem("refresh")) {
    //             console.log("⏳ Refreshing token...");
    //             refreshToken();
    //         }
    //     }, 1 * 60 * 1000); // Every 5 minutes

    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        if (!user && sessionStorage.getItem("access")) {
            fetch(`https://smartstay-api-production.up.railway.app/auth/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem("access")}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setUser(data);
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
        }

    }, [])

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
