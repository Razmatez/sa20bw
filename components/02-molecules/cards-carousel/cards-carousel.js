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

const Carousel = (props) => {

	const {
		content
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
				slidesPerView={4}
				spaceBetween={24}
			>

				{content.map((data, index) => (

					<SwiperSlide key={index}>

						<Card content={data} />

					</SwiperSlide>

				))}

				<div className="flex justify-between items-center w-full pt-8">

					<div className="cards-carousel-scrollbar" />

					<div className="flex">

						<button className="cards-carousel-prev flex justify-center items-center w-10 h-10 rounded-xl bg-lightGrey mr-4">

							<div className="w-6 h-6">

								<Icon
									src={ChevronLeftDarkIcon}
									altText="previous"
								/>

							</div>

						</button>

						<button className="cards-carousel-next flex justify-center items-center w-10 h-10 rounded-xl bg-lightGrey">

							<div className="w-6 h-6">

								<Icon
									src={ChevronRightDarkIcon}
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

export default Carousel;
