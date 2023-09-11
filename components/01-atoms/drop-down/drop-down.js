import React, { useState } from "react";
import Chev from "../../../assets/icons/chevron/chevron-down-dark.svg";

const Dropdown = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown mr-4 mt-8">
            <button
                className="dropdown-toggle border border-grey rounded-2xl body-lg py-2 pl-4 cursor-pointer flex items-center justify-between w-full"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption ? selectedOption.label : options[0].name}
                <Chev className="mx-4" />
            </button>
            {isOpen && (
                <ul className="dropdown-menu border border-grey rounded-2xl shadow-lg p-4 mt-1">
                    {options.map((option) => (
                        <li
                            className="body-base cursor-pointer"
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
