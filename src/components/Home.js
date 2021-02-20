import React from 'react';
import image from '../pexel.jpg';

export default function Home() {
    return (
        <main>
            <img src={image} alt="backgroudn" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-44 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leadning-none lg:leading-snug home-name">Aloha. I'm Even.</h1>
            </section>
        </main>
    )
}
