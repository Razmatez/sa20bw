import React from "react";


import Icon from "../../01-atoms/icon/icon";

import AddIcon from "../../../assets/icons/button/add.svg";

const Button = (props) => {

  const renderClassNames = () => {

    const { variant, size } = props;

    let variantClassNames = "";
    let sizeClassNames = "";

    switch (variant) {
      case "secondary":
        variantClassNames = "font-barlow base text-darkBlue uppercase bg-transparent rounded-md border-darkBlue border-2 border-solid hover:bg-darkBlue10";
        break;
      case "tertiary":
        variantClassNames = "font-barlow uppercase text-darkBlue base";
        break;
      case "blue":
        variantClassNames = "font-barlow uppercase bg-lightBlue text-darkBlue base";
        break;
      default: // primary
        variantClassNames = "font-barlow text-lightGrey uppercase bg-darkBlue hover:darkBlue90 base";
    }

    switch (size) {
      case "sm":
        sizeClassNames = "h-8 rounded-xl px-4 py-3 flex items-center justify-center ";
        break;
      case "lg":
        sizeClassNames = "h-12 rounded-xl px-4 flex items-center justify-center ";
        break;
      default: // md 
        sizeClassNames = "h-10 rounded-xl px-4 flex items-center justify-center ";
    }

    return `${variantClassNames} ${sizeClassNames}`;

  };

  return (

    <button className={renderClassNames()}>

      {props.children}

    </button>

  );
};

export default Button;
