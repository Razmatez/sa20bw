const Text = (props) => {

	const { content, className } = props;

	return (

		<p className={`${className}`}>

			{content}

		</p>

	)
}

export default Text;