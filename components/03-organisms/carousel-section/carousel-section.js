import Button from "../../01-atoms/button/button";
import CardsCarousel from "../../02-molecules/cards-carousel/cards-carousel";

import content from "./dummy-data";

const CarouselSection = (props) => {

	const {
		// content,
		darkTheme = false
	 } = props;

	return (

		<div className="container py-10 lg:py-18 px-0">

			<div className="flex justify-between items-center mb-6 lg:mb-8">

				<h2 className="h3 lg:h2 ml-5 lg:ml-0">{content.heading}</h2>

				<div className="hidden lg:flex">

					<Button
						withArrowRight
						variant="tertiary"
					>
						{content.cta}
					</Button>

				</div>

			</div>

			<div className="-m-1">

				<CardsCarousel
					content={content.articles}
					darkTheme={darkTheme}
				/>

			</div>

			<div className="flex justify-center mt-8 lg:hidden">

				<Button
					withArrowRight
					variant="tertiary"
				>
					{content.cta}
				</Button>

			</div>

		</div>

	)
}

export default CarouselSection