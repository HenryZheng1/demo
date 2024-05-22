/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1: "button-with-icon" | "tertiary-button" | "without-icon" | "secondary-button";
  className: any;
  text: string;
  icRoundKeyboard: string;
}

export const Button = ({
  property1,
  className,
  text = "New Version",
  icRoundKeyboard = "/img/ic-round-keyboard-arrow-right-2.svg",
}: Props): JSX.Element => {
  return (
    <div
      className={`border border-solid border-lightgrayscale-400 inline-flex items-center shadow-light-drop-shadow-1 overflow-hidden relative ${
        ["secondary-button", "without-icon"].includes(property1) ? "p-[12px]" : "px-[12px] py-[10px]"
      } ${property1 === "secondary-button" ? "rounded-[10px]" : "rounded-[8px]"} ${
        property1 === "secondary-button"
          ? "bg-[#ffffff]"
          : property1 === "tertiary-button"
          ? "bg-[#f4f5f6]"
          : "bg-[#111111]"
      } ${className}`}
    >
      {property1 === "button-with-icon" && (
        <>
          <div className="relative w-fit font-body-1-medium font-[number:var(--body-1-medium-font-weight)] text-[#ffffff] text-[length:var(--body-1-medium-font-size)] text-center tracking-[var(--body-1-medium-letter-spacing)] leading-[var(--body-1-medium-line-height)] whitespace-nowrap [font-style:var(--body-1-medium-font-style)]">
            Create
          </div>
          <img className="relative w-[20px] h-[20px]" alt="Ic round keyboard" src={icRoundKeyboard} />
        </>
      )}

      {["secondary-button", "tertiary-button", "without-icon"].includes(property1) && (
        <div
          className={`w-fit mt-[-1.00px] relative text-center whitespace-nowrap ${
            property1 === "tertiary-button" ? "font-body-2-medium" : "font-body-1-medium"
          } ${
            property1 === "tertiary-button"
              ? "tracking-[var(--body-2-medium-letter-spacing)]"
              : "tracking-[var(--body-1-medium-letter-spacing)]"
          } ${
            property1 === "tertiary-button"
              ? "text-[length:var(--body-2-medium-font-size)]"
              : "text-[length:var(--body-1-medium-font-size)]"
          } ${
            property1 === "tertiary-button"
              ? "[font-style:var(--body-2-medium-font-style)]"
              : "[font-style:var(--body-1-medium-font-style)]"
          } ${property1 === "without-icon" ? "text-[#ffffff]" : "text-primary-color"} ${
            property1 === "tertiary-button"
              ? "font-[number:var(--body-2-medium-font-weight)]"
              : "font-[number:var(--body-1-medium-font-weight)]"
          } ${
            property1 === "tertiary-button"
              ? "leading-[var(--body-2-medium-line-height)]"
              : "leading-[var(--body-1-medium-line-height)]"
          }`}
        >
          {property1 === "secondary-button" && <>{text}</>}

          {property1 === "tertiary-button" && <>Add Row</>}

          {property1 === "without-icon" && <>Create</>}
        </div>
      )}
    </div>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["button-with-icon", "tertiary-button", "without-icon", "secondary-button"]),
  text: PropTypes.string,
  icRoundKeyboard: PropTypes.string,
};
