import RelatedContent from "./related_content"
import fetch from 'node-fetch';

export default {
    title: "Organisms/Related Articles",
    component: RelatedContent,
    render: (args, { loaded: { article } }) => <RelatedContent {...args} {...article} />,
}

export const Default = {
    loaders: [
        async () => ({
            articles: await (await fetch('https://stage-article-cms-api.incrowdsports.com/v2/articles/search?clientId=SA20&page=0&size=50&sort=publishDate,DESC&query=id:("77461829-bd9b-4c69-b8d0-aaabd823cb0e","7438162b-a7e3-4561-af9d-94930c5f0596","729638aa-f284-413c-a79e-3bbe479c666f")', { cache: "force-cache" })).json()
        })
    ]
}