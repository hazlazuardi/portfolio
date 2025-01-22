import React from 'react'
import EmailLink from './EmailLink'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className=' w-screen h-[95vh] bg-black  py-24 px-6 md:px-24 text-white'>
            <div className='flex flex-col justify-between max-w-4xl mx-auto h-full'>
                <div>
                    <p className=' text-2xl sm:text-4xl sm:leading-relaxed mb-20'>
                        Open to new opportunities or side hustles. Let&apos;s build cool stuffs! <EmailLink email='hazlazuardi@gmail.com'>hazlazuardi@gmail.com</EmailLink>
                    </p>
                    <div className='flex flex-row justify-between max-w-lg text-lg sm:text-2xl'>
                        <div className='flex flex-col gap-4'>
                            <p className='opacity-50'>View CV:</p>
                            <Link
                                href='/CVFE.pdf'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-150 ease-in-out hover:text-blue-500"
                            >
                                Frontend Developer
                            </Link>
                            <Link
                                href='/CVUX.pdf'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-150 ease-in-out hover:text-blue-500"
                            >
                                UX Designer
                            </Link>
                        </ div>
                        <div className='flex flex-col gap-4'>
                            <p className='opacity-50'>Also on:</p>
                            <Link
                                href="https://www.linkedin.com/in/wishnu-hazmi-lazuardi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-150 ease-in-out hover:text-blue-500"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="https://medium.com/@hazlazuardi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-150 ease-in-out hover:text-blue-500"
                            >
                                Medium
                            </Link>
                        </ div>
                    </div>
                </div>
                <p className='opacity-50'>© {new Date().getFullYear()} Haz Lazuardi — Based in Brisbane, Australia</p>
            </div>
        </footer>
    )
}