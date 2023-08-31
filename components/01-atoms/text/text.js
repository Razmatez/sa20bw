const Text = (props) => {

	const { content } = props;

	return (
		<div dangerouslySetInnerHTML={{ __html: content }} />
	)
}

export default Text;