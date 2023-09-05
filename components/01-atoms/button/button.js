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
