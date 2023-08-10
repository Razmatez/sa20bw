import Table from "./table";

export default {
	title: "Atoms/Table",
	component: Table,
	argTypes: {},
};

export const Primary = {
	args: {
		contentHeadings: ["Heading 1", "Heading 2", "Heading 3"],
		content: [["Cell 1", "Cell 2", "Cell 3"], ["Cell 1", "Cell 2", "Cell 3"]]
	},
};