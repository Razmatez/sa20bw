import Button from "../../01-atoms/button/button";
import Results from "../../../assets/icons/match-card/results.svg";
import Points from "../../../assets/icons/match-card/points-table.svg";
import MatchCard from "../../02-molecules/match-card/match-card";

import Link from 'next/link';

const Tabs = (props) => {
    const { activeTab } = props;

    const tabs = [
        {
            title: 'Fixtures',
            content: (
                <MatchCard />
            ),
        },
        {
            title: 'Results',
            content: (<div className="flex flex-col justify-center items-center">
                <Results
                    className="mt-12" />
                <h2 className="pb-4">No Results yet</h2>

                <p className="pb-6 body-xl text-grey">No match results for now, but stay tuned for updates in Season 2. While you wait, take a peak</p>
                <Link
                    href="/matches"
                >
                    View Fixtures
                </Link>
            </div>),
        },
        {
            title: 'Points',
            content: (
                <div className="flex flex-col justify-center items-center">
                    <Points
                        className="mt-12" />
                    <h2 className="pb-4">No points yet</h2>
                    <p className="pb-6 body-xl text-grey">There are currently no points to display, but keep an eye out for updates during Season 2! In the mean time
                        , explore upcoming fixtures.
                    </p>
                    <Link
                        href="/matches"
                    >
                        View Fixtures
                    </Link>
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="flex">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => props.handleTabClick(index + 1)}
                        className={`flex-grow w-full ${activeTab === index + 1
                            ? 'border-b-4 border-darkBlue h6 text-darkBlue pt-9 pb-3'
                            : 'text-darkGrey h6 border-b-2 border-lightGrey pt-9 pb-3'
                            }`}

                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            {tabs.map((tab, index) => (
                <div key={index} style={{ display: activeTab === index + 1 ? 'block' : 'none' }}>
                    {tab.content}
                </div>
            ))}
        </div>
    );
};

export default Tabs;









