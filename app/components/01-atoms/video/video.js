"use client";

const Video = ({ videoUrl }) => {
	return (
		<video className="w-96" controls type="video/mp4">
			<source src={videoUrl}  />
		</video>
	);
  };
  
  export default Video;