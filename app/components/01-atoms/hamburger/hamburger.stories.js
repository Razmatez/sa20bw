import { Hamburger } from "./hamburger";

/**
 * Storybook Definition.
 */

const meta = {
    title: 'Atoms/Hamburger',
    component: Hamburger
}

export default meta;

export const Default = {
    args: {
        label: "Hamburger",
    },
};
