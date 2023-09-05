import QuickLinks from "./quick-links"

import Ticket from "../../../assets/icons/quick-links/Ticket.svg";
import TicketBlue from "../../../assets/icons/quick-links/Ticket-Blue.svg";
import Fixtures from "../../../assets/icons/quick-links/Fixtures.svg";
import FixturesBlue from "../../../assets/icons/quick-links/Fixtures-Blue.svg";
import List from "../../../assets/icons/quick-links/List.svg";
import ListBlue from "../../../assets/icons/quick-links/List-Blue.svg";
import Team from "../../../assets/icons/quick-links/Team.svg";
import TeamBlue from "../../../assets/icons/quick-links/Team-Blue.svg";

export default {
    title: "Organisms/QuickLinks",
    component: QuickLinks,
    argTypes: {},
};

export const Default = {
    name: "Quick-links",
    args: {
        links: [
            { text: 'Buy Tickets', icon: Ticket, url: "#", hovered: TicketBlue },
            { text: 'Fixtures & Results', icon: Fixtures, url: "#", hovered: FixturesBlue },
            { text: 'Points Table', icon: List, url: "#", hovered: ListBlue },
            { text: 'Our Teams', icon: Team, url: "#", hovered: TeamBlue },
        ],
    }
};

