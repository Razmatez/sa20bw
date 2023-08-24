"use client";
import Image from "next/image";
import IncrowdImageLoader from "./incdrowd-cdn-loader";

export default function ResponsiveImage(props) {

	const {
		heroMedia,
		styles
	} = props;

	const defaultStyle = "w-full"

	return (
		<div>
			{
				<Image
					loader={IncrowdImageLoader}
					className={styles || defaultStyle}
					src={`${heroMedia.content.image || heroMedia.content.videoThumbnail}`}
					alt={heroMedia.content.altText || heroMedia.title} loading="lazy" lazy="true"
					fill
				/>
			}
		</div>
	);
};
