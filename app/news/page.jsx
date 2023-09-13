/* eslint-disable @next/next/no-async-client-component */
"use client";

import Button from "../../components/01-atoms/button/button";
import Dropdown from "../../components/01-atoms/drop-down/drop-down";
import Card from "../../components/02-molecules/card/card";
import LatestNewsGrid from "../../components/03-organisms/latest-news-grid/latest-news-grid";

import ChevronDown from "../../assets/icons/chevron/chevron-down-dark.svg";

import "./page.css";

async function fetchArticles() {

	const response = await fetch(process.env.NEXT_PUBLIC_ARTICLE_BASE_URL + "/v2/articles?clientId=" + process.env.NEXT_PUBLIC_CLIENT_ID, { cache: "force-cache" });
	return response.json();

}

export default async function Page() {

	const data = await fetchArticles();

	return (

		<main>

			<div className="background-image bg-lightGrey">

				<div className="container py-10 lg:py-16 px-0">

					<h1 className="mb-6 lg:mb-10 pl-5 lg:pl-0">News</h1>

					<LatestNewsGrid showGridOnly />

				</div>

			</div>

			<div className="container py-10 lg:py-16 bg-white">

				<div className="w-full lg:w-[238px]">

					<Dropdown
				   		options={[
							{
								label: "Announcements",
								value: "announcements",
							},
							{
								label: "Interviews",
								value: "interviews",
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

				<div className="mt-8 lg:mt-10 lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-6">

					{data.data.articles.map(content => (

						<Card
							horizontalMobile
							content={content}
							key={content.id}
						/>

					))}

				</div>

				<div className="flex justify-center mt-4 lg:mt-8">

					<Button
						withCustomIconRight
						variant="secondary"
					>

						<span>Load More News</span>

						<ChevronDown
							className="ml-2"
							alt="arrow"
						/>

					</Button>

				</div>

			</div>

		</main>

	)

}