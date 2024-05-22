/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  icRoundKeyboard: string;
  img: string;
  text: string;
  icon: string;
  icon1: string;
}

export const NavDashboard = ({
  className,
  icRoundKeyboard = "https://c.animaapp.com/b3MWxVfZ/img/ic-round-keyboard-arrow-right.svg",
  img = "https://c.animaapp.com/b3MWxVfZ/img/ic-round-keyboard-arrow-right-1.svg",
  text = "Orders",
  icon = "https://c.animaapp.com/b3MWxVfZ/img/icon-1.svg",
  icon1 = "https://c.animaapp.com/b3MWxVfZ/img/icon-2.svg",
}: Props): JSX.Element => {
  return (
    <div className={`relative w-[1248px] h-[78px] bg-[#ffffff] ${className}`}>
      <div className="inline-flex flex-col items-start justify-center gap-[8px] p-[8px] absolute top-[14px] left-[17px]">
        <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-[6.3px] p-[7.88px] relative flex-[0_0_auto] bg-[#1d0202] rounded-[1.58px]">
            <div className="relative w-fit mt-[-0.79px] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-[14.2px] tracking-[0.57px] leading-[12.6px] whitespace-nowrap">
              A
            </div>
          </div>
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <img className="relative w-[20px] h-[20px]" alt="Ic round keyboard" src={icRoundKeyboard} />
              <div className="inline-flex items-center gap-[8px] p-[8px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#130101] text-[16px] tracking-[0.64px] leading-[16px] whitespace-nowrap">
                  Manufacturing
                </div>
              </div>
            </div>
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <img className="relative w-[20px] h-[20px]" alt="Ic round keyboard" src={img} />
              <div className="inline-flex items-center gap-[8px] p-[8px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#130101] text-[16px] tracking-[0.64px] leading-[16px] whitespace-nowrap">
                  {text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-end gap-[24px] absolute top-[16px] left-[624px]">
        <div className="relative w-[389px] h-[40px] bg-[#f7f9fb] rounded-[8px] overflow-hidden">
          <div className="relative w-[357px] h-[40px]">
            <div className="absolute w-[20px] h-[20px] top-[10px] left-[12px]">
              <img className="w-[14px] h-[14px] left-[2px] absolute top-[2px]" alt="Icon" src={icon} />
            </div>
            <div className="absolute w-[317px] h-[24px] top-[8px] left-[40px]">
              <p className="absolute w-[317px] -top-px left-0 [font-family:'Poppins',Helvetica] font-normal text-lightgrayscale-300 text-[16px] tracking-[0] leading-[24px]">
                Search or type a command (Ctrl + G)
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[28px] h-[24px]">
          <div className="relative h-[24px]">
            <div className="absolute w-[24px] h-[24px] top-0 left-0">
              <img className="w-[17px] h-[21px] left-[4px] absolute top-[2px]" alt="Icon" src={icon1} />
            </div>
            <div className="inline-flex items-center px-[4px] py-0 absolute top-0 left-[13px] bg-lightredbase rounded-[96px]">
              <div className="relative w-fit mt-[-1.00px] font-caps-caps-3-10-semi-bold font-[number:var(--caps-caps-3-10-semi-bold-font-weight)] text-white text-[length:var(--caps-caps-3-10-semi-bold-font-size)] text-center tracking-[var(--caps-caps-3-10-semi-bold-letter-spacing)] leading-[var(--caps-caps-3-10-semi-bold-line-height)] whitespace-nowrap [font-style:var(--caps-caps-3-10-semi-bold-font-style)]">
                2
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-[32px] h-[32px] bg-lightbackgroundblue rounded-[256px]">
                <div className="absolute top-[5px] left-[12px] font-heading-h6-13 font-[number:var(--heading-h6-13-font-weight)] text-lightbluebase text-[length:var(--heading-h6-13-font-size)] text-center tracking-[var(--heading-h6-13-letter-spacing)] leading-[var(--heading-h6-13-line-height)] whitespace-nowrap [font-style:var(--heading-h6-13-font-style)]">
                  P
                </div>
              </div>
              <div className="relative w-fit font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-100 text-[length:var(--heading-h5-16-font-size)] tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] whitespace-nowrap [font-style:var(--heading-h5-16-font-style)]">
                Pixsellz
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
