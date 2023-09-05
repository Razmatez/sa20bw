const Divider = (props) => {

	const {
		darkTheme = false
	} = props;

	const renderClassName = darkTheme ? "h-px border-grey relative" : "h-px border-darkGrey relative";

	return (

		<hr className={renderClassName} />

	)

}

export default Divider;