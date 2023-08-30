'use client'

import Bridge from '../../../components/02-molecules/bridge-components/bridge';
import Image from 'next/image';

async function fetchData(slug) {
    const response = await fetch(process.env.NEXT_PUBLIC_ARTICLE_BASE_URL + "/v2/articles/slug/" + slug + "?clientId=" + process.env.NEXT_PUBLIC_CLIENT_ID);
    return await response.json();
};

export default async function Page({ params }) {
    const slug = params.slug;
    const data = await fetchData(slug);

    return (
        <div className='mx-auto flex flex-wrap items-center justify-between'>
            <div className='flex flex-nowrap w-full items-center px-16' dir="rtl">
                <Image
                    className='rounded-s-lg my-16'
                    src={data.data.article.heroMedia.content.image || data.data.article.heroMedia.content.videoThumbnail}
                    alt={data.data.article.heroMedia.title}
                    width={1920}
                    height={420}
                />
            </div>

            <div className="container mx-auto mt-4">
                {
                    data.data.article.content.map((content) =>
                        < Bridge key={content.id} content={content} />
                    )
                }
            </div>
        </div>
    );
}