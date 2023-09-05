import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import Button from "../../01-atoms/button/button";
import SocialMenu from "../../02-molecules/social-menu/social-menu";

import AddIcon from "../../../assets/icons/button/add.svg";
import ChevronDown from "../../../assets/icons/chevron/chevron-down-white.svg";
import CloseIcon from "../../../assets/icons/global/close-white.svg";
import LoginIcon from "../../../assets/icons/header/login.svg";
import LogoRectangle from "../../../assets/icons/logo-rectangle.svg";
import SearchIcon from "../../../assets/icons/header/search.svg";

const SideMenu = (props) => {

	const {
		open,
		content,
		onClose
	} = props;

	useEffect(() => {

		var dropdownBtn = document.querySelector(".side-menu-item-dropdown-btn");
		var dropdownMenu = document.querySelector(".side-menu-item-dropdown");
		var dropdownChevron = document.querySelector(".side-menu-item-chevron");

		dropdownBtn.addEventListener("click", () => {
			dropdownMenu.classList.toggle("show");
			dropdownChevron.classList.toggle("rotate");
		});

	  return () => {

	  }

	}, [])


	return (

		<div className={`${open ? "side-menu-backdrop" : ""} xl:hidden`}>

			<div className={`side-menu ${open ? "open" : ""} xl:hidden`}>

				<div className="flex items-center justify-end h-14 mr-4">

					<button
						className="w-6 h-6 mr-6"
						type="button"
					>

						<SearchIcon
							width={24}
							height={24}
							alt="search"
						/>

					</button>

					<button
						className="w-6 h-6"
						type="button"
						onClick={onClose}
					>

						<CloseIcon
							width={24}
							height={24}
							alt="close"
						/>

					</button>

				</div>

				<div className="side-menu-contents flex flex-col justify-between py-5 pr-5 pl-8">

					<div>

						<ul>

							{content.map((item, index) => (

								<li
									className="mt-4 first:mt-0 list-none"
									key={index}
								>

									<Link
										className={`flex justify-between w-full button-base text-lightGrey ${item.children ? "side-menu-item-dropdown-btn" : ""}`}
										href={item.link}
									>

										<span>{item.item.toUpperCase()}</span>

										{item.children && (

											<ChevronDown
												className="side-menu-item-chevron ml-2"
												width={24}
												height={24}
												alt="expand"
											/>

										)}

									</Link>

									{item.children && (

										<div className="side-menu-item-dropdown pb-4 pl-4">

											{item.children.map((child, childIndex) => (

												<Link
													className="flex pt-4 body-sm text-grey"
													key={childIndex}
													href={child.link}
												>
													{child.item}
												</Link>

											))}

										</div>

									)}


								</li>

							))}

						</ul>

						<div className="mt-6">

							<Button
								variant="blue"
								size="sm"
								styles="w-full"
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

						<Link
							className="block button-sm text-lightGrey py-8"
							href="/tickets"
						>
							BUY TICKETS
						</Link>

						<Link
							className="flex button-sm text-lightGrey"
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

					</div>

					<div>

						<div className="flex justify-between items-center mb-6">

							<div className="w-12 h-auto">

								<LogoRectangle
									alt="logo"
								/>

							</div>

							<SocialMenu />

						</div>

						<div className="label-sm text-grey">
							© Copyright SA20 2023. All rights reserved.
						</div>

					</div>

				</div>

			</div>

		</div>
	)

}

export default SideMenu;