import ChevronRightDarkIcon from "../../../assets/icons/chevron/chevron-right-dark.svg";

const Button = (props) => {

	const {
		variant,
		size,
		styles,
		withArrowLeft,
		withArrowRight
	} = props;

	const renderClassNames = () => {

		let variantClassNames = "";
		let sizeClassNames = "";

		switch (variant) {
			case "secondary":
				variantClassNames = "bg-transparent border-darkBlue border-2 border-solid hover:bg-darkBlue10";
				break;
			case "tertiary":
				variantClassNames = "";
				break;
			case "blue":
				variantClassNames = "bg-lightBlue";
				break;
			case "invert":
				variantClassNames = "bg-transparent rounded-md border-white border-2 border-solid"
			default: // primary
				variantClassNames = "text-lightGrey bg-darkBlue hover:darkBlue90";
		}

		const renderIconPadding = () => {

			if (variant === "tertiary") {
				return "";
			} else {
				if (withArrowLeft) {
					return "pl-3 pr-4";
				} else if (withArrowRight) {
					return "pl-4 pr-3";
				} else {
					return "px-4";
				}
			}

		}

		switch (size) {
			case "sm":
				sizeClassNames = `button-sm h-8 rounded-xl flex items-center justify-center ${renderIconPadding()}`;
				break;
			case "lg":
				sizeClassNames = `button-base h-12 rounded-xl flex items-center justify-center ${renderIconPadding()}`;
				break;
			default: // md
				sizeClassNames = `button-base h-10 rounded-xl flex items-center justify-center ${renderIconPadding()}`;
		}

		return `${variantClassNames} ${sizeClassNames}`;

	};

	return (

		<button className={`${renderClassNames()} ${styles ? styles : ""}`}>

			{!withArrowLeft && !withArrowRight && props.children}

			{withArrowLeft && (

				<div className="flex items-center">

					<ChevronRightDarkIcon
						className="mr-2"
						width={24}
						height={24}
						alt="arrow"
					/>

					<div>
						{props.children}
					</div>

				</div>

			)}

			{withArrowRight && (

				<div className="flex items-center">

					<div>
						{props.children}
					</div>

					<ChevronRightDarkIcon
						className="ml-2"
						width={24}
						height={24}
						alt="arrow"
					/>

				</div>

			)}

		</button>

	);
};

export default Button;
