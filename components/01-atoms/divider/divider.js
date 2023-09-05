const Divider = (props) => {

	const {
		darkTheme = false
	} = props;

	return (

		<hr className={`h-px ${darkTheme ? "border-darkGrey" : "h-px border-grey"}`} />

	)

}

export default Divider;