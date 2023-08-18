import Link from "next/link";

const ItemLink = (props) => {

	const {
		className,
		link
	} = props;

	return (

		<Link
			className={`flex items-center font-barlow text-[14px] leading-[18px] tracking-[0.04em] text-darkBlue ${className}`}
			href={link}
		>
			{props.children}
		</Link>

	)

}

export default ItemLink;