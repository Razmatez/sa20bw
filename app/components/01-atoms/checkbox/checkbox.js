"use client";
import { useState } from "react";
import { Checkbox as CheckboxComponent, Label } from "flowbite-react";

const Checkbox = (props) => {

	const {
		id,
		label
	} = props;

	const [isChecked, setIsChecked] = useState(false);

	const handleOnChange = () => setIsChecked(!isChecked);

	return (

		<div className="flex items-center gap-2">

			<CheckboxComponent
				checked={isChecked}
				id={id}
				onChange={handleOnChange}
			/>

			<Label htmlFor={id}>
				{label}
			</Label>

		</div>

	)
}

export default Checkbox;