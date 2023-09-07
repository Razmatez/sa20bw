import { useState } from "react";
import Link from "next/link";

import Divider from "../../01-atoms/divider/divider";
import ResponsiveImage from "../../01-atoms/image/responsiveImage";
import Share from "../../01-atoms/share/share";

import formatDate from "../../../utils/formatDate";

import PlayIcon from "../../../assets/icons/card/play.svg";

const Card = (props) => {

	const {
		content,
		darkTheme,
		hideImage = false,
		large = false
	} = props;

	// const [shareMenuOpen, setShareMenuOpen] = useState(false);

	// const handleShareClick = (e) => {

	// 	e.preventDefault();

	// 	setShareMenuOpen(!shareMenuOpen);

	// }

	return (

		<Link
			className={`block w-full h-full shadow-1 rounded-2xl overflow-hidden ${large ? "max-h-[542px]" : hideImage ? "max-h-[172px]" : "max-h-[346px]"}`}
			href={content && "/news/" + content.slug}
		>

			<div className={hideImage ? "hidden" : large ? "relative h-[338px]" : "relative h-[174px]"}>

				<ResponsiveImage
					heroMedia={content.heroMedia}
				/>

				{content.heroMedia.content.contentType === "VIDEO" && (

					<div className="absolute bottom-0 w-12 h-12 flex justify-center items-center bg-lightBlue rounded-tr-2xl">

						<PlayIcon
							width={24}
							height={24}
							alt="video"
						/>

					</div>
				)}

			</div>

			<div className={`${large ? "p-6" : "p-4"} ${darkTheme ? "bg-darkBlue" : "bg-white"}`}>

				{content.heroMedia.category && (

					<div className={`${large ? "label-lg" : "label-base"} ${darkTheme ? "text-lightBlue" : "text-darkBlue"}`}>
						{content.heroMedia.category}
					</div>

				)}

				<h6 className={`${large ? "mt-2 mb-4 h-16" : "mt-1 mb-3 h-18"} ${darkTheme ? "text-white" : "text-darkBlue"}`}>
					{content.heroMedia.title}
				</h6>

				<Divider darkTheme={darkTheme} />

				<div className={`flex justify-between items-center ${large ? "mt-4" : "mt-3"}`}>

					<span className={`body-sm ${darkTheme ? "text-grey" : "text-darkGrey"}`}>
						{formatDate(content.publishDate)}
					</span>

					{/* Waiting on confirmation if this data is available */}
					{/* <span className="flex items-center body-sm text-darkGrey before:w-[3px] before:h-[3px] before:mx-2 before:bg-darkGrey before:rounded">
							<div>04:01 min</div>
						</span> */}

					{/* {shareMenuOpen && (

						<div>

						</div>

					)} */}

					<Share
						darkTheme={darkTheme}
						large={large}
						// onClick={handleShareClick}
					/>

				</div>

			</div>

		</Link>

	);

};

export default Card;