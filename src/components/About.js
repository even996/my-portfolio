import React, { useEffect, useState} from 'react';
import sanityClient from "../client.js";
import sandBg from "../pexel2.jpg"
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from '@sanity/block-content-to-react';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function About() {
    const [author, setAuthor] = useState(null);


    useEffect(() => {
        sanityClient.fetch(`*[_type =="author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data))
        .catch(console.error);
    }, []);

    if(!author) return <div>Loading...</div>
    return (
        <main className="relative">
            <img src={sandBg} alt="background image" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                {console.log(author)}
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author[0].authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                    alt={author[0].name}
                    />
                    <div className="text-lg flex flex-col jutify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Hey there. I'm {" "}
                            <span className="text-green-100">{author[0].name}</span>
                        </h1>
                        <div className="prose lg:prosexl text-white">
                        <BlockContent blocks={author[0].bio} projectId="ohergi2j" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
