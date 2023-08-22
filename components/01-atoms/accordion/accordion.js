"use client";
import { Accordion as AccordionComponent } from "flowbite-react";

const Accordion = (props) => {

	const { items } = props;

	const renderItems = items.map((item, index) => (

		<AccordionComponent.Panel key={index}>

			<AccordionComponent.Title>
				{item.title}
			</AccordionComponent.Title>

			<AccordionComponent.Content>

				<p className="mb-2 text-gray-500">
					{item.content}
				</p>

			</AccordionComponent.Content>

		</AccordionComponent.Panel>

	))

	return (

		<AccordionComponent>

			{renderItems}

		</AccordionComponent>

	)

}

export default Accordion;