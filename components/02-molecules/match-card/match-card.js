import React from 'react';
import Lion from '../../../assets/icons/match-card/FixturesLion.svg';
import Cape from '../../../assets/icons/match-card/FixturesCape.svg';
import Button from '../../01-atoms/button/button';

const MatchCard = () => {
    // Define the data structure for a single match
    const matchData = {
        date: 'Tuesday, 9 Jan 2024',
        matchInfo: 'MATCH 1 | Starts in 5 days 4 hrs 37 mins',
        team1: {
            name: 'Joburg Super Kings',
            logo: <Lion />,
        },
        team2: {
            name: 'Joburg Super Kings',
            logo: <Cape />,
        },
        time: '14:45 (sast) | st georges park',
    };

    // Define the number of times you want to repeat the same match data
    const repeatCount = 5; // Change this to the desired number of repetitions

    // Create an array with a length equal to repeatCount
    const repeatedMatches = new Array(repeatCount).fill(matchData);

    return (
        <div className="mt-4 container mx-auto">
            {repeatedMatches.map((match, index) => (
                <div key={index}>
                    <h5>{match.date}</h5>

                    <div className="flex gradient-blue-to-lime w-[384px] rounded-tl-2xl rounded-tr-2xl pl-6">
                        <p className="mr-4">{match.matchInfo}</p>
                    </div>

                    <div className="flex justify-center items-center bg-lightGrey mb-6 pb-6 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-xl border border-darkGrey">
                        {/* Column 1 */}
                        <div className="w-1/3 p-4 flex justify-start items-center flex-col lg:flex-row">
                            {match.team1.logo}
                            <h5 className="pl-8">{match.team1.name}</h5>
                        </div>

                        {/* Column 2 */}
                        <div className="w-1/3 p-4 flex justify-center items-center flex-col">
                            <p className="pb-4">{match.time}</p>
                            <Button>Buy Now</Button>
                        </div>

                        {/* Column 3 */}
                        <div className="w-1/3 p-4 flex justify-end items-center flex-col-reverse lg:flex-row">
                            {match.team2.logo}
                            <h5 className="pr-8">{match.team2.name}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MatchCard;
