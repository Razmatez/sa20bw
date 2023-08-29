import Radio from "./radio";

export default {
    title: "Atoms/Radio",
    component: Radio,
    argTypes: {},
};

export const Default = {
    name: "Radio",
    component: Radio,
    args: {
        disabled: true,
        id: "",
        label: "Radio label",
        type: "radio",
        value: ""

    },
};