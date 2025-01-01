"use client"
import React, { useEffect, useState } from 'react'

type Props = {
    titles: Array<string>
}

export default function TableOfContent({ titles }: Props) {

    const [isOpen, setIsOpen] = useState(false)
    const toggleTOC = () => setIsOpen(!isOpen)

    const [activeTitle, setActiveTitle] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentActive = null;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    currentActive = section.id;
                }
            });

            setActiveTitle(currentActive);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0  bg-slate-800/25 z-30"
                    onClick={toggleTOC}
                    aria-hidden="true"
                ></div>
            )}
            {/* Modal */}
            <div
                className={`backdrop-blur-xl shadow-xl fixed inset-y-0 right-0 w-80 max-w-full transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-40 flex items-center`}
            >
                <div className=" px-4 py-8 flex flex-col gap-2 w-full">
                    {titles.map((title, index) => (
                        <a
                            href={`#${title}`}
                            key={index}
                            className={` ml-2 text-gray-300 transition-transform transform 
         ${activeTitle === title ? "scale-105 text-white font-semibold" : ""
                                }
                                hover:scale-105 hover:text-white`}
                        >
                            {title}
                        </a>
                    ))}
                </div>
            </div>

            {/* Button */}
            <button onClick={toggleTOC} className='rounded-full backdrop-blur-lg bg-kopken-primary-500/50 p-3 fixed bottom-6 right-6 z-50 w-["88px"] h-["88px"] bg-kopken-primary-500'>
                {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>}
            </button>
        </ div>
    )
}