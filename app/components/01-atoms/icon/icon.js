"use client";
import Image from "next/image";

const Icon = (props) => {

	const {
		src,
		altText,
		height,
		width
	} = props;

	return (

		<Image
			className="w-full h-full"
			src={src}
			alt={altText}
			height={height}
			width={width}
		/>

	)

}

export default Icon;