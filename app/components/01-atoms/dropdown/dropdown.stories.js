import Dropdown from "./dropdown";

export default {
	title: "Atoms/Dropdown",
	component: Dropdown,
	argTypes: {
		size: {
			control: "radio",
			options: ["sm", "lg"]
		}
	},
};

export const Default = {
	name: "Dropdown",
	args: {
		items: [{ name: "Item 1", link: "" }, { name: "Item 2", link: "" }, { name: "Item 3", link: "" }, { name: "Item 4", link: "" }],
		label: "Dropdown",
		size: "lg"
	},
};