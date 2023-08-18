"use client";
import { Image as NextImage } from "next/image";

const Image = (props) => {

	const {
		src,
		altText
	} = props;

	return (

		<NextImage
			src={src}
			alt={altText}
		/>

	);
};

export default Image;