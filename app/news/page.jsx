/* eslint-disable @next/next/no-async-client-component */
"use client";

import Button from "../../components/01-atoms/button/button";
import Dropdown from "../../components/01-atoms/drop-down/drop-down";
import Card from "../../components/02-molecules/card/card";
import LatestNewsGrid from "../../components/03-organisms/latest-news-grid/latest-news-grid";

async function fetchArticles() {

	// const response = await fetch(process.env.NEXT_PUBLIC_ARTICLE_BASE_URL + "/v2/articles?clientId=" + process.env.NEXT_PUBLIC_CLIENT_ID, { cache: "force-cache" });
	const response = await fetch("https://stage-article-cms-api.incrowdsports.com" + "/v2/articles?clientId=" + "SA20", { cache: "force-cache" });
	return response.json();
}

export default async function Page() {

	const data = await fetchArticles();

	return (

		<main>

			<div className="bg-lightGrey">

				<div className="container py-16">

					<h1 className="mb-16">News</h1>

					<LatestNewsGrid
						showHeading={false}
					/>

				</div>

			</div>

			<div className="container py-16  bg-white">

				<div className="w-[238px]">
					<Dropdown
				   		options={[
							{
								label: "Announcements",
								value: "announcements",
							},
							{
								label: "Interviews",
								value: "Interviews",
							},
							{
								label: "Match Reports",
								value: "match-reports",
							},
							{
								label: "All News",
								value: "all-news",
							}
						]}
					/>
				</div>

				<div className="grid grid-cols-4 gap-6 mt-10">

					{data.data.articles.map(content => (

						<div key={content.id}>

							<Card content={content} />

						</div>

					))}

				</div>

				<div className="flex justify-center mt-8">

					<Button
						variant="secondary"
					>
						Load More News
					</Button>

				</div>

			</div>

		</main>

	)

}