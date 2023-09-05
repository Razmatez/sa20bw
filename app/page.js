"use client";
import HeroCarousel from "../components/02-molecules/hero-carousel/hero-carousel";
import CarouselSection from "../components/03-organisms/carousel-section/carousel-section";

export default function Home() {

	return (
		<main className="relative mt-15 xl:mt-36 overflow-hidden">

			<HeroCarousel />
			<CarouselSection />
			<CarouselSection darkTheme />

		</main>
	)
}
