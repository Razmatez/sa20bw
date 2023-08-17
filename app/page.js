"use client";
import { useState } from "react";
import axios from "axios";

import SocialMenu from "./components/02-molecules/social-menu/social-menu";

export default function Home() {

	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");

	const getData = () => {
		axios.get("https://stage-article-cms-api.incrowdsports.com/v2/articles/search?clientId=SA20&size=10&page=0")
			.then(res => {
				console.log(res.data.data.articles[0].heroMedia.content.videoThumbnail)
				setTitle(res.data.data.articles[0].heroMedia.title);
				setImage(res.data.data.articles[0].heroMedia.content.videoThumbnail)
			}).catch(err => {
				console.log(err)
			})
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">

			<SocialMenu />

			<button className="font-barlow-semi-condensed" onClick={getData}>click me</button>
			<p>{title}</p>
			<img src={image} />

		</main>
	)
}
