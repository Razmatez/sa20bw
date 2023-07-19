import { Link } from "./link";

/**
 * Storybook Definition.
 */

const meta = {
    title: 'Atoms/Link',
    component: Link
}

export default meta;

export const Default = {
    args: {
        label: "Link",
        href: "",
        disabled: false,
        underlineOnHover: true
    },
};
