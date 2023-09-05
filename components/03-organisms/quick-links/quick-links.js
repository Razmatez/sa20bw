import Image from "next/image";
import React, { useState } from "react";

import Ticket from "../../../assets/icons/quick-links/Ticket.svg";
import TicketBlue from "../../../assets/icons/quick-links/Ticket-Blue.svg";
import Fixtures from "../../../assets/icons/quick-links/Fixtures.svg";
import FixturesBlue from "../../../assets/icons/quick-links/Fixtures-Blue.svg";
import List from "../../../assets/icons/quick-links/List.svg";
import ListBlue from "../../../assets/icons/quick-links/List-Blue.svg";
import Team from "../../../assets/icons/quick-links/Team.svg";
import TeamBlue from "../../../assets/icons/quick-links/Team-Blue.svg";



const QuickLinks = (props) => {
    const links = [
        { text: 'Buy Tickets', icon: Ticket, url: "#", hovered: TicketBlue },
        { text: 'Fixtures & Results', icon: Fixtures, url: "#", hovered: FixturesBlue },
        { text: 'Points Table', icon: List, url: "#", hovered: ListBlue },
        { text: 'Our Teams', icon: Team, url: "#", hovered: TeamBlue },
    ];

    const [hoveredStates, setHoveredStates] = useState(links.map(() => false));

    const handleMouseEnter = (index) => {
        const newHoveredStates = [...hoveredStates];
        newHoveredStates[index] = true;
        setHoveredStates(newHoveredStates);
    };

    const handleMouseLeave = (index) => {
        const newHoveredStates = [...hoveredStates];
        newHoveredStates[index] = false;
        setHoveredStates(newHoveredStates);
    };

    return (
        <div className="px-5 md:px-16">
            <h3 className="pb-6 md:pb-8">What are you looking for ?</h3>
            <div className="pb-10 flex flex-wrap gap-4">
                {links.map((link, index) => (
                    <a key={index} href={link.url} className="bg-darkBlue text-white body-sm md:body-xl md:text-white p-4 md:p-6 rounded-lg w-[167px] h-[100px] md:w-[310px] md:h-[104px] mb-4 flex items-center">
                        <div
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <div className="flex items-start lg:items-center flex-col lg:flex-row md:hover:scale-110 transform transition-transform duration-500 ease-in-out w-full">
                                <Image src={hoveredStates[index] ? link.hovered : link.icon} alt={link.text} className="mr-3"
                                />
                                {link.text}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default QuickLinks;
