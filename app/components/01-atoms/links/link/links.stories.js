import { Link } from "./link";

/**
 * Storybook Definition.
 */

const meta = {
    title: 'Atoms/Links',
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
