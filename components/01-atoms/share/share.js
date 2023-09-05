import ShareIcon from "../../../assets/icons/card/share-dark.svg";

import "./share.css";

const Share = (props) => {

	const {
		darkTheme
	} = props;

	return (

		<button className={`w-6 h-6 flex justify-center items-center border rounded-lg ${darkTheme ? "border-darkBlue30" : "border-darkBlue"}`}>

			<ShareIcon
				className={darkTheme ? "share-icon-dark-theme" : "share-icon"}
				width={16}
				height={16}
			/>

		</button>

	);

}

export default Share;