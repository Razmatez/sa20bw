"use client";
import React from "react";
import Image from "next/image";
import { Flowbite, Navbar as NavComponent } from "flowbite-react";

import Button from "../../01-atoms/button/button";
import Icon from "../../01-atoms/icon/icon";
import ItemLink from "../../01-atoms/item-link/item-link";
import SocialMenu from "../../02-molecules/social-menu/social-menu";

import Logo from "../../../assets/icons/logo.svg";
import AddIcon from "../../../assets/icons/button/add.svg";
import LoginIcon from "../../../assets/icons/navbar/login.svg";
import SearchIcon from "../../../assets/icons/navbar/search.svg";

const Navbar = () => {

	const customTheme = {
		navbar: {
			root: {
				base: "",
			},
			collapse: {
				base: "w-full md:block",
				list: "flex flex-col items-center md:flex-row"
			},
			link: {
				base: ""
			}
		}
	}

	const menuItems = [
		{ item: "News", link: "/news" },
		{ item: "Matches", link: "/matches" },
		{ item: "Videos", link: "/videos" },
		{ item: "Stats", link: "/stats" },
		{ item: "Teams", link: "/teams" },
		{ item: "More", link: "/more", children: [] },
	]

	const renderMenuItems = menuItems.map((item, index) => (

		<div
			className="flex justify-center w-[110px] py-3"
			key={index}
		>

			<NavComponent.Link
				className="button-base text-lightGrey"
				href={item.link}
			>
				{item.item.toUpperCase()}
			</NavComponent.Link>

		</div>

	))

	return (

		<Flowbite theme={{ theme: customTheme }}>

			<NavComponent fluid>

				{/* Secondary menu */}

				<div className="flex items-center justify-end w-full h-12 pr-16 bg-darkBlue90">

					<ItemLink
						className="mr-6 px-4 py-3 text-lightGrey"
						link="/tickets"
					>
						TICKETS
					</ItemLink>

					<div className="w-px h-6 bg-darkBlue30" />

					<ItemLink
						className="mx-6 pl-3 pr-4 text-lightGrey"
						link="/login"
					>

						<Icon
							src={LoginIcon}
							altText="login"
							height={24}
							width={24}
						/>

						<span className="ml-2">
							LOGIN/REGISTER
						</span>

					</ItemLink>

					<SocialMenu />

				</div>

				{/* Primary menu */}

				<div className="flex flex-nowrap w-full h-24 items-center px-16 bg-darkBlue">

					<NavComponent.Brand href="/">

						<Image
							src={Logo}
							alt="logo"
						/>

					</NavComponent.Brand>

					<NavComponent.Toggle />

					<NavComponent.Collapse>

						<div className="flex mx-auto">

			  				{renderMenuItems}

						</div>

						<div className="ml-6">

							<Button
								variant="blue"
								size="sm"
							>
								<span>CHOOSE MY TEAM</span>

								<span className="ml-2 -mr-1">

									<Icon
										src={AddIcon}
										height={24}
										width={24}
									 />

								</span>

							</Button>

						</div>

						<div className="ml-6">

							<Icon
								src={SearchIcon}
								height={24}
								width={24}
							/>

						</div>

					</NavComponent.Collapse>

				</div>

			</NavComponent>

		</Flowbite>

	)

}

export default Navbar;