import Link from "next/link";

import SocialMenu from "../../02-molecules/social-menu/social-menu";
import Subscribe from "../../02-molecules/subscribe/subscribe";
import FooterMenu from "../../02-molecules/footer-menu/footer-menu";
import Divider from "../../01-atoms/divider/divider";
import Text from "../../01-atoms/text/text";

const Footer = () => {
	return (
		<div className="bg-darkBlue">

			<div className="flex">

				<div className="w-[25%]">

					<Subscribe />

					<SocialMenu />

				</div>

				<div className="w-[75%]">

					<FooterMenu />

				</div>

			</div>

			<Divider darkTheme />

			<div className="text-white flex pt-8 pb-8 pl-8 pr-24">

				<div className="w-[25%]">

					<Text content="© Copyright SA20 2023. All Rights Reserved." />

				</div>

				<div className="w-[75%] flex justify-between">

					<Link href="/">Tickets Terms & Conditions</Link>
					<Link href="/">Priavcy Policy</Link>
					<Link href="/">Terms of Use</Link>
					<Link href="/">Cookie Policy</Link>

				</div>

			</div>

		</div>
	)
}

export default Footer;