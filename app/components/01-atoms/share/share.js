import Image from "next/image";

const Share = (props) => {

	const { items } = props;

	return (
		<div className="flex items-center">

			{items.map((item, index) => (
				<a href={item.href}>
					<Image
						key={index}
						src={item.src}
						alt={item.altText}
						href={item.href}
						width={30}
						height={30}
					>

					</Image>
				</a>

			))}

		</div>

	);

}

export default Share;