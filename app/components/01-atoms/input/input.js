"use client";
import { Label, TextInput } from "flowbite-react";

const Input = (props) => {

	const {
		id,
		label,
		placeholder,
		required,
		type
	 } = props;

	return (

		<div>

			{label && (

				<div className="mb-2 block">

					<Label
						htmlFor={id}
						value={label && required ? `${label} *` : label}
					/>

				</div>

			)}

			<TextInput
				id={id}
				placeholder={placeholder}
				required={required}
				type={type}
			/>

		</div>

	)

}

export default Input;