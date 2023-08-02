/**
 * Storybook Definition.
 */
import { Radio } from "./radio";

export default {
	title: "Atoms/Radio",
	component: Radio,
	tags: ["docsPage"],
	argTypes: {},
};

export const radio = () => <Radio key={1} checked={true} label={"Radio"} />;