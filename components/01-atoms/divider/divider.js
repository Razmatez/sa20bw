const Divider = (props) => {

	const {
		darkTheme = false
	} = props;

	return (

		<hr className={`h-px ${darkTheme ? "border-darkGrey relative" : "h-px border-grey relative"}`} />

	)

}

export default Divider;