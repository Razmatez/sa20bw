import DefaultTabs from './tab';
import { MdDashboard } from 'react-icons/md';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';

export default {
	title: 'Atoms/Tabs',
	component: DefaultTabs,
	argTypes: {}
};



export const Default = {
	name: "Tabs",
	args: {
		tabs: [
			{
				title: 'Profile',
				icon: HiUserCircle,
				content: 'Profile tab\'s associated content',
			},
			{
				title: 'Dashboard',
				icon: MdDashboard,
				content: 'Dashboard tab\'s associated content',
			},
			{
				title: 'Settings',
				icon: HiAdjustments,
				content: 'Settings tab\'s associated content',
			},
			{
				title: 'Contacts',
				icon: HiClipboardList,
				content: 'Contacts tab\'s associated content',
			},
			{
				title: 'Disabled',
				disabled: true,
				content: 'Disabled content',
			},
		]
	}
};

export const Secondary = {
	name: "Secondary tabs",
	args: {
		tabs: [
			{
				title: 'Profile',
				content: 'Profile tab\'s associated content',
			},
			{
				title: 'Dashboard',
				content: 'Dashboard tab\'s associated content',
			},
			{
				title: 'Settings',
				content: 'Settings tab\'s associated content',
			},
			{
				title: 'Contacts',
				content: 'Contacts tab\'s associated content',
			},
			{
				title: 'Disabled',
				content: 'Disabled content',
			},
		]
	}
};


