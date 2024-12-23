import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "KopKen",
    description: "KopKen is an iOS app utilising context-awareness to foster nostalgia.",
};


export default function KopKenLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='font-kopken flex justify-center'>
            {children}
        </div>
    );
}
