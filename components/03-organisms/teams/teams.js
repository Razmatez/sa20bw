const Teams = (props) => {
    const { data } = props;
    // console.log(data)


    return (
        <div className="p-16">
            <h1 className="pb-8">Teams</h1>
            {/* 1 */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                <div className="gradient-dark-to-blue mx-auto flex justify-center items-center px-3 md:px-9 py-2 md:py-4 rounded-md hover:bg-red">
                    <img
                        className="w-full h-auto md:w-auto ease-in-out duration-500 hover:scale-125"
                        src="https://media-cdn.incrowdsports.com/659395cc-b7b5-40c8-8870-a4d757d7c755.png"
                        alt="alt"
                    />
                </div>
                {/* 2 */}
                <div className="gradient-superkings mx-auto flex justify-center items-center px-3 md:px-9 py-2 md:py-4 rounded-md">
                    <img
                        className="w-full h-auto md:w-auto ease-in-out duration-500 hover:scale-125"
                        src="https://media-cdn.incrowdsports.com/91ef12a3-cf2d-4784-9ac4-64d5a6f6473c.png"
                        alt="alt"
                    />
                </div>
                {/* 3 */}
                <div className="bg-grey mx-auto flex justify-center items-center px-3 md:px-9 py-2 md:py-4 rounded-md">
                    <img
                        className="w-full h-auto md:w-auto ease-in-out duration-500 hover:scale-125"
                        src="https://media-cdn.incrowdsports.com/8d7f9ac8-8357-497c-8651-c1c48a786f16.png"
                        alt="alt"
                    />
                </div>
                {/* 4 */}
                <div className="bg-grey mx-auto flex justify-center items-center px-3 md:px-9 py-2 md:py-4 rounded-md">
                    <img
                        className="w-full h-auto md:w-auto ease-in-out duration-500 hover:scale-125"
                        src="https://media-cdn.incrowdsports.com/85b99234-419a-4fcc-89df-369587488206.png"
                        alt="alt"
                    />
                </div>
                {/* 5 */}
                <div className="bg-grey mx-auto flex justify-center items-center px-3 md:px-9 py-2 md:py-4 rounded-md">
                    <img
                        className="w-full h-auto md:w-auto ease-in-out duration-500 hover:scale-125"
                        src="https://media-cdn.incrowdsports.com/0b749a61-5e4a-4ecc-b4fc-6e19c6d90e0e.png"
                        alt="alt"
                    />
                </div>
                {/* 6 */}
                <div className="bg-grey mx-auto flex justify-center items-center px-3 md:px-9 py-2 md:py-4 rounded-md">
                    <img
                        className="w-full h-auto md:w-auto ease-in-out duration-500 hover:scale-125"
                        src="https://media-cdn.incrowdsports.com/4d7574fd-d668-4d87-b8a1-8d690486b929.png"
                        alt="alt"
                    />
                </div>


            </div>
        </div>
    );
};

export default Teams;
