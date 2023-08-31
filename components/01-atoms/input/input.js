"use client";

const Input = (props) => {

	const {
		label,
		id,
		placeholder,
		type,
	} = props;


	return (

		<input
			className="rounded-lg"
			id={id}
			label={label}
			placeholder={placeholder}
			type={type}
		/>

	)

}

export default Input;