import Image from "next/image";
import React from "react";

import Button from "../../01-atoms/button/button";

import Cape from "../../../assets/icons/match-card/FixturesCape.svg";
import Lion from "../../../assets/icons/match-card/FixturesLion.svg";
import Ticket from "../../../assets/icons/quick-links/Ticket-Blue.svg?url";

const MatchCard = () => {
    const matchData = {
        date: "Tuesday, 9 Jan 2024",
        matchInfo: "MATCH 1 | Starts in 5 days 4 hrs 37 mins",
        team1: {
            name: "Joburg Super Kings",
            logo: <Lion />,
        },
        team2: {
            name: "Joburg Super Kings",
            logo: <Cape />,
        },
        time: "14:45 (sast) | st georges park",
    };

    const repeatCount = 5;

    const repeatedMatches = new Array(repeatCount).fill(matchData);

    return (
        <div className="mt-4 container mx-auto">
            {repeatedMatches.map((match, index) => (
                <div key={`match_${match.date}`}>
                    <h5 className="pb-4 lg:pb-6 pt-8 lg:pt-10">{match.date}</h5>

                    <div className="flex gradient-blue-to-lime w-[384px] rounded-tl-2xl rounded-tr-2xl py-1 px-6 label-lg">
                        <p className="mr-4">{match.matchInfo}</p>
                    </div>

                    <div className="flex justify-center items-center bg-lightGrey mb-6 pb-6 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-xl border border-lightGrey">
                        {/* Column 1 */}
                        <div className="w-1/4 lg:w-1/3 p-4 flex justify-start items-center flex-col lg:flex-row">
                            {match.team1.logo}
                            <h5 className="pl-0 lg:pl-8">{match.team1.name}</h5>
                        </div>

                        {/* Column 2 */}
                        <div className="w-1/2 lg:w-1/3 p-4 flex justify-center items-center flex-col flex-grow">
                            <p className="pb-4 text-center">{match.time}</p>

                            <div className="flex items-center">
                                <Button>
                                    <Image
                                        className="mr-3"
                                        src={Ticket}
                                        width={25}
                                        height={25}
                                    />
                                    Buy Tickets
                                </Button>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="w-1/4 lg:w-1/3 p-4 flex justify-end items-center flex-col-reverse lg:flex-row">
                            <h5 className="pr-0 lg:pr-8 text-right lg:text-left">{match.team2.name}</h5>
                            {match.team2.logo}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MatchCard;
