import Checkbox from "./checkbox";
import Radio from "./radio";

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
		style: "checked:bg-darkBlue rounded-sm focus:outline-none focus:ring focus:ring-transparent"
	},
};

export const RadioOption = {
	name: "Radio",
	component: Radio,
	args: {
		id: "",
		label: "Radio label",
		type: "radio",
		style: "checked:bg-darkBlue focus:outline-none focus:ring focus:ring-transparent",
	},
};
