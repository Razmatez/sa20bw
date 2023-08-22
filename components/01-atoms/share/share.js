import Icon from "../icon/icon";

const Share = (props) => {

	const {
		src,
		altText,
		link,
		height,
		width
	} = props;

	return (

		<a href={link}>

			<Icon
				src={src}
				alt={altText}
				height={height}
				width={width}
			/>

		</a>

	);

}

export default Share;