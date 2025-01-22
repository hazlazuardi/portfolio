import Link from 'next/link'
import React from 'react'


export default function About() {
    return (
        <main>
            <section className='h-screen px-6 sm:px-12 lg:px-24 flex flex-col place-content-center gap-4'>
                <p className=' text-4xl'>⏳ Cooking something fresh, stay tuned!</p>
                <Link href='/' className='text-lg hover:text-blue-500'>Back to Home</Link>
            </section>

        </main>
    )
}