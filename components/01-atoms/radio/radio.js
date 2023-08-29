import React from "react";

const Radio = (props) => {
    const { id, label, type, style, disabled, disabledStyle } = props;

    return (
        <div className="flex items-center gap-2">

            <input
                type={type}
                className={disabled ? disabledStyle : style}
                id={id}
                disabled={disabled}
            />

            <label className={disabled ? "text-disabledGrey cursor-not-allowed base" : "font-rubik base text-darkBlue"}
                for={id}>
                {label}
            </label>

        </div>
    );
};

export default Radio;