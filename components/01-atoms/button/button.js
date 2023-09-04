import React from "react";

const Button = (props) => {

	const {
		variant,
		size,
		styles
	} = props;

	const renderClassNames = () => {

		let variantClassNames = "";
		let sizeClassNames = "";

		switch (variant) {
		case "secondary":
			variantClassNames = "bg-transparent rounded-md border-darkBlue border-2 border-solid hover:bg-darkBlue10";
			break;
		case "tertiary":
			variantClassNames = "";
			break;
		case "blue":
			variantClassNames = "bg-lightBlue";
			break;
		default: // primary
			variantClassNames = "text-lightGrey bg-darkBlue hover:darkBlue90";
		}

		switch (size) {
		case "sm":
			sizeClassNames = "button-sm h-8 rounded-xl px-4 py-3 flex items-center justify-center";
			break;
		case "lg":
			sizeClassNames = "button-base h-12 rounded-xl px-4 flex items-center justify-center";
			break;
		default: // md
			sizeClassNames = "button-base h-10 rounded-xl px-4 flex items-center justify-center";
		}

		return `${variantClassNames} ${sizeClassNames}`;

	};

	return (

		<button className={`${renderClassNames()} ${styles ? styles : ""}`}>

			{props.children}

		</button>

	);
};

export default Button;
