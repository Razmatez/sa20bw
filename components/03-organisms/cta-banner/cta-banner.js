import Button from "@/components/01-atoms/button/button";
import React from "react";


const CtaBanner = () => {

	const data = {
		title: "Join the SA20 Family!",
		description: "Experience cricket like never before: access live matches, expert statistics , match highlights, and stay up to date with everything SA20",
		button: "Join now",
		image: "https://media-cdn.incrowdsports.com/d7a0a698-aaab-4824-b4a2-7d062c76d445.png",
		//category: "Poll",
		//preHeader: "what is your",
		width: " w-full"

	}

	return (

		<div>

			<div className={data.image ? "bg-gradient-to-r from-lime to-lightBlue flex flex-col lg:flex-row" + data.width : "bg-darkBlue flex justify-center"}>

				<div className={data.image ? "pt-12 pb-12 pl-16" : "px-8 py-8"}>

					{data.category &&
						<p className={data.image ? "" : "text-white"}>
							{data.category}
						</p>
					}

					{data.preHeader ?
						<div>

							<p className="pb-4 text-white text-center">
								{data.preHeader}
							</p>

							<div className="flex justify-center items-center">

								<span className="pb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-lime to-brightGreen text-[50px] uppercase">
									{data.title}
								</span>

							</div>

						</div>
						:
						<h2 className={data.image ? "pb-4" : "text-white pb-4"}>
							{data.title}
						</h2>
					}

					<p className={data.image ? "pb-6" : "pb-6 text-grey text-center"}>
						{data.description}
					</p>

					<div className={data.image ? "flex" : "flex justify-center"}>

						<Button
							size="lg"
							variant={data.image ? "default" : "secondary"}
						>
							{data.button}
						</Button>
					</div>

				</div>

				{data.image &&
					<img src={data.image} alt="Description of the image" />
				}

			</div>

		</div >

	)
}

export default CtaBanner;

