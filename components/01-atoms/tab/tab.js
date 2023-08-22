import React from 'react';
import { Tabs } from 'flowbite-react';

export default function DefaultTabs(props) {

	const { tabs } = props;

	return (
		<Tabs.Group
			aria-label="Default tabs"
			style="default"
		>

			{tabs.map((tab, index) => (

				<Tabs.Item
					key={index}
					icon={tab.icon}
					title={tab.title}
					disabled={tab.disabled}
				>

					<p>

						{tab.content}

					</p>

				</Tabs.Item>

			))}

		</Tabs.Group>

	);
}

