const Divider = (props) => {

	const {
		darkTheme = false
	} = props;

	return (

		<hr className={`h-px ${darkTheme ? "border-grey relative" : "h-px border-darkGrey relative"}`} />

	)

}

export default Divider;