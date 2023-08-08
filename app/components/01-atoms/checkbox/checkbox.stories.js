/**
 * Storybook Definition.
 */
import Checkbox from "./checkbox";

export default {
	title: "Atoms/Checkbox",
	component: Checkbox,
	argTypes: {
		handleOnChange: { action: "onChange" }
	},
};

export const Default = {
	name: "Checkbox",
	args: {
		id: "",
		label: "Checkbox label",
	},
};