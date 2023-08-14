import Image from './image';

export default {
	title: 'Atoms/Image',
	component: Image,
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
	image: "https://flowbite.com/docs/images/examples/image-1@2x.jpg",
	style: "h-auto max-w-full",
	altText: "alt text"
};

export const roundImage = Template.bind({});
roundImage.args = {
	image: "https://flowbite.com/docs/images/examples/image-1@2x.jpg",
	style: "rounded-full w-96 h-96",
	altText: "alt text"
};