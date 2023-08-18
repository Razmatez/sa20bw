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
import LoginIcon from "../../../assets/icons/navbar/login-register.svg";
import SearchIcon from "../../../assets/icons/navbar/search.svg";

const Navbar = () => {

	const customTheme = {
		navbar: {
			root: {
				base: "",
			},
			collapse: {
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
				className="font-barlow text-white text-base tracking-[0.04em]"
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

				<div className="flex items-center w-full justify-end py-[9px] pr-16 bg-purple">

					<ItemLink
						className="mr-6 px-4 py-[11px] text-white"
						link="/tickets"
					>
						TICKETS
					</ItemLink>

					<div className="w-px h-6 bg-[#B6B3C5]" />

					<ItemLink
						className="mx-6 pl-3 p-1 pr-4 text-white"
						link="/login"
					>

						<div className="p-[3px]">

							<Icon
								src={LoginIcon}
								altText="login-register"
								height={18}
								width={18}
							/>

						</div>

						<span className="ml-[11px]">
							LOGIN/REGISTER
						</span>

					</ItemLink>

					<SocialMenu />

				</div>

				{/* Primary menu */}

				<div className="flex flex-wrap w-full items-center justify-between py-[26px] px-16 bg-darkBlue">

					<NavComponent.Brand href="/">

						<Image
							src={Logo}
							alt="logo"
						/>

					</NavComponent.Brand>

					<NavComponent.Toggle />

					<NavComponent.Collapse>

						<div className="flex px-[53px]">

			  				{renderMenuItems}

						</div>

						<div className="ml-6">

							<Button
								variant="blue"
								size="sm"
							>
								<span>CHOOSE MY TEAM</span>

								<span className="w-3 h-3 ml-3 -mr-0.5">
									<Icon src={AddIcon} />
								</span>

							</Button>

						</div>

						<div className="ml-6 p-4">

							<Icon src={SearchIcon} />

						</div>

					</NavComponent.Collapse>

				</div>

			</NavComponent>

		</Flowbite>

	)

}

export default Navbar;