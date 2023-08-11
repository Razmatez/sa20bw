import Video from './video';

export default {
  title: 'Atoms/Video',
  component: Video,
};

const Template = (args) => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoUrl: "https://www.youtube.com/embed/qN4ooNx77u0",
};