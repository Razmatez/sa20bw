"use client";
import React, { useState } from "react";
import { Dropdown as DropdownComponent, Flowbite } from "flowbite-react";

const Dropdown = (props) => {

	const {
		items,
		label,
		size
	 } = props;

	 const [isExpanded, setIsExpanded] = useState(false);

	 const customTheme = {
		button: {
			base: "p-0",
			color: {
				default: "bg-white border border-grey text-darkGrey"
			},
			pill: {
				off: "rounded-sm"
			},
			size: {
				sm: "text-base px-3 py-2 w-[327px] justify-between",
				lg: "text-[18px] px-4 py-3 w-[327px] justify-between"
			}
		},
		dropdown: {
			arrowIcon: `ml-2 h-6 w-6 ${isExpanded ? "rotate-180" : "rotate-0"}`,
			content: "py-2",
			floating: {
				base: "rounded-sm shadow",
				item: {
					base: `flex items-center justify-start ${size === "sm" ? "px-4 py-2" : "px-4 py-3"} text-base text-darkBlue cursor-pointer w-full hover:bg-lightGrey focus::bg-lightGrey`
				}
			}
		}
	 }

	const renderItems = items.map((item, key) => (

		<DropdownComponent.Item
			href={item.link}
			key={key}
		>
			{item.name}
		</DropdownComponent.Item>

	))

	return (

		<Flowbite theme={{ theme: customTheme }}>

			<div onClick={() => setIsExpanded(!isExpanded)}>

				<DropdownComponent
					label={label}
					color="default"
					size={size}
				>
					{renderItems}
				</DropdownComponent>

			</div>

		</Flowbite>
	)

}

export default Dropdown;