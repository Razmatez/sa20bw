import Card from "../../02-molecules/card/card";

async function fetchArticles() {
    let string = '&page=0&size=50&sort=publishDate,DESC&query=id:("77461829-bd9b-4c69-b8d0-aaabd823cb0e","7438162b-a7e3-4561-af9d-94930c5f0596","729638aa-f284-413c-a79e-3bbe479c666f")';
    const response = await fetch("https://stage-article-cms-api.incrowdsports.com/v2/articles/search?clientId=SA20" + string, { cache: "force-cache" });
    return response.json();
}

export default async function RelatedContent() {
    const data = await fetchArticles();
    return (
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {
                data.data.articles.map((article) =>
                    <div className="w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4">
                        <Card key={article.id} content={article} />
                    </div>
                )
            }
        </div>
    );
}