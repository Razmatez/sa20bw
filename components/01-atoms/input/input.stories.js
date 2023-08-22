import { HiMail } from 'react-icons/hi';

import Input from "./input";

export default {
	title: "Atoms/Input",
	component: Input,
	argTypes: {
		required: {
			control: "boolean"
		},
		type: {
			control: "select",
			options: ["email", "number", "password", "reset", "search", "submit", "text", "url"]
		}
	}
}

export const Default = {
	args: {
		id: "",
		placeholder: "name@email.com",
		required: true,
		icon: HiMail,
		helperText: ""
	},
};

export const WithLabel = {
	args: {
		...Default.args,
		label: "Input label"
	},
};

