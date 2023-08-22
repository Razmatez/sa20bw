import Link from "next/link";

const ItemLink = (props) => {

	const {
		className,
		link
	} = props;

	return (

		<Link
			className={`flex items-center button-sm text-darkBlue ${className}`}
			href={link}
		>
			{props.children}
		</Link>

	)

}

export default ItemLink;