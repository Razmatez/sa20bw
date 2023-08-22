"use client";
import { useState } from "react";
import { Label, Radio as RadioComponent } from "flowbite-react";

const Radio = (props) => {

	const {
		id,
		label,
		name,
		value
	} = props;

	const [isChecked, setIsChecked] = useState(false);

	const handleOnClick = () => setIsChecked(!isChecked);

	return (

		<div className="flex items-center gap-2">

			<RadioComponent
				checked={isChecked}
				id={id}
				name={name}
				value={value}
				onClick={handleOnClick}
			/>

			<Label htmlFor={id}>
				{label}
			</Label>

		</div>

	)

}

export default Radio;