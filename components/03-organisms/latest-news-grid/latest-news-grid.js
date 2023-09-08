import Button from "../../01-atoms/button/button";
import Card from "../../02-molecules/card/card";
import CardsCarousel from "../../02-molecules/cards-carousel/cards-carousel";

import IsMobile from "../../../utils/isMobile";

import content from "./dummy-data";

const LatestNewsGrid = (props) => {

	return (

		<div className="py-10 lg:py-20 lg:px-16">

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

			{IsMobile() ? (

				<div>

					<div className="-m-1">

						<CardsCarousel content={content.articles} />

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

			) : (

				<div className="flex">

					<div className="w-1/2 mr-6">
						<Card
							large
							content={content.articles[0]}
						/>
					</div>

					<div className="flex flex-col w-1/2">

						<div className="flex mb-6">

							<div className="mr-6">
								<Card content={content.articles[1]} />
							</div>

							<div className="">
								<Card content={content.articles[2]} />
							</div>

						</div>

						<div className="flex">

							<div className="mr-6">
								<Card
									hideImage
									content={content.articles[3]}
								/>
							</div>

							<div className="">
								<Card
									hideImage
									content={content.articles[4]}
								/>
							</div>

						</div>

					</div>

				</div>

			)}



		</div>

	)
}

export default LatestNewsGrid;