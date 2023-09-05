import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./cards-carousel.css";

import Icon from "../../01-atoms/icon/icon";
import Card from "../card/card";

import ChevronLeftDarkIcon from "../../../assets/icons/chevron/chevron-left-dark.svg";
import ChevronRightDarkIcon from "../../../assets/icons/chevron/chevron-right-dark.svg";

// NB:
// When using this component, please wrap it in a container and offset all four sides by -4px each.
// This is to account for the fact that padding of 4px has been added on each side of the carousel as the overflow: hidden applied from the Swiper library was cutting off the box shadow of the cards.
// --> Usage: Add className="-m-1" to wrapper div.

const CardsCarousel = (props) => {

	const {
		content,
		darkTheme
	} = props;

	return (

		<div className="cards-carousel relative w-full h-full">

			<Swiper
				modules={[ Navigation, Scrollbar, A11y ]}
				navigation={{
					nextEl: ".cards-carousel-next",
					prevEl: ".cards-carousel-prev",
				}}
				scrollbar={{
					draggable: false,
					el: ".cards-carousel-scrollbar"
				}}
				slidesPerGroup={1}
				slidesPerView={1.18}
				spaceBetween={24}
				breakpoints={{
					600: {
						slidesPerGroup: 2,
						slidesPerView: 2.2
					},
					1024: {
						slidesPerGroup: 4,
						slidesPerView: 4
					}
				}}
			>

				{content.map((data, index) => (

					<SwiperSlide key={index}>

						<Card
							content={data}
							darkTheme={darkTheme}
						/>

					</SwiperSlide>

				))}

				<div className="hidden lg:flex justify-between items-center w-full lg:pt-8">

					<div className="cards-carousel-scrollbar" />

					<div className="flex">

						<button className="cards-carousel-prev flex justify-center items-center w-10 h-10 rounded-xl bg-lightGrey mr-4">

							<ChevronLeftDarkIcon
								width={24}
								height={24}
								alt="previous"
							/>

						</button>

						<button className="cards-carousel-next flex justify-center items-center w-10 h-10 rounded-xl bg-lightGrey">

							<ChevronRightDarkIcon
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

export default CardsCarousel;
