import React from "react"
import Image from "../sudtirol-wp.jpg"

export default function Home() {
    return (
        <main>
            <img src={Image} alt="Sudtirol" className="absolute object-conver w-full h-full"></img>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bald cursive leading-none lg:leading-snug home-name">Hallo. I'm Giulio</h1>
            </section>
        </main>
    )
}