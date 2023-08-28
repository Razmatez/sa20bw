import React from "react";

const Radio = (props) => {
    const { id, label, type, style } = props;

    return (
        <div className="flex items-center gap-2">
            <input type={type} className={style} id={id} name="radioOptions" value={id} />
            <label className="font-rubik base text-darkBlue " htmlFor={id}>{label}</label>
        </div>
    );
};

export default Radio;