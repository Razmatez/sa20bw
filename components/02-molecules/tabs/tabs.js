import Image from "next/image";
import React from "react";

import "./tabs.css";

import Button from "../../01-atoms/button/button";
import Dropdown from "../.././01-atoms/drop-down/drop-down";
import MatchCard from "../../02-molecules/match-card/match-card";

import PointsIcon from "../../../assets/icons/match-card/points-table.svg";
import ResultsIcon from "../../../assets/icons/match-card/results.svg";
import TicketBlue from "../../../assets/icons/quick-links/Ticket-Blue.svg?url";

const Tabs = (props) => {
	const { activeTab } = props;

	const tabs = [
		{
			id: "fixtures",
			title: "Fixtures",
			content: <>

				<MatchCard />

			</>,
		},
		{
			id: "results",
			title: "Results",
			content: (
				<div className="container mx-auto px-4 lg:px-8 flex flex-col justify-center items-center">
					<ResultsIcon className="mt-12" />
					<h2 className="pb-4">No Results yet</h2>
					<p className="pb-6 body-xl text-grey">
                        No match results for now, but stay tuned for updates in Season 2. While you wait, take a peek
					</p>
					<Button variant="tertiary">View Fixtures</Button>
				</div>
			),
		},
		{
			id: "points",
			title: "Points",
			content: (
				<div className="container mx-auto flex flex-col justify-center items-center px-4 lg:px-8">
					<PointsIcon className="mt-12" />
					<h2 className="pb-4">No points yet</h2>
					<p className="pb-6 body-xl text-grey">
                        There are currently no points to display, but keep an eye out for updates during Season 2! In the meantime, explore upcoming fixtures.
					</p>
					<Button variant="tertiary">View Fixtures</Button>
				</div>
			),
		},
	];

	return (
		<div>
			<div className="overflow-x-auto hide-scrollbar container mx-auto flex">

				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => props.handleTabClick(tab.id)}
						className={`flex-grow min-w-[205px] ${activeTab === tab.id
							? "border-b-4 border-darkBlue h6 text-darkBlue pt-9 pb-3"
							: "text-darkGrey h6 border-b-2 border-lightGrey pt-9 pb-3"
						}`}
					>
						<div className="flex items-center justify-center">
							{/* Place holder image */}
							<Image
								className="mr-2"
								src={TicketBlue}
								alt="ticket"
								width={40}
								height={25}
							/>
							{tab.title}
						</div>
					</button>
				))}
			</div>
			<div className="container mx-auto hidden lg:flex">

				<div className="mt-8 mr-4">
					<Dropdown
						options={[
							{
								label: "2023/2024",
								value: "2023/2024",
							},
							{
								label: "2022/2023",
								value: "2022/2023",
							},
							{
								label: "2021/2022",
								value: "2021/2022",
							},
							{
								label: "All Seasons",
								value: "all-seasons",
							},
						]}
					/>
				</div>

				<div className="mt-8 mr-4">
					<Dropdown
						options={[
							{
								name: "All Teams",
								label: "Joburg Super Kings",
								value: "Joburg Super Kings",
							},
							{
								label: "Cape town",
								value: "Cape town",
							},
							{
								label: "Mpumalanga",
								value: "Mpumalanga",
							},
							{
								label: "All Teams",
								value: "all-teams",
							},
						]}
					/>
				</div>

				<div className="mt-8 mr-4">
					<Dropdown
						options={[
							{
								label: "Johannesburg",
								value: "Johannesburg",
							},
							{
								label: "Paarl",
								value: "Paarl",
							},
							{
								label: "Cape Town",
								value: "Cape Town",
							},
							{
								label: "All Locations",
								value: "all-locations",
							}
						]}
					/>
				</div>

			</div>

			{tabs.map((tab) => (
				<div
					key={tab.id}
					className={activeTab === tab.id ? "block" : "hidden"}
				>
					{tab.content}
				</div>
			))}
		</div>
	);
};

export default Tabs;
