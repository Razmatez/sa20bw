import ResponsiveImage from "./responsiveImage";

export default {
	title: "Atoms/ResponsiveImage",
	component: ResponsiveImage,
};

export const Default = {
	name: "Responsive Image",
	args: {
		"heroMedia": {
			"title": "PAARL ROYALS’ VAN BUUREN TO LEAD SA EMERGING XI",
			"content": {
				"id": "d3ab0ba1-2885-4ae5-bcdb-23ae5fa167cd",
				"contentType": "IMAGE",
				"image": "https://media-cdn.incrowdsports.com/9fea300b-5d37-4d00-9a94-dba4813e142c.png",
				"altText": "img"
			}
		},
	}
};

export const Youtube = {
	name: "Youtube Image",
	args: {
		"heroMedia": {
			"title": "Josh van emden 6 video",
			"content": {
				"id": "255182c7-e5fe-4428-a394-00bc592deabb",
				"contentType": "VIDEO",
				"sourceSystem": "YOUTUBE",
				"sourceSystemId": "SVYCiCddkCQ",
				"link": "https://www.youtube.com/watch?v=SVYCiCddkCQ",
				"videoThumbnail": "https://img.youtube.com/vi/SVYCiCddkCQ/sddefault.jpg"
			}
		},
	}
};