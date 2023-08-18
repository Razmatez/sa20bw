"use client";
import { Button as ButtonComponent, Flowbite } from "flowbite-react";

const Button = (props) => {

	const {
		variant,
		size = "md",
		type = "button",
		onClick
	} = props;

	const customTheme = {
		button: {
			pill: {
				off: "rounded-sm"
			},
			base: "group flex h-min items-center justify-center p-0 text-center",
			inner: {
				base: "flex items-center"
			},
			size: {
				sm: "font-barlow text-[14px] leading-[18px] tracking-[0.04em] py-1.5 px-4",
				md: "font-barlow text-base tracking-[0.04em] py-2 px-4",
				lg: "font-barlow text-base tracking-[0.04em] py-3 px-4"
			}
		}
	}

	const renderClassName = () => {

		let className = "";

		switch (variant) {
		case "secondary":
			className = "border-2 border-darkBlue bg-transparent text-darkBlue"
			break;
		case "tertiary":
			className = "bg-transparent text-darkBlue"
			break;
		case "blue":
			className = "bg-lightBlue text-darkBlue"
			break;
		default:
			className = "bg-darkBlue text-lightGrey"
		}

		return className;

	}

	return (

		<Flowbite theme={{ theme: customTheme }}>

			<ButtonComponent
				className={`rounded-sm ${renderClassName()}`}
				size={size}
				type={type}
				onClick={onClick}
			>

				{props.children}

			</ButtonComponent>

		</Flowbite>
	)

}

export default Button;