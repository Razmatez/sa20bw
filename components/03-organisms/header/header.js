"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../../01-atoms/button/button";
import SideMenu from "./side-menu";
import SocialMenu from "../../02-molecules/social-menu/social-menu";

import AddIcon from "../../../assets/icons/button/add.svg";
import ChevronDown from "../../../assets/icons/chevron/chevron-down-white.svg";
import HamburgerIcon from "../../../assets/icons/header/hamburger.svg";
import Logo from "../../../assets/icons/logo/logo.svg?url";
import LoginIcon from "../../../assets/icons/header/login.svg";
import SearchIcon from "../../../assets/icons/header/search.svg";

import "./header.css";

function Header() {

	const [menuOpen, setMenuOpen] = useState(false);
	const [content, setContent] = useState();

	const handleMenuToggle = () => setMenuOpen(!menuOpen);

	useEffect(() => {
		fetch(process.env.NEXT_PUBLIC_NAVIGATION_URL, { cache: "force-cache" })
			.then((res) => res.json())
			.then((content) => setContent(content.data.children))
			.catch(err => console.log(err))
	}, [])

	return (

		<nav className="fixed top-0 z-50 w-full xl:h-36 h-15">

			{/* Secondary menu */}
			<div className="hidden justify-end items-center pr-16 w-full h-12 xl:flex bg-darkBlue90">

				<Link
					className="flex items-center py-3 px-4 mr-6 button-sm text-lightGrey"
					href="/tickets"
				>
					BUY TICKETS
				</Link>

				<div className="w-px h-6 bg-darkBlue30" />

				<Link
					className="flex items-center pr-4 pl-3 mx-6 button-sm text-lightGrey"
					href="/login"
				>

					<LoginIcon
						width={24}
						height={24}
						alt="login"
					/>

					<span className="ml-2">
						LOGIN/REGISTER
					</span>

				</Link>

				<SocialMenu />

			</div>

			{/* Primary menu */}
			<div className="flex relative flex-nowrap justify-between items-center px-5 w-full xl:px-16 xl:h-24 h-15 bg-darkBlue">

				<Link href="/">

					<div className="flex h-7 xl:h-10 w-[190px] xl:w-[284px]">
						<Image
							src={Logo}
							alt="logo"
						/>
					</div>

				</Link>

				<div className="flex xl:hidden">

					<button
						className="mr-6"
						type="button"
					>

						<SearchIcon
							width={24}
							height={24}
							alt="search"
						/>

					</button>

					<button
						type="button"
						onClick={handleMenuToggle}
					>

						<HamburgerIcon
							width={24}
							height={24}
							alt="hamburger"
						/>

					</button>

				</div>

				{/* Desktop */}
				<div className="hidden justify-between items-center w-full xl:flex">

					<ul className="flex mx-auto">

						{content && content.map(item => (
							<li
								className="relative py-9 list-none menu-item w-[110px]"
								key={item.id}
							>

								<Link
									className="flex justify-center w-full button-base text-lightGrey hover:text-lightBlue"
									href={item.link || "#"}
								>

									<span>
										{item.label.toUpperCase()}
									</span>

									{item.children.length === 0 || (

										<div className="ml-2 w-6 h-6">

											<ChevronDown
												className="menu-item-chevron"
												alt="expand"
											/>

										</div>

									)}

								</Link>

								{item.children.length === 0 || (

									<div className="menu-item-dropdown">

										{item.children.map(child => (

											<Link
												className="flex p-4 w-full text-lightGrey h7 hover:bg-darkBlue90"
												key={child.id}
												href={child.link || "#"}
											>
												{child.label.toUpperCase()}
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

								<AddIcon
									width={24}
									height={24}
									alt="plus"
								/>

							</span>

						</Button>

					</div>

					<div className="ml-6">

						<SearchIcon
							width={24}
							height={24}
							alt="search"
						/>

					</div>

				</div>

			</div>

			{/* Mobile */}
			{content &&
				<SideMenu
					open={menuOpen}
					content={content}
					onClose={handleMenuToggle}
				/>
			}

		</nav>

	)

}

export default Header;
