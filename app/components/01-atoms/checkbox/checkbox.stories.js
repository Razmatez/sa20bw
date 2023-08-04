/**
 * Storybook Definition.
 */
import { Checkbox } from "./checkbox";

export default {
	title: "Atoms/Checkbox",
	component: Checkbox,
	tags: ["docsPage"],
	argTypes: {},
};

export const checkbox = () => <Checkbox key={1} checked={true} label={"Some label"}/>;