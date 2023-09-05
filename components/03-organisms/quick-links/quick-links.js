import Image from "next/image";
import Link from "next/link";
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
        <div className="px-5 lg:px-16">
            <h3 className="pb-6 lg:pb-8">What are you looking for ?</h3>
            <div className="pb-10 flex flex-wrap gap-4">
                {links.map((link, index) => (
                    <Link key={index} href={link.url} className="bg-darkBlue text-white body-sm lg:body-xl lg:text-white p-4 lg:p-6 rounded-lg w-[167px] h-[100px] lg:w-[310px] lg:h-[104px] mb-4 flex items-center">
                        <div className="flex items-start lg:items-center flex-col lg:flex-row lg:hover:scale-110 transform transition-transform duration-500 ease-in-out w-full"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}>
                            <Image src={hoveredStates[index] ? link.hovered : link.icon} alt={link.text} className="mr-3"
                            />
                            {link.text}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default QuickLinks;
