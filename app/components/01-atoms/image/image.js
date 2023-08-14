"use client";

const Image = ({ image, style, altText }) => {
	return (

		<img className={style} src={image} alt={altText} />

	);
};

export default Image;