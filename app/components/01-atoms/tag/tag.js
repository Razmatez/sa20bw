"use client";
import Link from "next/link";

const Tag = (props) => {

	const {
		content,
		link
	 } = props;

	return (

		<Link
			href={link ? link : ""}
		>

			<div className="inline-flex bg-grey py-1 px-2 text-xs rounded-xl">
				{content}
			</div>

		</Link>

	)

}

export default Tag;