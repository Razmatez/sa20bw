const Divider = (props) => {

    const {
        darkTheme = false
    } = props;

    const renderClassNames = darkTheme ? "bg-grey h-1" : "bg-black h-1";

    return (

        <hr className={renderClassNames} />

    )

}

export default Divider;