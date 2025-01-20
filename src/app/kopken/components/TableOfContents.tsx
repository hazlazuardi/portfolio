"use client";
import { useState, useEffect } from "react";

export default function TableOfContent({ titles }: { titles: Array<string> }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTitle, setActiveTitle] = useState<string | null>(null);
    const [showButton, setShowButton] = useState(false);

    const toggleTOC = () => setIsOpen(!isOpen);

    useEffect(() => {
        const sections = titles.map((title) => document.getElementById(title));

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTitle(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: [0, 0.5, 1],
        });

        sections.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [titles]);

    useEffect(() => {
        if (activeTitle === "Cover" || activeTitle === null) {
            setShowButton(false);
        } else {
            setShowButton(true);
        }
    }, [activeTitle]);

    return (
        <div>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-800/25 z-30"
                    onClick={toggleTOC}
                    aria-hidden="true"
                ></div>
            )}
            {/* Modal */}
            <div
                className={`backdrop-blur-xl bg-kopken-primary-100/70 dark:bg-kopken-primary-950/70 shadow-xl fixed inset-y-0 right-0 w-80 max-w-full transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-40 flex items-center`}
            >
                <div className="px-4 py-8 flex flex-col gap-3 w-full max-h-screen overflow-y-auto">
                    {titles.slice(1).map((title, index) => (
                        <a
                            href={`#${title}`}
                            key={index}
                            onClick={(event) => {
                                event.preventDefault();
                                document.getElementById(title)?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                            className={`${activeTitle === title
                                ? "scale-105 opacity-100 font-semibold"
                                : "opacity-70"
                                } ml-2 transition-transform transform hover:scale-105 hover:opacity-100`}
                        >
                            {title}
                        </a>
                    ))}
                </div>
            </div>
            {/* Button */}
            <div
                className={`fixed bottom-6 right-6 z-50 ${showButton || isOpen
                    ? "animate-dynamic-in delay-1000"
                    : "animate-dynamic-out delay-1000"
                    }`}
            >
                <button
                    onClick={toggleTOC}
                    className="hover:scale-105 transition-transform duration-200 shadow-md rounded-full backdrop-blur-2xl bg-kopken-primary-400/70 dark:bg-kopken-primary-500/50 p-3"
                    aria-label="table of contents button"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}
