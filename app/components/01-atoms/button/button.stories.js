import Button from "./button";

export default {
	title: "Atoms/Button",
	component: Button,
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"]
		},
		type: {
			control: "select",
			options: ["button", "reset", "submit"]
		}
	},
};

export const Primary = {
	args: {
		variant: "primary",
		children: "Button",
		size: "md",
		type: "button",
		onClick: () => {}
	},
};

export const Secondary = {
	args: {
		...Primary.args,
		variant: "secondary",
	},
};

export const Tertiary = {
	args: {
		...Primary.args,
		variant: "tertiary",
	},
};

export const Blue = {
	args: {
		...Primary.args,
		variant: "blue",
	},
};