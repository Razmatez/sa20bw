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
			base: "group flex h-min items-center justify-center p-0 text-center",
			color: {
				primary: "bg-darkBlue text-lightGrey",
				secondary: "border-2 border-darkBlue bg-transparent text-darkBlue",
				tertiary: "bg-transparent text-darkBlue",
				blue: "bg-lightBlue text-darkBlue"
			},
			inner: {
				base: "flex items-center",
				outline: "border-0"
			},
			pill: {
				off: "rounded-sm"
			},
			size: {
				sm: "h-8 button-sm px-4",
				md: "h-10 button-base px-4",
				lg: "h-12 button-base px-4"
			}
		}
	}

	return (

		<Flowbite theme={{ theme: customTheme }}>

			<ButtonComponent
				color={variant}
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