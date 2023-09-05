import Link from "next/link";

import Divider from "../../01-atoms/divider/divider";
import ResponsiveImage from "../../01-atoms/image/responsiveImage";
import Share from "../../01-atoms/share/share";

import formatDate from "../../../utils/formatDate";

import PlayIcon from "../../../assets/icons/card/play.svg";

const Card = (props) => {

	const {
		content,
		darkTheme
	} = props;

	return (

		<div>

			<Link
				className="block w-full h-[346px] shadow rounded-2xl overflow-hidden"
				href={content && "/news/" + content.slug}
			>

				<div className="relative h-[174px]">

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

				<div className={`p-4 ${darkTheme ? "bg-darkBlue" : "bg-white"}`}>

					{content.heroMedia.category && (
						<div className={`label-base ${darkTheme ? "text-lightBlue" : "text-darkBlue"}`}>{content.heroMedia.category}</div>
					)}

					<h6 className={`mt-1 mb-3 h-[72px] ${darkTheme ? "text-white" : "text-darkBlue"}`}>{content.heroMedia.title}</h6>

					<Divider darkTheme={darkTheme} />

					<div className="mt-3 flex justify-between items-center">

						<span className={`body-sm ${darkTheme ? "text-grey" : "text-darkGrey"}`}>
							{formatDate(content.publishDate)}
						</span>

						{/* Waiting on confirmation if this data is available */}
						{/* <span className="flex items-center body-sm text-darkGrey before:w-[3px] before:h-[3px] before:mx-2 before:bg-darkGrey before:rounded">
							<div>04:01 min</div>
						</span> */}

						<Share darkTheme={darkTheme} />

					</div>

				</div>

			</Link>

		</div>

	);

};

export default Card;