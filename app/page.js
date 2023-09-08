"use client";
import HeroCarousel from "../components/02-molecules/hero-carousel/hero-carousel";
import CarouselSection from "../components/03-organisms/carousel-section/carousel-section";
import Partnership from "../components/03-organisms/partnership-block/partnership-block";
import QuickLinks from "../components/03-organisms/quick-links/quick-links";
import CtaBanner from "../components/03-organisms/cta-banner/cta-banner"



import LatestNewsGrid from "../components/03-organisms/latest-news-grid/latest-news-grid";

export default function Home() {

	return (
		<main className="relative mt-15 xl:mt-36 overflow-hidden">

			<HeroCarousel />
			<QuickLinks />
			<CarouselSection />
			<CtaBanner />
			<CarouselSection darkTheme />
			<Partnership />
			<LatestNewsGrid />

		</main >
	)
}
