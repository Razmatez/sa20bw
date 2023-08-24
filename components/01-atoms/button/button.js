import React from "react";

const Button = (props) => {

  const renderClassNames = () => {

    const { variant, size } = props; 

    let variantClassNames = "";
    let sizeClassNames = "";
	let content = "";

    switch (variant) {
      case "secondary": 
        variantClassNames = "text-darkBlue uppercase bg-transparent rounded-md border-darkBlue border-2 border-solid hover:bg-darkBlue10";
        break;
      case "tertiary":
        variantClassNames = "uppercase text-darkBlue";
        break;
      default: // primary
        variantClassNames = "text-lightGrey uppercase bg-darkBlue hover:darkBlue90"; 
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
      {props.content}
    </button>

  );
};

export default Button;
