import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./carousel.css";

import Icon from "../../01-atoms/icon/icon";
import Hero from "../hero/hero";

import ChevronLeftIcon from "../../../assets/icons/chevron/chevron-left-white.svg";
import ChevronRightIcon from "../../../assets/icons/chevron/chevron-right-white.svg";

const Carousel = (props) => {

	const {
		content
	} = props;

	return (

		content[0].appearance.type === "CAROUSEL" && (

			<div className="relative w-full h-full">

				<Swiper
					loop
					modules={[ Navigation, Scrollbar, A11y ]}
					navigation={{
						nextEl: ".carousel-next",
						prevEl: ".carousel-prev",
					}}
					scrollbar={{
						draggable: false,
						el: ".carousel-scrollbar"
					}}
				>

					{content[0].children.map((slide, index) => (

						<SwiperSlide key={index}>

							<Hero content={slide} />

						</SwiperSlide>

					))}

					<div className="absolute bottom-8 flex justify-between items-center w-full px-16 z-10">

						<div className="carousel-scrollbar" />

						<div className="flex">

							<button className="carousel-prev flex justify-center items-center w-10 h-10 bg-darkBlue80 rounded-xl mr-4">

								<div className="w-6 h-6">

									<Icon
										src={ChevronLeftIcon}
										altText="previous"
									/>

								</div>

							</button>

							<button className="carousel-next flex justify-center items-center w-10 h-10 bg-darkBlue80 rounded-xl">

								<div className="w-6 h-6">

									<Icon
										src={ChevronRightIcon}
										altText="next"
									/>

								</div>

							</button>

						</div>

					</div>

	 		 </Swiper>

	 	</div>

		)

	)

}

export default Carousel;
