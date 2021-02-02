import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import gardaSee from "../Gardasee.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return  builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name, 
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error)
    }, [])

    if(!author)
        return <div>No author</div>

    return (
        <main className="relative">
            <img src={gardaSee} alt="Gardasee" className="absolute w-full"></img>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img alt={author.name} src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64"></img>
                    <div className="text-lg flex flex-col justify-center ml-10">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Hey there. I'm {" "}
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="625or4fu" dataset="production"></BlockContent>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}