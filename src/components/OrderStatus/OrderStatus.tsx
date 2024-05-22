/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  property1: "default" | "pending" | "recent" | "ongoing" | "not-started" | "approved";
  className: any;
}

export const OrderStatus = ({ property1, className }: Props): JSX.Element => {
  return (
    <div
      className={`w-[72px] flex items-center gap-[8px] p-[8px] rounded-[4px] justify-center relative ${
        property1 === "ongoing"
          ? "bg-[#fff8d4]"
          : property1 === "not-started"
          ? "bg-[#ffdfdf]"
          : property1 === "approved"
          ? "bg-[#d0f3ff]"
          : property1 === "recent"
          ? "bg-[#ffe6d0]"
          : property1 === "pending"
          ? "bg-[#faf5c4]"
          : "bg-[#d6ffd0]"
      } ${className}`}
    >
      <div
        className={`font-button-3 w-fit mt-[-1.00px] tracking-[var(--button-3-letter-spacing)] text-[length:var(--button-3-font-size)] [font-style:var(--button-3-font-style)] font-[number:var(--button-3-font-weight)] leading-[var(--button-3-line-height)] whitespace-nowrap relative ${
          ["default", "not-started"].includes(property1) ? "mr-[-1.50px]" : ""
        } ${["default", "not-started"].includes(property1) ? "ml-[-1.50px]" : ""} ${
          property1 === "ongoing"
            ? "text-[#c8981a]"
            : property1 === "not-started"
            ? "text-[#8c0909]"
            : property1 === "approved"
            ? "text-[#093d8c]"
            : property1 === "recent"
            ? "text-[#b5491a]"
            : property1 === "pending"
            ? "text-[#8b5301]"
            : "text-[#0b8c09]"
        }`}
      >
        {property1 === "default" && <>Completed</>}

        {property1 === "ongoing" && <>Ongoing</>}

        {property1 === "not-started" && <>Not Started</>}

        {property1 === "approved" && <>Approved</>}

        {property1 === "recent" && <>Recent</>}

        {property1 === "pending" && <>Pending</>}
      </div>
    </div>
  );
};
