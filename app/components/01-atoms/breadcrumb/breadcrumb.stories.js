import Breadcrumb from "./breadcrumb";

export default {
	title: "Atoms/Breadcrumb",
	component: Breadcrumb,
	argTypes: {},
};

export const Default = {
	name: "Breadcrumb",
	args: {
		items: [
			{ name: "Home", link: "#" },
			{ name: "Page 2", link: "#" },
			{ name: "Page 3", link: "#" },
			{ name: "Current page" }
		]
	},
};