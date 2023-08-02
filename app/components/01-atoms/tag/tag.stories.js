/**
 * Storybook Definition.
 */
import { Tag } from "./tag";

export default {
	title: "Atoms/Tag",
	component: Tag,
	tags: ["docsPage"],
	argTypes: {},
};

export const tag = () => <Tag />;