/**
 * Storybook Definition.
 */
import Checkbox from "./checkbox";

export default {
	title: "Atoms/Checkbox",
	component: Checkbox,
	argTypes: {},
};

export const Default = {
	name: "Checkbox",
	args: {
		id: "",
		label: "Checkbox label",
	},
};