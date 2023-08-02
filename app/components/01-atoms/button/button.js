"use client";
import { Button as ButtonComponent } from "flowbite-react";

const Button = (props) => {

	const {
		isPrimary = true
	} = props;

	return (
		<>
			{isPrimary ? (
			    <ButtonComponent>
                    Primary
				</ButtonComponent>
			) :	(
				<ButtonComponent color="gray">
                    Secondary
				</ButtonComponent>
			)}

		</>
	)
}

export default Button;