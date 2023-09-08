import Button from "../../01-atoms/button/button";
// import Lion from "../../../assets/icons/match-card/FixturesLion.svg";
// import Cape from "../../../assets/icons/match-card/FixturesCape.svg";
import Results from "../../../assets/icons/match-card/results.svg";
import Points from "../../../assets/icons/match-card/points-table.svg";
import MatchCard from "../../02-molecules/match-card/match-card"

const Tabs = (props) => {
    const { activeTab } = props;


    const tabs = [
        {
            title: 'Fixtures',
            content: (
                <MatchCard />

                //<div className="mt-4 container mx-auto">
                //     <div>
                //         <h5>Tuesday, 9 Jan 2024</h5>

                //         <div className="flex gradient-blue-to-lime w-[384px] rounded-tl-2xl rounded-tr-2xl pl-6">
                //             <p className="mr-4">MATCH 1 |</p>
                //             <p>Starts in 5 days 4 hrs 37 mins</p>
                //         </div>

                //         <div class="flex justify-center items-center bg-lightGrey mb-6 pb-6 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-xl border border-darkGrey">

                //             {/* <!-- Column 1 --> */}
                //             <div class="w-1/3 p-4 flex justify-start items-center flex-col lg:flex-row">
                //                 <Lion />
                //                 <h5 className="pl-8">Joburg Super Kings</h5>

                //             </div>

                //             {/* <!-- Column 2 --> */}
                //             <div class="w-1/3 p-4 flex justify-center items-center flex-col">

                //                 <p className="pb-4">14:45 (sast) | st georges park</p>
                //                 <Button>
                //                     Buy Now
                //                 </Button>

                //             </div>

                //             {/* <!-- Column 3 --> */}
                //             <div class="w-1/3 p-4 flex justify-end items-center flex-col-reverse lg:flex-row">
                //                 <h5 className="pr-8">Joburg Super Kings</h5>
                //                 <Cape />


                //             </div>
                //         </div >
                //     </div>
                // </div>
            ),
        },
        {
            title: 'Results',
            content: (<div className="flex flex-col justify-center items-center">
                <Results
                    className="mt-12" />
                <h2 className="pb-4">No Results yet</h2>

                <p className="pb-6 body-xl text-grey">No match results for now, but stay tuned for updates in Season 2. While you wait, take a peak</p>
                <Button
                    variant="tertiary">
                    View Fixtures
                </Button>
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
                    <Button
                        variant="tertiary">
                        View Fixtures
                    </Button>
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









