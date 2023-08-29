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
		value: "",
		disabled: true,

	},
};
