import {Checkbox} from "./checkbox/checkbox";
import {Radio} from "./radio/radio";

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Forms' };

export const checkboxes = () => <Checkbox key={1} checked={true} label={"Some label"}/>;

export const radioButtons = () => <Radio key={1} checked={true} label={"Radio"} />;

export const selectDropdowns = () => {

};

export const textfieldsExamples = () => {

};
