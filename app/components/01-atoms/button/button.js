"use client";
import { Button as ButtonComponent } from "flowbite-react";

const Button = (props) => {

	const {
		isPrimary = true,
		text = "Button",
		type = "button",
		onClick
	} = props;

	return (
		<>
			<ButtonComponent
				className={isPrimary ? "bg-green-400" : "bg-stone-200 text-slate-950"}
				type={type}
				onClick={onClick}
			>
				{text}
			</ButtonComponent>
		</>
	)
}

export default Button;