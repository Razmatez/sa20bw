/**
 * Storybook Definition.
 */
import Checkbox from "./checkbox";

export default {
	title: "Atoms/Checkbox",
	component: Checkbox,
	argTypes: {},
};

export const Primary = {
	args: {
		id: "",
		label: "Checkbox label",
	},
};