import React, { useState } from "react";

const Checkbox = (props) => {
	const { id, label, type, style, value, disabled, disabledStyle } = props;
	const [isChecked, setIsChecked] = useState(false);

	const handleOnChange = () => {
		if (!disabled) {
			setIsChecked(!isChecked);
		}
	};

	return (
		<div className="flex items-center gap-2">

			<input
				type={type}
				className={disabled ? disabledStyle : style}
				id={id}
				disabled={disabled}
				checked={isChecked}
				value={value}
				onChange={handleOnChange}
			/>

			<label className={disabled ? "text-disabledGrey cursor-not-allowed base" : "font-rubik base text-darkBlue"}
				for={id}>
				{label}
			</label>

		</div>
	);
};

export default Checkbox;
