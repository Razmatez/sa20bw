import { Footer } from 'flowbite-react';

const footerSections = [
    {
        title: "Useful Links",
        links: [
            { url: "#", text: "About SA20" },
            { url: "#", text: "Matches" },
            { url: "#", text: "News" },
            { url: "#", text: "Videos" },
            { url: "#", text: "Stats" },
            { url: "#", text: "Gallery" },
            { url: "#", text: "Auction" },
        ],
    },
    {
        title: "Teams",
        links: [
            { url: "#", text: "Durban's Super Giants" },
            { url: "#", text: "Joburg Super Kings" },
            { url: "#", text: "MI Cape Town" },
            { url: "#", text: "Paarl Royals" },
            { url: "#", text: "Pretoria Capitals" },
            { url: "#", text: "Sunrisers Eastern Cape" },
        ],
    },
    {
        title: "Safety Policies",
        links: [
            { url: "#", text: "Anticorruption Policy" },
            { url: "#", text: "Anti Discrimination Policy" },
            { url: "#", text: "Clothing and Equipment Regulations" },
            { url: "#", text: "Anti Doping" },
        ],
    },
    {
        title: "Contact",
        links: [
            { url: "#", text: "Contact Us" },
            { url: "#", text: "FAQs" },
            { url: "#", text: "Careers" },
        ],
    },
];

const FooterLinks = () => {
    return (
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-4">

            {footerSections.map((section, index) => (

                <div key={index}>

                    <Footer.Title title={section.title} />

                    <Footer.LinkGroup col>

                        {section.links.map((link, linkIndex) => (

                            <Footer.Link key={linkIndex} href={link.url}>

                                {link.text}

                            </Footer.Link>

                        ))}

                    </Footer.LinkGroup>

                </div>
            ))}

        </div>


    )
}

export default FooterLinks;