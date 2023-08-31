import Header from "./header";

export default {
	title: "Molecules/Header",
	component: Header,
	parameters: {
		layout: "fullscreen"
	}
};

export const Default = {
	name: "Header",
	args: {
		content: [
			{ item: "News", link: "/news" },
			{ item: "Matches", link: "/matches" },
			{ item: "Videos", link: "/videos" },
			{ item: "Stats", link: "/stats" },
			{ item: "Teams", link: "/teams" },
			{ item: "More", link: "/more",
				children: [
					{ item: "About SA20", link: "/about" },
					{ item: "Gallery", link: "/gallery" },
					{ item: "Fan Poll", link: "/fan-poll" },
					{ item: "Auction", link: "/auction" }
				]
			}
		]
	}
}