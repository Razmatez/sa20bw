import React, { useState } from "react";


const Checkbox = (props) => {
	const { id, label, type, style } = props;
	const [isChecked, setIsChecked] = useState(false);

	const handleOnChange = () => setIsChecked(!isChecked);

	return (
		<div className="flex items-center gap-2">
			<input type={type} className={style} id={id} name="myCheckbox" onChange={handleOnChange} />
			<label className="font-rubik base text-darkBlue" htmlFor={id}>{label}</label>
		</div>
	);
};

export default Checkbox;
