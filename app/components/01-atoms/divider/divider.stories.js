import Divider from "./divider";

export default {
    title: "Atoms/Divider",
    component: Divider,
    argTypes: {}
}

export const Light = {
    args: {
        darkTheme: false
    },
};

export const Dark = {
    args: {
        darkTheme: true
    },
};