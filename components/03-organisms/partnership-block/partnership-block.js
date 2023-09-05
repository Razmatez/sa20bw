import React from "react";
import Image from "next/image";
import Logo from "../../../assets/icons/logo.svg";

const Partnership = () => {

	return (

	// part 1
		<>
			<div className="flex w-full border-b border-lightGrey pl-36 pr-36 pt-8 pb-8">
				{/* title 1 */}
				<div className="border-r pr-6">
					<h6 className="uppercase pb-6">Title Partner</h6>

					<Logo
						width={80}
						alt="logo"
					/>
				</div>

				{/* title 2 */}
				<div className="border-r flex-grow px-6">
					<h6 className="text-center uppercase pb-6">Official partners</h6>
					<div className="flex space-x-6 justify-center">
						{Array.from({ length: 5 }).map((_, index) => (
							<Logo
								key={index}
								alt={`logo-${index}`}
								width={80}
							/>
						))}
					</div>
				</div>

				{/* title 3 */}
				<div className="pl-6">
					<h6 className="uppercase pb-6">Timeout partners</h6>
					<Logo alt="logo" width={80} />
				</div>
			</div>


			{/* part 2 */}
			<div className="grid grid-cols-4 gap-x-16 justify-between pl-20 pr-20 pt-8 pb-8">
				{/* title 1 */}
				<div className="border-r border-lightGrey">
					<h6 className="uppercase pb-6">umpire partner</h6>
					<Logo
						width={80}
						alt="logo"
					/>
				</div>
				{/* title 1 */}
				<div className="border-r border-lightGrey">
					<h6 className="uppercase pb-6">sa partner</h6>
					{Array.from({ length: 2 }).map((_, index) => (
						<Logo
							key={index}
							alt={`logo-${index}`}
							width={80}
						/>
					))}
				</div>
				{/* title 1 */}
				<div className="border-r border-lightGrey">
					<h6 className="uppercase pb-6">Offical suppliers</h6>
					{Array.from({ length: 3 }).map((_, index) => (
						<Logo
							key={index}
							alt={`logo-${index}`}
							width={80}
						/>
					))}
				</div>
				{/* title 1 */}
				<div>
					<h6 className="uppercase text-center pb-6">Broadcast partners</h6>
					<div className="grid grid-cols-5 gap-4 pb-4">
						{Array.from({ length: 10 }).map((_, index) => (
							<Logo
								key={index}
								alt={`logo-${index}`}
								width={80}
							/>
						))}
					</div>
				</div>
			</div>
		</>

	)


}

export default Partnership;