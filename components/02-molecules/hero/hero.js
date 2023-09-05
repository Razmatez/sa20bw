import ResponsiveImage from "../../01-atoms/image/responsiveImage";

const Hero = (props) => {

	const {
		content
	} = props;

	return (

		<div className="relative h-[485px] lg:h-[640px]">

			{/* <ResponsiveImage
				heroMedia={content}
				styles="w-full h-full object-cover"
			/> */}

			{content.contentType === "IMAGE" && (

				<img
					className="w-full h-full object-cover"
					src={content.image}
				/>

			)}

		</div>

	)

}

export default Hero;