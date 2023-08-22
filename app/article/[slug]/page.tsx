'use client'

import Footer from "@/app/components/03-organisms/footer/footer";
import Navbar from "@/app/components/03-organisms/navbar/navbar";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
    const [data, setData] = useState(null);
    const slug = params.slug;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://stage-article-cms-api.incrowdsports.com/v2/articles/slug/" + params.slug + "?clientId=SA20");
            const data = await response.json();
            setData(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            {/* Display the fetched data */}
            <div className="bg-gray-100">
                <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                        {data &&
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                                {data.data.article.heroMedia.title}
                            </h1>}
                        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</button>
                        <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Live Demo</button>
                    </div>
                </div>
            </div>
            {data &&
                <div className="container mx-auto mt-4" dangerouslySetInnerHTML={{__html: data.data.article.content[0].content}} />
            }
            <Footer/>
        </div>
    );
}