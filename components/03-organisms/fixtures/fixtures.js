import React, { useState } from "react";


import Tabs from "../../02-molecules/tabs/tabs";

const Fixtures = () => {

    const [activeTab, setActiveTab] = useState("fixtures");

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div>

            <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />

        </div >
    );
};

export default Fixtures;
