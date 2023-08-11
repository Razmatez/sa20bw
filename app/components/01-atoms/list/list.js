const List = (props) => {

	const {
		items,
		styled
	 } = props;

	const renderItems = items.map((item, index) => (

		<li key={index}>
			{item}
		</li>

	))

	return (

		<ul className={styled ? "list-disc" : "list-none"}>

			{renderItems}

		</ul>

	)

}

export default List;