import Icon from "../icon/icon"

const Share = (props) => {

	const { src, link, altText } = props;

	return (
		<a href={link}>
			<Icon
				src={src}
				alt={altText}
			>

			</Icon>
		</a>

	);

}

export default Share;