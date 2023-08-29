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
        id: "",
        label: "Radio label",
        type: "radio",
        style: "checked:bg-darkBlue focus:outline-none focus:ring focus:ring-transparent border-grey hover:border-darkBlue",
        disabled: true,
        disabledStyle: "cursor-not-allowed border-grey bg-lightGrey rubik"
    },
};