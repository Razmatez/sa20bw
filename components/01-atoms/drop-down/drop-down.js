import React, { useState } from 'react';

const Dropdown = () => {
    const initialOptions = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const [options] = useState(initialOptions);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button
                className="dropdown-toggle border border-grey rounded-2xl body-lg py-2 pl-4"
                onClick={() => setIsOpen(!isOpen)}
            >

                {selectedOption ? selectedOption.label : 'Select an option'}

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
