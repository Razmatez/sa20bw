const Link = (props) => {

	const {
		label,
		href = "#",
		disabled = false,
		underlineOnHover = true
	} = props;

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

export default Link;