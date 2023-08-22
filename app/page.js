"use client";
import { useState } from "react";
import axios from "axios";

import FooterMenu from "../components/02-molecules/footer-menu/footer-menu"
import Subscribe from "../components/02-molecules/subscribe/subscribe";

import Footer from "../components/03-organisms/footer/footer"
import Navbar from "../components/03-organisms/navbar/navbar";

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
		<main>

			<Navbar />

			<br />

			<Footer />

		</main>
	)
}
