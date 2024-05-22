/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Link } from "react-router-dom";

interface Props {
  className: any;
  materialSymbols: string;
  frameClassName: any;
  phShoppingCart: string;
  frameClassNameOverride: any;
  icSharpEditNote: string;
  fluentShop: string;
  fluentDiet: string;
  mdiGraphBellCurve: string;
  dashboardMoreWrapperClassName: any;
  phUsers: string;
  ionSettingsOutline: string;
  to: string;
}

export const NavBar = ({
  className,
  materialSymbols = "https://c.animaapp.com/b3MWxVfZ/img/material-symbols-space-dashboard-outline.svg",
  frameClassName,
  phShoppingCart = "https://c.animaapp.com/b3MWxVfZ/img/ph-shopping-cart.svg",
  frameClassNameOverride,
  icSharpEditNote = "https://c.animaapp.com/b3MWxVfZ/img/ic-sharp-edit-note.svg",
  fluentShop = "https://c.animaapp.com/b3MWxVfZ/img/fluent-mdl2-shop.svg",
  fluentDiet = "https://c.animaapp.com/b3MWxVfZ/img/fluent-mdl2-diet-plan-notebook.svg",
  mdiGraphBellCurve = "https://c.animaapp.com/b3MWxVfZ/img/mdi-graph-bell-curve-cumulative.svg",
  dashboardMoreWrapperClassName,
  phUsers = "https://c.animaapp.com/b3MWxVfZ/img/ph-users.svg",
  ionSettingsOutline = "https://c.animaapp.com/b3MWxVfZ/img/ion-settings-outline.svg",
  to,
}: Props): JSX.Element => {
  return (
    <div className={`relative w-[264px] h-[758px] bg-[#ffffff] shadow-[0px_1px_3px_#00000033] ${className}`}>
      <div className="inline-flex flex-col items-start gap-[14px] absolute top-[122px] left-[24px]">
        <div className="relative w-[240px] h-[24px]">
          <div className="absolute top-[3px] left-0 [font-family:'Poppins',Helvetica] font-normal text-lightgrayscale-300 text-[12px] tracking-[0.48px] leading-[16px] whitespace-nowrap">
            MAIN MENU
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
          <div className="flex flex-col w-[212px] h-[53px] items-start justify-center gap-[8px] pl-[24px] pr-[8px] py-[8px] relative rounded-[8px]">
            <div className="inline-flex items-center justify-center gap-[11px] relative flex-[0_0_auto]">
              <img className="relative flex-[0_0_auto]" alt="Material symbols" src={materialSymbols} />
              <div className="inline-flex items-start gap-[8px] px-[2px] py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-1-medium font-[number:var(--body-1-medium-font-weight)] text-[#181515] text-[length:var(--body-1-medium-font-size)] tracking-[var(--body-1-medium-letter-spacing)] leading-[var(--body-1-medium-line-height)] whitespace-nowrap [font-style:var(--body-1-medium-font-style)]">
                  Dashboard
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-[#ebeef0] flex flex-col w-[212px] h-[53px] items-start justify-center gap-[8px] pl-[24px] pr-[8px] py-[8px] relative rounded-[8px] ${frameClassName}`}
          >
            <div className="inline-flex items-center justify-center gap-[11px] relative flex-[0_0_auto]">
              <img className="relative flex-[0_0_auto]" alt="Ph shopping cart" src={phShoppingCart} />
              <div className="inline-flex items-start gap-[8px] px-[2px] py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-1-medium font-[number:var(--body-1-medium-font-weight)] text-[#181515] text-[length:var(--body-1-medium-font-size)] tracking-[var(--body-1-medium-letter-spacing)] leading-[var(--body-1-medium-line-height)] whitespace-nowrap [font-style:var(--body-1-medium-font-style)]">
                  Orders
                </div>
              </div>
            </div>
          </div>
          <Link
            className={`flex flex-col w-[212px] h-[53px] items-start justify-center gap-[8px] pl-[24px] pr-[8px] py-[8px] relative rounded-[8px] ${frameClassNameOverride}`}
            to={to}
          >
            <div className="inline-flex items-center justify-center gap-[11px] relative flex-[0_0_auto]">
              <img className="relative flex-[0_0_auto]" alt="Ic sharp edit note" src={icSharpEditNote} />
              <div className="inline-flex items-start gap-[8px] px-[2px] py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-1-medium font-[number:var(--body-1-medium-font-weight)] text-[#181515] text-[length:var(--body-1-medium-font-size)] tracking-[var(--body-1-medium-letter-spacing)] leading-[var(--body-1-medium-line-height)] whitespace-nowrap [font-style:var(--body-1-medium-font-style)]">
                  Requests
                </div>
              </div>
            </div>
          </Link>
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="flex flex-col w-[212px] items-start justify-center gap-[8px] pl-[24px] pr-[8px] py-[19px] relative flex-[0_0_auto] rounded-[8px]">
              <div className="inline-flex items-center justify-center gap-[11px] relative flex-[0_0_auto]">
                <img className="relative flex-[0_0_auto]" alt="Fluent shop" src={fluentShop} />
                <div className="inline-flex items-start gap-[8px] px-[2px] py-0 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#181515] text-[16px] tracking-[0.64px] leading-[16px] whitespace-nowrap">
                    Shop Floor
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[212px] items-start justify-center gap-[8px] pl-[24px] pr-[8px] py-[19px] relative flex-[0_0_auto] rounded-[8px]">
              <div className="inline-flex items-center justify-center gap-[11px] relative flex-[0_0_auto]">
                <img className="relative flex-[0_0_auto]" alt="Fluent diet" src={fluentDiet} />
                <div className="inline-flex items-start gap-[8px] px-[2px] py-0 relative flex-[0_0_auto]">
                  <div className="relative w-[138px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#181515] text-[16px] tracking-[0.64px] leading-[16px]">
                    Production Plan
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[212px] items-start justify-center gap-[8px] pl-[24px] pr-[8px] py-[19px] relative flex-[0_0_auto] rounded-[8px]">
              <div className="inline-flex items-center justify-center gap-[11px] relative flex-[0_0_auto]">
                <img className="relative flex-[0_0_auto]" alt="Mdi graph bell curve" src={mdiGraphBellCurve} />
                <div className="inline-flex items-start gap-[8px] px-[2px] py-0 relative flex-[0_0_auto]">
                  <div className="relative w-[138px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#181515] text-[16px] tracking-[0.64px] leading-[16px]">
                    Forcast
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col w-[264px] h-[189px] items-start gap-[8px] p-[8px] absolute top-[567px] left-0 ${dashboardMoreWrapperClassName}`}
      >
        <div className="inline-flex flex-col items-start gap-[14px] relative flex-[0_0_auto] border-t [border-top-style:solid] border-[#9d9d9d]">
          <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
            <div className="flex flex-col w-[212px] h-[53px] items-start justify-center gap-[8px] pl-[24px] pr-[8px] py-[8px] relative rounded-[8px]">
              <div className="inline-flex items-center justify-center gap-[11px] relative flex-[0_0_auto]">
                <img className="relative flex-[0_0_auto]" alt="Ph users" src={phUsers} />
                <div className="inline-flex items-start gap-[8px] px-[2px] py-0 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-1-medium font-[number:var(--body-1-medium-font-weight)] text-[#181515] text-[length:var(--body-1-medium-font-size)] tracking-[var(--body-1-medium-letter-spacing)] leading-[var(--body-1-medium-line-height)] whitespace-nowrap [font-style:var(--body-1-medium-font-style)]">
                    Users
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[212px] h-[53px] items-start justify-center gap-[8px] pl-[24px] pr-[8px] py-[8px] relative rounded-[8px]">
              <div className="inline-flex items-center justify-center gap-[11px] relative flex-[0_0_auto]">
                <img className="relative flex-[0_0_auto]" alt="Ion settings outline" src={ionSettingsOutline} />
                <div className="inline-flex items-start gap-[8px] px-[2px] py-0 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-1-medium font-[number:var(--body-1-medium-font-weight)] text-[#181515] text-[length:var(--body-1-medium-font-size)] tracking-[var(--body-1-medium-letter-spacing)] leading-[var(--body-1-medium-line-height)] whitespace-nowrap [font-style:var(--body-1-medium-font-style)]">
                    Settings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex items-center gap-[16px] absolute top-[24px] left-[24px]">
        <div className="relative w-[42px] h-[42px] bg-lightbackgroundprimary rounded-[6px] border-[0.75px] border-solid border-lightgrayscale-400">
          <div className="relative w-[24px] h-[24px] top-[8px] left-[8px]">
            <img
              className="absolute w-[19px] h-[19px] top-[2px] left-[2px]"
              alt="Icon"
              src="https://c.animaapp.com/b3MWxVfZ/img/icon-9.svg"
            />
          </div>
        </div>
        <div className="relative w-[45px] h-[24px] mr-[-2.00px]">
          <div className="absolute top-0 left-0 font-h6 font-[number:var(--h6-font-weight)] text-lightgrayscale-100 text-[length:var(--h6-font-size)] tracking-[var(--h6-letter-spacing)] leading-[var(--h6-line-height)] whitespace-nowrap [font-style:var(--h6-font-style)]">
            ABC
          </div>
        </div>
      </div>
    </div>
  );
};
