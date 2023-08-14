"use client";
import React from "react";
import { Flowbite, Navbar } from "flowbite-react";

const Hamburger = (props) => {

	const {
		menuItems
	} = props;

	const customTheme = {
		navbar: {
			root: {
				inner: {
					base: "flex flex-wrap items-center justify-end"
				}
			},
			collapse: {
				base: "w-full",
				list: "mt-4 flex flex-col",
			},
			link: {
				base: "block py-2 pr-4 pl-3",
				active: {
					off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50"
				}
			},
			toggle: {
				base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
			}
		}
	}

	const renderMenuItems = menuItems.map((item, index) => (

		<Navbar.Link
			href={item.link}
			key={index}
		>
			{item.item}
		</Navbar.Link>

	))

	return (

		<Flowbite theme={{ theme: customTheme }}>

			<Navbar
				fluid
				rounded
				theme={customTheme}
	  		>

				<Navbar.Toggle />

				<Navbar.Collapse>

		  			{renderMenuItems}

				</Navbar.Collapse>

	  		</Navbar>

	  </Flowbite>

	)

}

export default Hamburger;