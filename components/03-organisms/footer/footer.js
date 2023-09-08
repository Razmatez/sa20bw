import Link from "next/link";

import Logo from "../../../assets/icons/logo/logo.svg";
import Overlay from "../../../assets/icons/footer-image.svg";


import Divider from "../../01-atoms/divider/divider";
import FooterMenu from "../../02-molecules/footer-menu/footer-menu";
import SocialMenu from "../../02-molecules/social-menu/social-menu";
import Subscribe from "../../02-molecules/subscribe/subscribe";

const Footer = () => {

	return (

		<div className="relative bg-darkBlue overflow-hidden">

			<div className="flex flex-col lg:flex-row justify-between">

				<div className="pt-16 px-5 lg:px-16 pr-[134px]">

					<Link href="#">
						<Logo alt="logo" />
					</Link>

					<Subscribe />

				</div>

				<div className="z-10">

					<FooterMenu />

				</div>

			</div>

			{/* Conditional rendering for overlay image */}
			<div className="invisible lg:visible absolute bottom-0 right-0 z-0 flex items-end justify-end opacity-100">

				<Overlay
					width={420}
					height={520}
					alt="overlay"
				/>

			</div>

			<Divider />

			<div className="text-lightGrey flex flex-col lg:flex-row justify-between pt-8 pl-8 pr-5 lg:pr-24 relative">

				<div className="pr-10 flex order-3 lg:order-1 lg:pb-0 pb-5">

					<div
						className="label-base text-grey"
					>
						© Copyright SA20 2023. All Rights Reserved.
					</div>

				</div>

				<div className="flex order-2 lg:order-2 lg:ml-auto lg:flex-initial lg:flex-wrap">

					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:w-auto">

						<Link className="pr-10 lg:pb-0 pb-4 lg:w-full link-sm text-grey" href="/">Tickets Terms</Link>
						<Link className="pr-10 lg:pb-0 pb-4 lg:w-full link-sm text-grey" href="/">Privacy Policy</Link>
						<Link className="pr-10 lg:pb-0 pb-4 lg:w-full link-sm text-grey" href="/">Terms of Use</Link>
						<Link className="pr-10 lg:pb-0 pb-4 lg:w-full link-sm text-grey" href="/">Cookie Policy</Link>

					</div>

				</div>

				<div className="order-1 lg:order-3 lg:flex-initial pb-10">

					<SocialMenu />

				</div>

			</div>

		</div>
	)
}

export default Footer;