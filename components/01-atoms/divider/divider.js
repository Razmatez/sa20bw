const Divider = (props) => {

	const {
		darkTheme = false
	} = props;

	const renderClassName = darkTheme ? "h-px bg-grey" : "h-px bg-darkGrey";

	return (

		<hr className={renderClassName} />

	)

}

export default Divider;