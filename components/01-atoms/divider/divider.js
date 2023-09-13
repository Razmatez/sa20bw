const Divider = (props) => {

	const {
		darkTheme = false
	} = props;

	return (

		<hr className={`w-full h-px ${darkTheme ? "border-darkGrey relative" : "border-grey relative"}`} />

	)

}

export default Divider;