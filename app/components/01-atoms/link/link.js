
export const Link = ({
        label,
        href="#",
        disabled = false,
        underlineOnHover = true
    }) => {

    const underlineClass = underlineOnHover && "hover:underline";
    const disabledClass = disabled && "text-gray-700 opacity-50 pointer-events-none";

    return (
        <a
            href={href}
            className={`text-blue-600 ${underlineClass} ${disabledClass}`}
        >
            {label}
        </a>
    )

}