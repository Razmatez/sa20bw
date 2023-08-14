import Hamburger from "./hamburger";

export default {
	title: "Atoms/Hamburger",
	component: Hamburger
}

export const Default = {
	args: {
		menuItems: [
			{ item: "Home", link: "#" },
			{ item: "About", link: "#" },
			{ item: "Contact", link: "#" }
		]
	}
};
