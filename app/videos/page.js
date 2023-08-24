'use client'

import { useEffect, useState } from "react";
import RootLayout from "../layout";
import Navbar from "../../components/03-organisms/navbar/navbar";
import Footer from "../../components/03-organisms/footer/footer";

export default function Page() {
   const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://stage-article-cms-api.incrowdsports.com/v2/articles?clientId=SA20");
            const data = await response.json();
            setData(data);
        };

        fetchData();
        
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-4 flex flex-row">
                {/* Display the fetched data */}
                {data && data.data.articles.map(content => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg px-4 py-2 m-2">
                        <img className="w-full" src={data && content.heroMedia.content.videoThumbnail} alt="Sunset in the mountains"></img>
                        <div className="px-6 py-4">
                            <a href={data && '/videos/' + content.slug} className="font-bold text-xl mb-2">{data && content.heroMedia.title}</a>
                            <p className="text-gray-700 text-base">

                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                ))
                }
                {/* <div className="container mx-auto mt-4" dangerouslySetInnerHTML={{__html: data.data.article.content[0].content}} /> */}
            </div>
            <Footer />
        </div>
    );
}