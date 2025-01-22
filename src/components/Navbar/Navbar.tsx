import React from 'react';
import { Icons } from '../Icons';
import Link from 'next/link';


export default function Navbar() {
    return (
        <nav className="w-screen py-4 fixed top-0 place-content-center z-50 text-white mix-blend-difference gradient-mask">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-row justify-between">
                {/* Logo */}
                <Link aria-label='Go to Home' href='/' className="w-16 place-content-center">
                    <Icons.Haz />
                </Link>

                {/* Nav Links */}
                <Link aria-label='Go to About page' href='/about' className="flex flex-row gap-6 items-center ">
                    <p className="text-xl">About</p>
                </Link>
            </div>
        </nav>
    );
}
