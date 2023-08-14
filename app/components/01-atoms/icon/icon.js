import Image from "next/image";

const Icon = (props) => {

	const {
		src,
		altText
	} = props;

	return (

		<Image
			alt={altText}
			height={30}
			width={30}
			src={src}
		/>

	)

}

export default Icon;