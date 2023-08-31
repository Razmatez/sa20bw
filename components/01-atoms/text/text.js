const Text = (props) => {

	const { content, className } = props;

	return (
		<div dangerouslySetInnerHTML={{ __html: content }} />
	)
}

export default Text;