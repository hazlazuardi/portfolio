"use client"
import { useState } from "react";

export default function FigmaEmbed({ src, caption }: { src: string; caption: string; }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <figure className="mx-auto max-w-6xl w-full px-4 lg:px-8 my-6">
            {/* Use aspect-ratio for height consistency */}
            {!isActive && (
                <div className="w-full aspect-[4/3] border border-gray-200 rounded-lg">
                    <button className="m-auto w-full h-full" onClick={() => setIsActive(!isActive)}>
                        Load Embed Figma
                    </button>
                </div>
            )}
            {isActive && (
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
