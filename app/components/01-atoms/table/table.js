"use client";

import { Table as TableComponent } from "flowbite-react";

const Table = () => {
	return (
		<TableComponent>
			<TableComponent.Head>
				<TableComponent.HeadCell>
          Product name
				</TableComponent.HeadCell>
				<TableComponent.HeadCell>
          Color
				</TableComponent.HeadCell>
				<TableComponent.HeadCell>
          Category
				</TableComponent.HeadCell>
				<TableComponent.HeadCell>
          Price
				</TableComponent.HeadCell>
				<TableComponent.HeadCell>
					<span className="sr-only">
            Edit
					</span>
				</TableComponent.HeadCell>
			</TableComponent.Head>
			<TableComponent.Body className="divide-y">
				<TableComponent.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
					<TableComponent.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple MacBook Pro 17
					</TableComponent.Cell>
					<TableComponent.Cell>
            Sliver
					</TableComponent.Cell>
					<TableComponent.Cell>
            Laptop
					</TableComponent.Cell>
					<TableComponent.Cell>
            $2999
					</TableComponent.Cell>
					<TableComponent.Cell>
						<a
							className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							href="/tables"
						>
							<p>
                Edit
							</p>
						</a>
					</TableComponent.Cell>
				</TableComponent.Row>
				<TableComponent.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
					<TableComponent.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
						<p>
              Microsoft Surface Pro
						</p>
					</TableComponent.Cell>
					<TableComponent.Cell>
            White
					</TableComponent.Cell>
					<TableComponent.Cell>
            Laptop PC
					</TableComponent.Cell>
					<TableComponent.Cell>
            $1999
					</TableComponent.Cell>
					<TableComponent.Cell>
						<a
							className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							href="/tables"
						>
							<p>
                Edit
							</p>
						</a>
					</TableComponent.Cell>
				</TableComponent.Row>
				<TableComponent.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
					<TableComponent.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Magic Mouse 2
					</TableComponent.Cell>
					<TableComponent.Cell>
            Black
					</TableComponent.Cell>
					<TableComponent.Cell>
            Accessories
					</TableComponent.Cell>
					<TableComponent.Cell>
            $99
					</TableComponent.Cell>
					<TableComponent.Cell>
						<a
							className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							href="/tables"
						>
							<p>
                Edit
							</p>
						</a>
					</TableComponent.Cell>
				</TableComponent.Row>
			</TableComponent.Body>
		</TableComponent>
	)
}

export default Table;


