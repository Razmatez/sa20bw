import Checkbox from "./checkbox";

export default {
	title: "Atoms/Checkbox",
	component: Checkbox,
	argTypes: {},
};

export const Default = {
	name: "Checkbox",
	component: Checkbox,
	args: {
		id: "",
		label: "Checkbox label",
		type: "checkbox",
		style: "checked:bg-darkBlue rounded-sm focus:outline-none focus:ring focus:ring-transparent border-grey hover:border-darkBlue",
		value: ""
	},
};
