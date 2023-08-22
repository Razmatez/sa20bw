"use client";
import { Flowbite, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";

const Input = (props) => {

	const {
		label,
		id,
		placeholder,
		required,
		type,
		helperText
	} = props;

	const customTheme = {

		textInput: {
			field: {
				input: {
					withAddon: {
						off: "rounded-sm"
					}
				}
			}
		}
	}

	return (

		<Flowbite theme={{ theme: customTheme }} >

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
					icon={HiMail}
					id={id}
					placeholder={placeholder}
					required={required}
					type={type}
					helperText={helperText}
				/>

			</div>

		</Flowbite >

	)

}

export default Input;