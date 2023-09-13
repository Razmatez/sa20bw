import React, { useState } from "react";
import ChevronDown from "../../../assets/icons/chevron/chevron-down-dark.svg";

const Dropdown = ({ options }) => {

	const [selectedOption, setSelectedOption] = useState(options[options.length - 1]);
	const [isOpen, setIsOpen] = useState(false);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (

		<div className="dropdown relative">

			<button
				className="dropdown-toggle flex items-center justify-between w-full h-10 lg:h-12 px-4 border border-grey rounded-2xl cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="body-lg">
					{selectedOption.label}
				</div>

				<ChevronDown />

			</button>

			{isOpen && (

				<ul className="dropdown-menu absolute w-full bg-white rounded-2xl shadow-4 mt-1 py-2 z-10">

					{options.map((option) => (

						<li
							className={`cursor-pointer py-3 px-4 lg:p-4 hover:bg-lightGrey ${selectedOption === option ? "body-base-bold" : "body-base"}`}
							key={option.value}
							onClick={() => handleOptionClick(option)}
						>
							{option.label}
						</li>

					))}

				</ul>

			)}

		</div>
	)

}

export default Dropdown;
