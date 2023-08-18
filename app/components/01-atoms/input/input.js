"use client";
import { Label, TextInput, Flowbite } from "flowbite-react";
import { HiMail } from 'react-icons/hi';

const Input = (props) => {

	const {
		helperText,
		id,
		label,
		placeholder,
		required,
		type
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
					className="rounded-sm"
					helperText={helperText}
					id={id}
					placeholder={placeholder}
					required={required}
					type={type}
					icon={HiMail}
				/>

			</div>
		</Flowbite >

	)

}

export default Input;