"use client"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function FigmaEmbed({ thumbnail, src, caption }: { thumbnail: StaticImageData; src: string; caption: string; }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <figure className="mx-auto max-w-6xl w-full px-6 lg:px-8 my-6">
            {/* Use aspect-ratio for height consistency */}
            {!isActive && (
                <div className="relative inline-block rounded-lg overflow-hidden">
                    {/* Thumbnail */}
                    <Image
                        src={thumbnail}
                        alt={caption}
                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:blur-sm"
                    />

                    {/* Overlay and Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-kopken-primary-200/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button
                            className="px-4 py-2 text-kopken-primary-500 rounded-lg"
                            onClick={() => setIsActive(!isActive)}
                        >
                            Load Embed Figma
                        </button>
                    </div>
                </div>
            )}            {isActive && (
                <iframe
                    className="w-full aspect-[4/3] border border-gray-200 rounded-lg"
                    src={src}
                    allowFullScreen
                ></iframe>
            )}
            <figcaption className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                {caption}
            </figcaption>
        </figure>
    );
};
