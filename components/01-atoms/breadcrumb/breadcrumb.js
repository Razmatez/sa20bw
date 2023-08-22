"use client";
import { Breadcrumb as BreadcrumbComponent, Flowbite } from "flowbite-react";

const Breadcrumb = (props) => {

	const {
		items
	} = props;

	const customTheme = {
		breadcrumb: {
			item: {
				chevron: "mx-2 h-4 w-4 text-darkGrey group-first:hidden",
				href: {
					off: "flex items-center text-sm font-medium text-darkBlue",
					on: "flex items-center text-sm text-darkGrey"
				}
			}
		}
	}

	const renderItems = items.map((item, index) => (

		<BreadcrumbComponent.Item
			href={item.link}
			key={index}
		>
			{item.name}
		</BreadcrumbComponent.Item>

	))

	return (

		<Flowbite theme={{ theme: customTheme }}>

			<BreadcrumbComponent aria-label="breadcrumb">

				{renderItems}

	  		</BreadcrumbComponent>

	  </Flowbite>

	)

}

export default Breadcrumb;