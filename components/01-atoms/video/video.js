"use client";

const Video = ({ videoUrl, width, height }) => {
	return (

		<iframe
			width={width}
			height={height}
			src={videoUrl}
			allowfullscreen>

		</iframe>

	);
};

export default Video;