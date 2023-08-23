import Link from "next/link";

import Divider from "@/components/01-atoms/divider/divider";
import Icon from "@/components/01-atoms/icon/icon";

import formatDate from "@/utils/formatDate";

import PlayIcon from "@/assets/icons/card/play.svg";

const Card = (props) => {

	// const {
	//     content
	// } = props;

	// Temp data
	const content = {
		"slug": "paarl-royals-van-buuren-to-lead-sa-emerging-xi-2",
		"publishDate": "2023-08-23T08:06:35.722Z",
		"heroMedia": {
			"title": "PAARL ROYALS’ VAN BUUREN TO LEAD SA EMERGING XI",
			"content": {
				"id": "d3ab0ba1-2885-4ae5-bcdb-23ae5fa167cd",
				"contentType": "VIDEO",
				"image": "https://media-cdn.incrowdsports.com/9fea300b-5d37-4d00-9a94-dba4813e142c.png",
				"altText": "img"
			}
		},
		"readTimeMinutes": 4,
		"categories": [
			{
				"id": "066b4031-0558-45e3-a3c4-e9d71450245b",
				"text": "Latest News"
			}
		],
		"displayCategory": {
			"id": "066b4031-0558-45e3-a3c4-e9d71450245b",
			"text": "Latest News"
		},
	}

	return (

		<Link
			className="block w-full h-[346px] shadow rounded-b-2xl"
			href={content && "/news/" + content.slug}
		>

			<div className="relative h-[174px]">

				<img
					className="w-full h-full"
					src={content.heroMedia.content.image}
					alt={content.heroMedia.content.altText || "img"}
				/>

				{content.heroMedia.content.contentType === "VIDEO" && (

					<div className="absolute bottom-0 w-12 h-12 flex justify-center items-center bg-lightBlue rounded-tr-2xl">

						<div className="w-6 h-6">

							<Icon
								src={PlayIcon}
								altText="video"
							/>

						</div>

					</div>

				)}

			</div>

			<div className="p-4">

				{content.displayCategory.text && (

					<div className="label-base">
						{content.displayCategory.text.toUpperCase()}
					</div>

				)}

				<h4 className="mt-1 mb-3 h-[72px]">
					{content.heroMedia.title}
				</h4>

				<Divider />

				<div className="mt-3 flex">

					<span className="body-sm text-darkGrey">
						{formatDate(content.publishDate)}
					</span>

					<span className="flex items-center body-sm text-darkGrey before:w-[3px] before:h-[3px] before:mx-2 before:bg-darkGrey before:rounded">
						<div>04:01 min</div>
					</span>

				</div>

			</div>

		</Link>

	)

}

export default Card;
