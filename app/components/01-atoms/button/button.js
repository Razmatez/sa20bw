"use client";
import { Button as ButtonComponent, Flowbite } from "flowbite-react";

const Button = (props) => {

	const {
		isPrimary = true,
		text = "Button",
		type = "button",
		onClick
	} = props;

	const customTheme = {
		button: {
			pill: {
				off: "rounded-sm"
			}
		}
	}

	return (
		<Flowbite theme={{ theme: customTheme }}>

			<ButtonComponent
				className={isPrimary ? "bg-green-400" : "bg-lightBlue text-slate-950"}
				type={type}
				onClick={onClick}
			>
				{text}
			</ButtonComponent>

		</Flowbite>
	)
}

export default Button;