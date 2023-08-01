/**
 * Storybook Definition.
 */
import { Image } from "./image";

export default {
	title: 'Atoms/Responsive Image',
	component: Image,
	tags: ["docsPage"],
	argTypes: {},
};

export const image = () => (
	<Image/>
)