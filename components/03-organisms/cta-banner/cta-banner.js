// import Button from "../../components/01-atoms/button/button";
import Button from "../../01-atoms/button/button"

const CtaBanner = (props) => {

	const { data } = props;

	return (

		<div className={data.image ? "gradient-blue-to-lime flex flex-col lg:flex-row" + data.width : "bg-darkBlue flex justify-center"}>

			<div className={data.image ? "py-12 pl-16" : "p-8"}>

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

							<span className="pb-4 text-center bg-clip-text text-transparent gradient-lime-to-green text-[56px] uppercase">
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

	)
}

export default CtaBanner;

