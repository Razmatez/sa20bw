import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./hero-carousel.css";

import Icon from "../../01-atoms/icon/icon";
import Hero from "../hero/hero";

import ChevronLeftWhiteIcon from "../../../assets/icons/chevron/chevron-left-white.svg";
import ChevronRightWhiteIcon from "../../../assets/icons/chevron/chevron-right-white.svg";

const HeroCarousel = (props) => {

	const {
		content
	} = props;

	return (

		<div className="hero-carousel relative w-full h-full">

			<Swiper
				loop
				modules={[ Navigation, Scrollbar, A11y ]}
				navigation={{
					nextEl: ".hero-carousel-next",
					prevEl: ".hero-carousel-prev",
				}}
				scrollbar={{
					draggable: false,
					el: ".hero-carousel-scrollbar"
				}}
			>

				{content.map((slide, index) => (

					<SwiperSlide key={index}>

						<Hero content={slide} />

					</SwiperSlide>

				))}


				<div className="absolute bottom-8 w-full flex justify-between items-center px-16 z-10">

					<div className="hero-carousel-scrollbar" />

					<div className="flex">

						<button className="hero-carousel-prev flex justify-center items-center w-10 h-10 rounded-xl bg-darkBlue80 mr-4">

							<div className="w-6 h-6">

								<Icon
									src={ChevronLeftWhiteIcon}
									altText="previous"
								/>

							</div>

						</button>

						<button className="hero-carousel-next flex justify-center items-center w-10 h-10 bg-darkBlue80 rounded-xl">

							<div className="w-6 h-6">

								<Icon
									src={ChevronRightWhiteIcon}
									altText="next"
								/>

							</div>

						</button>

					</div>

				</div>

	 		 </Swiper>

	 	</div>

	)

}

export default HeroCarousel;
