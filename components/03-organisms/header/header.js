"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../../01-atoms/button/button";
import Icon from "../../01-atoms/icon/icon";
import SideMenu from "./side-menu";
import SocialMenu from "../../02-molecules/social-menu/social-menu";

import AddIcon from "../../../assets/icons/button/add.svg";
import ChevronDown from "../../../assets/icons/chevron/chevron-down-white.svg";
import HamburgerIcon from "../../../assets/icons/header/hamburger.svg";
import Logo from "../../../assets/icons/logo.svg";
import LoginIcon from "../../../assets/icons/header/login.svg";
import SearchIcon from "../../../assets/icons/header/search.svg";

import "./header.css";

const Header = (props) => {

	// const { content } = props;

	const [menuOpen, setMenuOpen] = useState(false);;

	// Temp props
	const content = [
		{ item: "News", link: "/news" },
		{ item: "Matches", link: "/matches" },
		{ item: "Videos", link: "/videos" },
		{ item: "Stats", link: "/stats" },
		{ item: "Teams", link: "/teams" },
		{ item: "More", link: "",
			children: [
				{ item: "About SA20", link: "/about" },
				{ item: "Gallery", link: "/gallery" },
				{ item: "Fan Poll", link: "/fan-poll" },
				{ item: "Auction", link: "/auction" }
			]
		}
	]

	const handleMenuToggle = () => setMenuOpen(!menuOpen);

	return (

		<nav className="fixed top-0 w-full h-15 xl:h-36 z-50">

			{/* Secondary menu */}
			<div className="hidden xl:flex items-center justify-end w-full h-12 pr-16 bg-darkBlue90">

				<Link
					className="flex items-center mr-6 px-4 py-3 button-sm text-lightGrey"
					href="/tickets"
				>
					BUY TICKETS
				</Link>

				<div className="w-px h-6 bg-darkBlue30" />

				<Link
					className="flex items-center mx-6 pl-3 pr-4 button-sm text-lightGrey"
					href="/login"
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

				</Link>

				<SocialMenu />

			</div>

			{/* Primary menu */}
			<div className="relative flex flex-nowrap w-full h-15 xl:h-24 items-center justify-between bg-darkBlue px-5 xl:px-16">

				<Link href="/">

					<Image
						className="h-7 xl:h-10 w-full"
						src={Logo}
						alt="logo"
					/>

				</Link>

				<div className="flex xl:hidden">

					<button
						className="w-6 h-6 mr-6"
						type="button"
					>

						<Icon
							src={SearchIcon}
							altText="search"
						/>

					</button>

					<button
						className="w-6 h-6"
						type="button"
						onClick={handleMenuToggle}
					>

						<Icon
							src={HamburgerIcon}
							altText="hamburger"
						/>

					</button>

				</div>

				{/* Desktop */}
				<div className="hidden xl:flex w-full justify-between items-center">

					<ul className="flex mx-auto">

						{content.map((item, index) => (

							<li
								className="menu-item relative w-[110px] list-none py-9"
								key={index}
							>

								<Link
									className="w-full flex justify-center button-base text-lightGrey hover:text-lightBlue"
									href={item.link}
								>

									<span>
										{item.item.toUpperCase()}
									</span>

									{item.children && (

										<div className="w-6 h-6 ml-2">

											<Image
												className="menu-item-chevron"
												src={ChevronDown}
												alt="expand"
											/>

										</div>

									)}

								</Link>

								{item.children && (

									<div className="menu-item-dropdown">

										{item.children.map((child, childIndex) => (

											<Link
												className="flex w-full p-4 text-lightGrey h7 hover:bg-darkBlue90"
												key={childIndex}
												href={child.link}
											>
												{child.item.toUpperCase()}
											</Link>

										))}

									</div>

								)}

							</li>

						))}

					</ul>

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

				</div>

			</div>

			{/* Mobile */}
			<SideMenu
				open={menuOpen}
				content={content}
				onClose={handleMenuToggle}
			/>

		</nav>

	)

}

export default Header;