"use client";

const Input = (props) => {

	const {
		label,
		id,
		placeholder,
		type,
	} = props;


	return (

		<div class="mb-4 flex">
			<input
				class="rounded-lg"
				id={id}
				label={label}
				placeholder={placeholder}
				type={type}
			/>

		</div >

	)

}

export default Input;