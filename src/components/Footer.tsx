import React from 'react'
import EmailLink from './EmailLink'

export default function Footer() {
    return (
        <footer className='w-screen h-[66vh] bg-black text-2xl sm:text-4xl sm:leading-relaxed place-content-center px-6 md:px-24'>
            <p className='max-w-4xl mx-auto'>
                Open to new opportunities or side hustles. Let&apos;s build cool stuffs! <EmailLink email='hazlazuardi@gmail.com'>hazlazuardi@gmail.com</EmailLink>
            </p>
        </footer>
    )
}