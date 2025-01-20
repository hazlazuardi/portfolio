import React from 'react';
import { Icons } from '../Icons';
import Link from 'next/link';


export default function Navbar() {
    return (
        <nav className="w-screen py-4 fixed top-0 place-content-center z-10 text-white mix-blend-difference gradient-mask">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-row justify-between">
                {/* Logo */}
                <Link href='/' className="w-16 place-content-center">
                    <Icons.Haz />
                </Link>

                {/* Nav Links */}
                <Link href='/about' className="flex flex-row gap-6 items-center ">
                    <p className="text-xl">About</p>
                </Link>
            </div>
        </nav>
    );
}
