import Button from "@/components/01-atoms/button/button";

const CtaBanner = () => {

	return (

		<fragment>
		{/* Variation 1 with image*/}
		<div className="bg-gradient-to-r from-lime to-lightBlue">
			<div className="pt-12 pb-12 pl-16">	
			<h2 className="pb-4">Join the SA20 Family!</h2>
			<p className="pb-6">Experience cricket like never before: access live matches, expert statistics , match highlights, and stay up to date with everything SA20</p>
			
			<Button
			size="lg"
			variant=""
			>
				Join Now
			</Button >
			
			</div>
		</div>

		 {/* Variation 2  centered*/}
		
		<div className="bg-darkBlue flex justify-center">
			<div className="px-8 py-8">	
			<h2 className="pb-4 text-white text-center">Which is your Favourite team ?</h2>
			<p className="pb-6 text-grey text-center">Help us personalize your experience to recieve updates and communication based on your favourite team.</p>
			<div className="flex justify-center">
			<Button
			size=""
			variant=""
			>
				choose my team
			</Button >
			
			</div>
			</div>
		</div>

		{/* Variation 3 with category and no paragraph*/}
		<div className="bg-gradient-to-r from-lime to-lightBlue">
			<div className="pt-12 pb-12 pl-16">	
			<p>POLL</p>
			<h2 className="pb-4">Who will claim the title of Betway SA20 Champion in Season 2</h2>
			<p className="pb-6">Experience cricket like never before: access live matches, expert statistics , match highlights, and stay up to date with everything SA20</p>
			
			<Button
			size="lg"
			variant=""
			>
				Vote now
			
			</Button>
			</div>
		</div>

		{/* variation 4 2 col layout */}

		<div className="flex flex-col lg:flex-row">
			{/* Part 1 */}
		<div className="bg-gradient-to-r from-lime to-lightBlue w-full lg:w-[50%]">
			<div className="pt-12 pb-12 pl-16">	
			<h2 className="pb-4">Join the SA20 Family!</h2>
			<p className="pb-6">Experience cricket like never before: access live matches, expert statistics , match highlights, and stay up to date with everything SA20</p>
			
			<Button
			size="lg"
			variant=""
			>
				Join now
			</Button>
			
			</div>
		</div>

		{/* part 2 */}
		<div className="bg-gradient-to-r from-lime to-lightBlue w-full lg:w-[50%]">
			<div className="pt-12 pb-12 pl-16">	
			<h2 className="pb-4">Join the SA20 Family!</h2>
			<p className="pb-6">Experience cricket like never before: access live matches, expert statistics , match highlights, and stay up to date with everything SA20</p>
			
			<Button
			size="lg"
			variant=""
			>
				Join Now
			</Button>
			
			</div>
		</div>
		</div>
		</fragment>
		
	)
}

export default CtaBanner;

