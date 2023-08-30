'use client'

import Card from "../../components/02-molecules/card/card";

async function fetchArticles() {
    const response = await fetch(process.env.NEXT_PUBLIC_ARTICLE_BASE_URL + "/v2/articles?clientId=" + process.env.NEXT_PUBLIC_CLIENT_ID, { cache: "force-cache" });
    return response.json();
}

export default async function Page() {
    const data = await fetchArticles();
    return (
        <div>

            <div className="container my-12 mx-auto px-4 md:px-12">
                <div>
                    <select name="filter" id="filter">
                        <option value="Latest news"></option>
                        <option value="Another Category"></option>
                        <option value="Another category"></option>
                        <option value="Another"></option>
                        <option value="Another one"></option>
                    </select>
                </div>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {/* Display the fetched data */}
                    {data.data.articles.map(content => (
                        <div className="w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4">
                            <Card key={content.id} content={content}></Card>
                        </div>
                    ))
                    }
                </div>
            </div>

        </div>
    );
}