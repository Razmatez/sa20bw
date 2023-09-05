import Link from "next/link";

import InstagramIcon from "../../../assets/icons/social/instagram.svg";
import TwitterIcon from "../../../assets/icons/social/twitter.svg";
import FacebookIcon from "../../../assets/icons/social/facebook.svg";
import YouTubeIcon from "../../../assets/icons/social/youtube.svg";
import TikTokIcon from "../../../assets/icons/social/tiktok.svg";

const SocialMenu = () => {

	const icons = [
		{ icon: InstagramIcon, alt: "instagram", link: "#" },
		{ icon: TwitterIcon, alt: "twitter", link: "#" },
		{ icon: FacebookIcon, alt: "facebook", link: "#" },
		{ icon: YouTubeIcon, alt: "youtube", link: "#" },
		{ icon: TikTokIcon, alt: "tiktok", link: "#" },
	]

	const renderIcons = icons.map((icon, index) => (

		<Link
			className="mr-2 last:mr-0 xl:mr-6"
			href={icon.link}
			key={index}
		>

			<icon.icon
				alt={icon.alt}
				width={24}
				height={24}
			/>

		</Link>

	))

	return (

		<div className="flex">

			{renderIcons}

		</div>
	)

}

export default SocialMenu;