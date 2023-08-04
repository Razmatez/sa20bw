/**
 * Storybook Definition.
 */
import { Pagination } from "./pagination";

export default {
	title: "Atoms/Pagination",
	component: Pagination,
	tags: ["docsPage"],
	argTypes: {},
};

export const pagination = () => <Pagination />;