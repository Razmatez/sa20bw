import ResponsiveImage from "../../01-atoms/image/responsiveImage";

const Hero = (props) => {

	const {
		heroMedia
	} = props;

	return (

		<div className="relative h-[640px]">

			<ResponsiveImage
				heroMedia={heroMedia}
				styles="w-full h-full object-cover"
			/>

		</div>

	)

}

export default Hero;