/**
 * Storybook Definition.
 */
import List from "./list";

export default {
	title: "Atoms/List",
	component: List,
	argTypes: {}
};

export const BulletedList = {
	args: {
		items: ["List item 1", "List item 2", "List item 3", "List item 4"],
		styled: true
	}
};

export const UnbulletedList = {
	args: {
		...BulletedList.args,
		styled: false
	}
};