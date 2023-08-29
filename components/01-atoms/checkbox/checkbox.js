import React, { useState } from "react";

const Checkbox = (props) => {
	const { disabled, id, label, type, value } = props;
	const [isChecked, setIsChecked] = useState(false);

	const handleOnChange = () => {
		if (!disabled) {
			setIsChecked(!isChecked);
		}
	};

	return (
		<div className="flex items-center gap-2">

			<input
				checked={isChecked}
				className={disabled ? "cursor-not-allowed border-grey bg-lightGrey rounded-sm" : "checked:bg-darkBlue rounded-sm focus:outline-none focus:ring focus:ring-transparent border-grey hover:border-darkBlue"}
				disabled={disabled}
				id={id}
				type={type}
				value={value}
				onChange={handleOnChange}
			/>

			<label className={disabled ? "text-darkBlue30 cursor-not-allowed body-base" : "body-base"}
				for={id}>
				{label}
			</label>

		</div>
	);
};

export default Checkbox;
