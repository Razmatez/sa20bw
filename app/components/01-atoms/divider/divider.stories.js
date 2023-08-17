import divider from "./divider";

export default {
    title: "Atoms/divider",
    component: divider,
    argTypes: {}
}

export const Light = {
    args: {
        styles: "bg-grey h-1",

    },
};

export const Dark = {
    args: {
        styles: "bg-black h-1",

    },
};