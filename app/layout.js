import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "./Components/Navber";
import Footer from "./Components/Footer";
import { UserProvider } from '@/context/UserContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <Navber />
          <ToastContainer />
          {children}
        </UserProvider>
        <Footer />
      </body>
    </html>
  );
}
