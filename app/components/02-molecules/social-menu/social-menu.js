import Share from "../../01-atoms/share/share";

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

		<div
			className="ml-[3px] my-[3px] mr-[11px] last:mr-[3px] w-[18px] h-[18px]"
			key={index}
		>

			<Share
				fill
				src={icon.icon}
				altText={icon.alt}
				link={icon.link}
			/>

		</div>

	))

	return (

		<div className="flex">

			{renderIcons}

		</div>
	)

}

export default SocialMenu;