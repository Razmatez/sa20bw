import Button from "./button";

export default {
	title: "Atoms/Button",
	component: Button,
	argTypes: {
		type: {
			control: "select",
			options: ["button", "reset", "submit"]
		}
	},
};

export const Primary = {
	args: {
		isPrimary: true,
		text: "Button",
		type: "button",
		onClick: () => {}
	},
};

export const Secondary = {
	args: {
		...Primary.args,
		isPrimary: false
	},
};
