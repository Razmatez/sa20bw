import React from "react";

const Radio = (props) => {
    const { disabled, id, label, type, value } = props;
    return (
        <div className="flex items-center gap-2">

            <input
                className={disabled ? "cursor-not-allowed border-grey bg-lightGrey" : "checked:bg-darkBlue focus:outline-none focus:ring focus:ring-transparent border-grey hover:border-darkBlue"}
                disabled={disabled}
                id={id}
                type={type}
                value={value}
            />

            <label className={disabled ? "cursor-not-allowed body-base text-darkBlue30" : "body-base"}
                for={id}>
                {label}
            </label>

        </div>
    );
};

export default Radio;