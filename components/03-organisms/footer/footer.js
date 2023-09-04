import Image from "next/image";
import Link from "next/link";

import Logo from "../../../assets/icons/logo.svg";
import Overlay from "../../../assets/icons/footer-overlay.svg"

import Divider from "../../01-atoms/divider/divider";
import FooterMenu from "../../02-molecules/footer-menu/footer-menu";
import SocialMenu from "../../02-molecules/social-menu/social-menu";
import Subscribe from "../../02-molecules/subscribe/subscribe";
import Text from "../../01-atoms/text/text";

const Footer = () => {

	return (

		<div className="relative bg-darkBlue overflow-hidden">

			<div className="flex flex-col md:flex-row justify-between">

				<div className="pt-16 px-5 md:px-16 pr-[134px]">

					<Image
						src={Logo}
						alt="logo"

					/>

					<Subscribe />

				</div>

				<div className="z-10">

					<FooterMenu />

				</div>

			</div>

			{/* Conditional rendering for overlay image */}
				<div className="invisible lg:visible absolute bottom-0 right-[-250px] z-0 flex items-end justify-end">
					<Image
						src={Overlay}
						alt="overlay"
						width={1100}
						height={400}
						className="opacity-40"
					/>
				</div>

			<Divider />

			<div className="text-lightGrey flex flex-col md:flex-row justify-between pt-8 pl-8 pr-5 md:pr-24">

				<div className="pr-10 flex order-3 md:order-1 md:pb-0 pb-5">

					<Text content="© Copyright SA20 2023. All Rights Reserved." />

				</div>

				<div className="flex order-2 md:order-2 md:ml-auto md:flex-initial md:flex-wrap">

					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:w-auto">

						<Link className="pr-10 md:pb-0 pb-4 md:w-full" href="/">Tickets Terms</Link>
						<Link className="pr-10 md:pb-0 pb-4 md:w-full" href="/">Privacy Policy</Link>
						<Link className="pr-10 md:pb-0 pb-4 md:w-full" href="/">Terms of Use</Link>
						<Link className="pr-10 md:pb-0 pb-4 md:w-full" href="/">Cookie Policy</Link>

					</div>

				</div>

				<div className="order-1 md:order-3 md:flex-initial pb-10">

					<SocialMenu />

				</div>

			</div>

		</div>
	)
}

export default Footer;