"use client";

const Teams = (props) => {

    const crests = [
        {
            image: "/image1",
            alt: "Alt Text 1",
            crest: "https://media-cdn.incrowdsports.com/659395cc-b7b5-40c8-8870-a4d757d7c755.png",
            bg: "https://media-cdn.incrowdsports.com/c3431b04-96a6-4264-97e1-e9b5969da2c6.png",
            link: "#"
        },
        {
            image: "/image2",
            alt: "Alt Text 2",
            crest: "https://media-cdn.incrowdsports.com/91ef12a3-cf2d-4784-9ac4-64d5a6f6473c.png",
            bg: "https://media-cdn.incrowdsports.com/b7a9b599-8009-42a7-ba51-7f9cafcc1840.png",
            link: "#"
        },
        {
            image: "/image3",
            alt: "Alt Text 3",
            crest: "https://media-cdn.incrowdsports.com/8d7f9ac8-8357-497c-8651-c1c48a786f16.png",
            bg: "https://media-cdn.incrowdsports.com/c3431b04-96a6-4264-97e1-e9b5969da2c6.png",
            link: "#"
        },
        {
            image: "/image4",
            alt: "Alt Text 4",
            crest: "https://media-cdn.incrowdsports.com/85b99234-419a-4fcc-89df-369587488206.png",
            bg: "https://media-cdn.incrowdsports.com/c3431b04-96a6-4264-97e1-e9b5969da2c6.png",
            link: "#"
        },
        {
            image: "/image5",
            alt: "Alt Text 5",
            crest: "https://media-cdn.incrowdsports.com/0b749a61-5e4a-4ecc-b4fc-6e19c6d90e0e.png",
            bg: "https://media-cdn.incrowdsports.com/c3431b04-96a6-4264-97e1-e9b5969da2c6.png",
            link: "#"
        },
        {
            image: "/image6",
            alt: "Alt Text 6",
            crest: "https://media-cdn.incrowdsports.com/4d7574fd-d668-4d87-b8a1-8d690486b929.png",
            bg: "https://media-cdn.incrowdsports.com/c3431b04-96a6-4264-97e1-e9b5969da2c6.png",
            link: "#"
        }
    ];

    return (
        <div className="p-5 md:p-16">

            <h1 className="pb-8">Teams</h1>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">

                {crests.map((crest, index) => (

                    <a
                        key={index}
                        href={crest.link}
                        className="flex justify-center items-center"
                    >
                        <div
                            style={{
                                backgroundImage: `url(${crest.bg})`,
                            }}
                            className="flex justify-center items-center bg-no-repeat bg-contain md:h-[192px] h-[106px] w-[106px] md:w-[192px]"

                        >
                            <img
                                className="ease-in-out duration-500 hover:scale-110 px-5 py-2 "
                                src={crest.crest}
                                alt={crest.alt}
                            />

                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Teams;
