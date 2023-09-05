const Divider = (props) => {

	const {
		darkTheme = false
	} = props;

	const renderClassName = darkTheme ? "h-px bg-grey relative" : "h-px bg-darkGrey relative";

	return (

		<hr className={renderClassName} />

	)

}

export default Divider;