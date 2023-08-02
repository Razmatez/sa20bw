/**
 * Storybook Definition.
 */
import { Dropdown } from "./dropdown";

export default {
	title: "Atoms/Dropdown",
	component: Dropdown,
	tags: ["docsPage"],
	argTypes: {},
};

export const dropdown = () => <Dropdown />;