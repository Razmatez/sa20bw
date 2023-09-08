import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import FacebookIcon from "../../../assets/icons/social/facebook.svg?url";
import LinkIcon from "../../../assets/icons/social/link.svg?url";
import ShareIcon from "../../../assets/icons/card/share-dark.svg";
import TwitterIcon from "../../../assets/icons/social/twitter.svg?url";

import "./share.css";

const Share = (props) => {

	const {
		darkTheme,
		large = false
	} = props;

	const [shareMenuOpen, setShareMenuOpen] = useState(false);
	const shareButtonRef = useRef(null);

	const handleShareClick = (e) => {

		e.preventDefault();
		setShareMenuOpen(!shareMenuOpen);

	}

	const handleClickOutside = (e) => {

		if (shareMenuOpen && shareButtonRef.current && !shareButtonRef.current.contains(e.target)) {
		  setShareMenuOpen(false);
		}

	}

	useEffect(() => {

		document.addEventListener("click", handleClickOutside);

		return () => {
		  document.removeEventListener("click", handleClickOutside);
		}

	  }, [shareMenuOpen]);

	return (

		<div
			className="flex"
			onClick={(e) => e.preventDefault()}
		>

			{shareMenuOpen && (

				<div className="flex rounded-lg bg-white shadow-3 mr-1">

					<button className={`flex justify-center items-center ${large ? "w-8 h-8" : "w-6 h-6"}`}>

						<div className="w-4 h-4">
							<Image
								src={TwitterIcon}
								alt="twitter"
							/>
						</div>

					</button>

					<button className={`flex justify-center items-center ${large ? "w-8 h-8" : "w-6 h-6"}`}>

						<div className="w-4 h-4">
							<Image
								src={FacebookIcon}
								alt="facebook"
							/>
						</div>

					</button>

					<button className={`flex justify-center items-center ${large ? "w-8 h-8" : "w-6 h-6"}`}>

						<div className="w-4 h-4">
							<Image
								src={LinkIcon}
								alt="link"
							/>
						</div>

					</button>

				</div>

			)}

			<button
				className={`flex justify-center items-center border rounded-lg ${large ? "w-8 h-8" : "w-6 h-6"} ${darkTheme ? "border-darkBlue30" : "border-darkBlue"}`}
				ref={shareButtonRef}
				onClick={handleShareClick}
			>

				<ShareIcon
					className={darkTheme ? "share-icon-dark-theme" : "share-icon"}
					width={16}
					height={16}
				/>

			</button>

		</div>

	);

}

export default Share;