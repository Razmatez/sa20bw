import {Header} from "../../03-organisms/site/site-header/Header";
import SocialMenu from "./social-menu/social-menu";

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const breadcrumbs = () => {};

export const inline = () => {};

export const main = () => <Header />;

export const social = () => <SocialMenu />;
