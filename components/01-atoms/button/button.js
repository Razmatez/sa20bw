import React from "react";

const Button = (props) => {

  const renderClassNames = () => {

    const { variant, size } = props;

    let variantClassNames = "";
    let sizeClassNames = "";

    switch (variant) {
      case "secondary":
        variantClassNames = "text-darkBlue uppercase bg-transparent rounded-md border-darkBlue border-2 border-solid hover:bg-darkBlue10";
        break;
      case "tertiary":
        variantClassNames = "uppercase text-darkBlue";
        break;
      case "blue":
        variantClassNames = "uppercase bg-lightBlue text-darkBlue";
        break;
      default: // primary
        variantClassNames = "text-lightGrey uppercase bg-darkBlue hover:darkBlue90";
    }

    switch (size) {
      case "sm":
        sizeClassNames = "font-barlow sm h-8 rounded-xl px-4 py-3 flex items-center justify-center ";
        break;
      case "lg":
        sizeClassNames = "font-barlow base h-12 rounded-xl px-4 flex items-center justify-center ";
        break;
      default: // md 
        sizeClassNames = "font-barlow base h-10 rounded-xl px-4 flex items-center justify-center ";
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
