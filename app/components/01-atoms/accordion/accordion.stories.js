/**
 * Storybook Definition.
 */
import { Accordion } from "./accordion";

export default {
	title: "Atoms/Accordion",
	component: Accordion,
	tags: ["docsPage"],
	argTypes: {},
};

export const accordion = () => <Accordion />;