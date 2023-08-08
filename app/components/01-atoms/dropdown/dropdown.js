"use client";
import React from "react";
import { Dropdown as DropdownComponent } from "flowbite-react";

const Dropdown = (props) => {

	const { items } = props;

	const renderItems = items.map((item, key) => (

		<DropdownComponent.Item
			href={item.link}
			key={key}
		>
			{item.name}
		</DropdownComponent.Item>

	))

	return (

		<DropdownComponent
			inline
			label="Dropdown"
		>
			{renderItems}
		</DropdownComponent>

	)

}

export default Dropdown;