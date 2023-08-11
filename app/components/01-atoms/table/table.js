"use client";
import { Table as TableComponent } from "flowbite-react";

const Table = (props) => {

	const {
		contentHeadings,
		content
	} = props;

	const renderHeadings = contentHeadings.map((item, index) => (

		<TableComponent.HeadCell
			key={index}
		>
			{item}
		</TableComponent.HeadCell>

	))

	const renderRows = content.map((row, index) => (

		console.log("row " + row),

		<TableComponent.Row
			className="bg-white dark:border-gray-700 dark:bg-gray-800"
			key={index}
		>
			{row.map((cell, index) => (
				<TableComponent.Cell
					className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
					key={index}
				>
            		{cell}
				</TableComponent.Cell>
			))}


		</TableComponent.Row>
	))

	return (

		<TableComponent>

			<TableComponent.Head>

				{renderHeadings}

			</TableComponent.Head>

			<TableComponent.Body className="divide-y">

				{renderRows}

			</TableComponent.Body>

		</TableComponent>

	)

}

export default Table;


