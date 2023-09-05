import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./hero-carousel.css";

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

							<ChevronLeftWhiteIcon
								width={24}
								height={24}
								alt="previous"
							/>

						</button>

						<button className="hero-carousel-next flex justify-center items-center w-10 h-10 bg-darkBlue80 rounded-xl">

							<ChevronRightWhiteIcon
								width={24}
								height={24}
								alt="next"
							/>

						</button>

					</div>

				</div>

	 		 </Swiper>

	 	</div>

	)

}

export default HeroCarousel;
