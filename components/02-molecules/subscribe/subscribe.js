
import Text from "../../01-atoms/text/text";

import Chevron from "../../../assets/icons/chevron/chevron-right-dark.svg"
import Image from "next/image";

const Subscribe = () => {

	return (

		<div>

			<div className="pb-6 pt-10">

				<Text
					content="Subscribe"
					className={'text-grey text-h4'}
				/>

			</div>

			<div class="mb-4 flex pb-8">
				<input
					className="border rounded-bl-lg rounded-tl-lg border-r-0 px-4 py-2 border-white bg-darkBlue placeholder-grey"
					id=""
					label=""
					placeholder="Enter your email"
					type=""
				/>
				<button className="border rounded-br-lg rounded-tr-lg border-l-0 bg-lightBlue py-4 pr-3 pl-4">
					<Image
						src={Chevron}
						alt="logo"
					/>
				</button>
			</div >

			<p className="text-grey text-h7 pb-8">
				By subscribing you agree to with our
				<a className="underline pl-1" href="#">Terms of use</a>
			</p>

		</div>

	)
}

export default Subscribe;