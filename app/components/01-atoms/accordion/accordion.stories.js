import Accordion from "./accordion";

export default {
	title: "Atoms/Accordion",
	component: Accordion,
	argTypes: {},
};

export const Default = {
	name: "Accordion",
	args: {
		items: [
			{
				title: "Accordion title 1",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			},
			{
				title: "Accordion title 2",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
			},
			{
				title: "Accordion title 3",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
			}
		]
	}
};