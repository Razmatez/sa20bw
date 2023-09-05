import React, { useState, useEffect } from 'react';

import Chevron from "../../../assets/icons/chevron/chevron-down-white.svg"
import Image from "next/image";

const footerSections = [
  {
    title: "SA 20 Cricket",
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
    title: "Fun & More",
    links: [
      { url: "#", text: "Contact Us" },
      { url: "#", text: "FAQs" },
      { url: "#", text: "Careers" },
    ],
  },
];

const FooterMenu = () => {

  const [expandedSections, setExpandedSections] = useState({});
  const [screenSize, setScreenSize] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const newExpandedSections = {};
      footerSections.forEach((section, index) => {
        newExpandedSections[index] = Window.innerWidth >= 640;
      });
      setExpandedSections(newExpandedSections);

      setScreenSize(function() {
        return window.innerWidth;
      })
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize]);

  const toggleSection = (index) => {
    setExpandedSections((prevExpanded) => {
      const isExpanded = !prevExpanded[index];
      const newExpandedSections = { ...prevExpanded };
      newExpandedSections[index] = isExpanded;
      return newExpandedSections;
    });
  };

  return (
    <div className="pt-8 px-5 pb-8 md:py-16 md:pr-16">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {footerSections.map((section, index) => (
          <div className="" key={index}>

            <button
              className="cursor-default lg:cursor-pointer text-lightGrey h7 pb-6 md:h6 md:text-lightGrey flex items-center justify-between w-full"
              onClick={() => toggleSection(index)}
            >
              <div>{section.title}</div>

              <Image
                src={Chevron}
                alt="logo"
                className="inline-block lg:hidden"
                style={{
                  transform: `rotate(${expandedSections[index] ? 180 : 0}deg)`,
                  transition: 'transform 0.3s ease-in-out',
                }}
              />

            </button>

            {(expandedSections[index] || screenSize >= 640) && (
              <div>

                <ul className="list-inside">

                  {section.links.map((link, linkIndex) => (

                    <li key={linkIndex} className="mb-1 button-sm text-grey pb-4">

                      <a href={link.url}>{link.text}</a>

                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterMenu;
