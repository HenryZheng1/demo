import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { NavDashboard } from "../../components/NavDashboard";
import { OrderStatus } from "../../components/OrderStatus";

export const InventoryRequests = (): JSX.Element => {
  return (
    <div className="bg-[#f7f9fb] flex flex-row justify-center w-full">
      <div className="bg-[#f7f9fb] w-[1512px] h-[1023px] relative">
        <div className="absolute w-[1248px] h-[941px] top-[82px] left-[264px]">
          <div className="relative w-[1180px] h-[775px] top-[44px] left-[35px] bg-lightbackgroundprimary rounded-[12px_0px_0px_0px] overflow-hidden shadow-light-drop-shadow-2">
            <img
              className="w-[1128px] top-[160px] absolute h-px left-0"
              alt="Horizontal"
              src="https://c.animaapp.com/b3MWxVfZ/img/horizontal.svg"
            />
            <div className="flex w-[1125px] items-center absolute top-[169px] left-[32px]">
              <div className="justify-center shadow-[inset_0px_-2px_0px_#0084ff] inline-flex items-center gap-[8px] px-[24px] py-[8px] relative flex-[0_0_auto] bg-lightbackgroundprimary">
                <div className="relative w-fit mt-[-1.00px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightbluebase text-[length:var(--heading-h5-16-font-size)] text-center tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] whitespace-nowrap [font-style:var(--heading-h5-16-font-style)]">
                  Total Requests
                </div>
              </div>
              <div className="inline-flex items-center gap-[8px] px-[24px] py-[8px] bg-lightbackgroundprimary shadow-[inset_0px_-1px_0px_#e8e8e8] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-200 text-[length:var(--heading-h5-16-font-size)] text-center tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] whitespace-nowrap [font-style:var(--heading-h5-16-font-style)]">
                  Approved Requests
                </div>
              </div>
              <div className="inline-flex items-center gap-[8px] px-[24px] py-[8px] bg-lightbackgroundprimary shadow-[inset_0px_-1px_0px_#e8e8e8] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-200 text-[length:var(--heading-h5-16-font-size)] text-center tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] whitespace-nowrap [font-style:var(--heading-h5-16-font-style)]">
                  Pending Requests
                </div>
              </div>
              <div className="inline-flex items-center gap-[8px] px-[24px] py-[8px] bg-lightbackgroundprimary shadow-[inset_0px_-1px_0px_#e8e8e8] relative flex-[0_0_auto]" />
              <div className="inline-flex items-center gap-[8px] px-[24px] py-[8px] bg-lightbackgroundprimary shadow-[inset_0px_-1px_0px_#e8e8e8] relative flex-[0_0_auto]" />
              <div className="inline-flex items-center gap-[8px] px-[24px] py-[8px] bg-lightbackgroundprimary shadow-[inset_0px_-1px_0px_#e8e8e8] relative flex-[0_0_auto]" />
              <div className="mr-[-106.00px] shadow-[inset_0px_-1px_0px_#e8e8e8] inline-flex items-center gap-[8px] px-[24px] py-[8px] relative flex-[0_0_auto] bg-lightbackgroundprimary" />
            </div>
            <div className="inline-flex items-start gap-[8px] absolute top-[900px] left-[840px]">
              <img
                className="mb-[-688.24px] mr-[-993.00px] relative flex-[0_0_auto]"
                alt="X base arrow"
                src="https://c.animaapp.com/b3MWxVfZ/img/x-base-arrow-1@2x.png"
              />
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <button className="all-[unset] box-border flex-col items-center gap-[8px] px-[12px] py-[8px] bg-lightbluebase rounded-[8px] overflow-hidden shadow-light-drop-shadow-2 inline-flex relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-white text-[length:var(--heading-h5-16-font-size)] text-center tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] whitespace-nowrap [font-style:var(--heading-h5-16-font-style)]">
                    1
                  </div>
                </button>
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <button className="all-[unset] box-border inline-flex flex-col items-center gap-[8px] px-[12px] py-[8px] relative flex-[0_0_auto] bg-lightbackgroundprimary rounded-[8px] overflow-hidden border border-solid border-lightgrayscale-400 shadow-light-drop-shadow-1">
                  <div className="relative w-fit mt-[-1.00px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-100 text-[length:var(--heading-h5-16-font-size)] text-center tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] whitespace-nowrap [font-style:var(--heading-h5-16-font-style)]">
                    2
                  </div>
                </button>
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <button className="all-[unset] box-border inline-flex flex-col items-center gap-[8px] px-[12px] py-[8px] relative flex-[0_0_auto] bg-lightbackgroundprimary rounded-[8px] overflow-hidden border border-solid border-lightgrayscale-400 shadow-light-drop-shadow-1">
                  <div className="relative w-fit mt-[-1.00px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-100 text-[length:var(--heading-h5-16-font-size)] text-center tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] whitespace-nowrap [font-style:var(--heading-h5-16-font-style)]">
                    3
                  </div>
                </button>
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <button className="all-[unset] box-border inline-flex flex-col items-center gap-[8px] px-[12px] py-[8px] relative flex-[0_0_auto] bg-lightbackgroundprimary rounded-[8px] overflow-hidden border border-solid border-lightgrayscale-400 shadow-light-drop-shadow-1">
                  <div className="relative w-fit mt-[-1.00px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-100 text-[length:var(--heading-h5-16-font-size)] text-center tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] whitespace-nowrap [font-style:var(--heading-h5-16-font-style)]">
                    4
                  </div>
                </button>
              </div>
              <img
                className="relative flex-[0_0_auto] mb-[-688.24px] mr-[-1209.00px]"
                alt="X base arrow"
                src="https://c.animaapp.com/b3MWxVfZ/img/x-base-arrow-1@2x.png"
              />
            </div>
            <div className="inline-flex items-center gap-[12px] absolute top-[900px] left-[32px]">
              <div className="relative w-fit font-paragraph-p2-16 font-[number:var(--paragraph-p2-16-font-weight)] text-lightgrayscale-200 text-[length:var(--paragraph-p2-16-font-size)] tracking-[var(--paragraph-p2-16-letter-spacing)] leading-[var(--paragraph-p2-16-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-16-font-style)]">
                Go to
              </div>
              <div className="flex flex-col w-[64px] items-start gap-[8px] relative">
                <div className="relative self-stretch w-full h-[40px] bg-lightbackgroundprimary rounded-[8px] overflow-hidden border border-solid border-lightgrayscale-400">
                  <div className="w-[32px] h-[40px]">
                    <div className="relative w-[20px] h-[24px] top-[8px] left-[12px]">
                      <div className="absolute w-[20px] -top-px left-0 font-paragraph-p2-16 font-[number:var(--paragraph-p2-16-font-weight)] text-lightgrayscale-200 text-[length:var(--paragraph-p2-16-font-size)] tracking-[var(--paragraph-p2-16-letter-spacing)] leading-[var(--paragraph-p2-16-line-height)] [font-style:var(--paragraph-p2-16-font-style)]">
                        10
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-fit font-paragraph-p2-16 font-[number:var(--paragraph-p2-16-font-weight)] text-lightgrayscale-200 text-[length:var(--paragraph-p2-16-font-size)] tracking-[var(--paragraph-p2-16-letter-spacing)] leading-[var(--paragraph-p2-16-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-16-font-style)]">
                page
              </div>
            </div>
            <div className="inline-flex items-center gap-[387px] absolute top-[48px] left-[32px]">
              <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-h5-bold font-[number:var(--h5-bold-font-weight)] text-lightgrayscale-100 text-[length:var(--h5-bold-font-size)] tracking-[var(--h5-bold-letter-spacing)] leading-[var(--h5-bold-line-height)] whitespace-nowrap [font-style:var(--h5-bold-font-style)]">
                  Inventory Requests
                </div>
                <p className="relative w-fit font-body-1 font-[number:var(--body-1-font-weight)] text-grey text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] whitespace-nowrap [font-style:var(--body-1-font-style)]">
                  You Have requests awaiting your approval
                </p>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[8px] pt-0 pb-[40px] px-0 absolute top-[324px] left-[32px]">
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div className="relative w-[111px] h-[52px]">
                  <div className="absolute w-[30px] top-[13px] left-[65px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-300 text-[length:var(--heading-h5-16-font-size)] tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] [font-style:var(--heading-h5-16-font-style)]">
                    No.
                  </div>
                  <img
                    className="w-[111px] top-[51px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-1.svg"
                  />
                </div>
                <div className="w-[173px] relative h-[52px]">
                  <p className="w-[141px] top-[13px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-transparent text-[length:var(--heading-h5-16-font-size)] tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] absolute left-[16px] [font-style:var(--heading-h5-16-font-style)]">
                    <span className="text-[#969696] font-heading-h5-16 [font-style:var(--heading-h5-16-font-style)] font-[number:var(--heading-h5-16-font-weight)] tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] text-[length:var(--heading-h5-16-font-size)]">
                      Order ID{" "}
                    </span>
                    <span className="text-[#e71d36] font-heading-h5-16 [font-style:var(--heading-h5-16-font-style)] font-[number:var(--heading-h5-16-font-weight)] tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] text-[length:var(--heading-h5-16-font-size)]">
                      *
                    </span>
                  </p>
                  <img
                    className="w-[173px] top-[51px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-37.svg"
                  />
                </div>
                <div className="w-[213px] relative h-[52px]">
                  <div className="absolute w-[181px] top-[13px] left-[16px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-300 text-[length:var(--heading-h5-16-font-size)] tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] [font-style:var(--heading-h5-16-font-style)]">
                    Description
                  </div>
                  <img
                    className="w-[213px] top-[51px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-38.svg"
                  />
                </div>
                <div className="w-[112px] relative h-[52px]">
                  <p className="absolute w-[80px] top-[13px] left-[16px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-transparent text-[length:var(--heading-h5-16-font-size)] tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] [font-style:var(--heading-h5-16-font-style)]">
                    <span className="text-[#969696] font-heading-h5-16 [font-style:var(--heading-h5-16-font-style)] font-[number:var(--heading-h5-16-font-weight)] tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] text-[length:var(--heading-h5-16-font-size)]">
                      Qty{" "}
                    </span>
                    <span className="text-[#e71d36] font-heading-h5-16 [font-style:var(--heading-h5-16-font-style)] font-[number:var(--heading-h5-16-font-weight)] tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] text-[length:var(--heading-h5-16-font-size)]">
                      *
                    </span>
                  </p>
                  <img
                    className="w-[112px] top-[51px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-39.svg"
                  />
                </div>
                <div className="w-[153px] relative h-[52px]">
                  <div className="absolute w-[137px] top-[13px] left-[16px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-300 text-[length:var(--heading-h5-16-font-size)] tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] [font-style:var(--heading-h5-16-font-style)]">
                    Approval Status
                  </div>
                  <img
                    className="w-[153px] top-[51px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-5.svg"
                  />
                </div>
                <div className="w-[217px] relative h-[52px]">
                  <div className="absolute w-[169px] top-[13px] left-[18px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-300 text-[length:var(--heading-h5-16-font-size)] tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] [font-style:var(--heading-h5-16-font-style)]">
                    Bill of Materials
                  </div>
                  <img
                    className="w-[217px] top-[51px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-6.svg"
                  />
                </div>
                <div className="w-[129px] relative h-[52px]">
                  <div className="absolute w-[97px] top-[13px] left-[18px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-300 text-[length:var(--heading-h5-16-font-size)] tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] [font-style:var(--heading-h5-16-font-style)]">
                    Due Date
                  </div>
                  <img
                    className="w-[129px] top-[51px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-7.svg"
                  />
                </div>
              </div>
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <img
                  className="w-[56px] relative h-[64px]"
                  alt="Cell icon"
                  src="https://c.animaapp.com/b3MWxVfZ/img/cell-icon-4.svg"
                />
                <div className="w-[55px] relative h-[64px]">
                  <img
                    className="absolute w-[55px] h-px top-[63px] left-0 object-cover"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-36.svg"
                  />
                  <div className="absolute w-[13px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-semibold text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    1
                  </div>
                </div>
                <div className="w-[173px] relative h-[64px]">
                  <div className="absolute w-[141px] top-[19px] left-[16px] [font-family:'Poppins',Helvetica] font-normal text-lightgrayscale-200 text-[16px] tracking-[0] leading-[24px]">
                    0957746KJLY
                  </div>
                  <img
                    className="w-[173px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-37.svg"
                  />
                </div>
                <div className="w-[213px] relative h-[64px]">
                  <img
                    className="w-[213px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-38.svg"
                  />
                  <div className="absolute w-[168px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-normal text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    Item List : Widget....
                  </div>
                </div>
                <div className="w-[112px] relative h-[64px]">
                  <img
                    className="w-[112px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-39.svg"
                  />
                  <div className="absolute w-[78px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-semibold text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    10
                  </div>
                </div>
                <div className="w-[153px] relative h-[64px]">
                  <img
                    className="w-[153px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-40.svg"
                  />
                  <OrderStatus className="!absolute !left-[16px] !top-[20px]" property1="approved" />
                </div>
                <div className="w-[220px] relative h-[64px]">
                  <img
                    className="w-[220px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-41.svg"
                  />
                  <div className="absolute w-[168px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-normal text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    BOM-Rizz-0523-001
                  </div>
                </div>
                <div className="w-[122px] relative h-[64px]">
                  <div className="absolute w-[90px] top-[9px] left-[16px] font-paragraph-p2-16 font-[number:var(--paragraph-p2-16-font-weight)] text-lightgrayscale-200 text-[length:var(--paragraph-p2-16-font-size)] tracking-[var(--paragraph-p2-16-letter-spacing)] leading-[var(--paragraph-p2-16-line-height)] [font-style:var(--paragraph-p2-16-font-style)]">
                    24.12.2020
                  </div>
                  <div className="absolute w-[90px] top-[34px] left-[16px] font-paragraph-p3-13 font-[number:var(--paragraph-p3-13-font-weight)] text-lightgrayscale-300 text-[length:var(--paragraph-p3-13-font-size)] tracking-[var(--paragraph-p3-13-letter-spacing)] leading-[var(--paragraph-p3-13-line-height)] [font-style:var(--paragraph-p3-13-font-style)]">
                    11:16 AM
                  </div>
                  <img
                    className="w-[122px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-42.svg"
                  />
                </div>
              </div>
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <img
                  className="w-[56px] relative h-[64px]"
                  alt="Cell icon"
                  src="https://c.animaapp.com/b3MWxVfZ/img/cell-icon-4.svg"
                />
                <div className="w-[55px] relative h-[64px]">
                  <img
                    className="absolute w-[55px] h-px top-[63px] left-0 object-cover"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-36.svg"
                  />
                  <div className="absolute w-[13px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-semibold text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    2
                  </div>
                </div>
                <div className="w-[173px] relative h-[64px]">
                  <div className="absolute w-[141px] top-[19px] left-[16px] [font-family:'Poppins',Helvetica] font-normal text-lightgrayscale-200 text-[16px] tracking-[0] leading-[24px]">
                    0957746KJLY
                  </div>
                  <img
                    className="w-[173px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-37.svg"
                  />
                </div>
                <div className="w-[213px] relative h-[64px]">
                  <img
                    className="w-[213px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-38.svg"
                  />
                  <div className="absolute w-[168px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-normal text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    Item List : Widget....
                  </div>
                </div>
                <div className="w-[112px] relative h-[64px]">
                  <img
                    className="w-[112px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-39.svg"
                  />
                  <div className="absolute w-[78px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-semibold text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    7
                  </div>
                </div>
                <div className="w-[153px] relative h-[64px]">
                  <img
                    className="w-[153px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-40.svg"
                  />
                  <OrderStatus className="!absolute !left-[16px] !top-[20px]" property1="pending" />
                </div>
                <div className="w-[220px] relative h-[64px]">
                  <img
                    className="w-[220px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-41.svg"
                  />
                  <div className="absolute w-[168px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-normal text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    BOM-Rizz-0523-001
                  </div>
                </div>
                <div className="w-[122px] relative h-[64px]">
                  <div className="absolute w-[90px] top-[9px] left-[16px] font-paragraph-p2-16 font-[number:var(--paragraph-p2-16-font-weight)] text-lightgrayscale-200 text-[length:var(--paragraph-p2-16-font-size)] tracking-[var(--paragraph-p2-16-letter-spacing)] leading-[var(--paragraph-p2-16-line-height)] [font-style:var(--paragraph-p2-16-font-style)]">
                    24.12.2020
                  </div>
                  <div className="absolute w-[90px] top-[34px] left-[16px] font-paragraph-p3-13 font-[number:var(--paragraph-p3-13-font-weight)] text-lightgrayscale-300 text-[length:var(--paragraph-p3-13-font-size)] tracking-[var(--paragraph-p3-13-letter-spacing)] leading-[var(--paragraph-p3-13-line-height)] [font-style:var(--paragraph-p3-13-font-style)]">
                    11:16 AM
                  </div>
                  <img
                    className="w-[122px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-42.svg"
                  />
                </div>
              </div>
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <img
                  className="w-[56px] relative h-[64px]"
                  alt="Cell icon"
                  src="https://c.animaapp.com/b3MWxVfZ/img/cell-icon-4.svg"
                />
                <div className="w-[55px] relative h-[64px]">
                  <img
                    className="absolute w-[55px] h-px top-[63px] left-0 object-cover"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-36.svg"
                  />
                  <div className="absolute w-[13px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-semibold text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    3
                  </div>
                </div>
                <div className="w-[173px] relative h-[64px]">
                  <div className="absolute w-[141px] top-[19px] left-[16px] [font-family:'Poppins',Helvetica] font-normal text-lightgrayscale-200 text-[16px] tracking-[0] leading-[24px]">
                    0957746KJLY
                  </div>
                  <img
                    className="w-[173px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-37.svg"
                  />
                </div>
                <div className="w-[213px] relative h-[64px]">
                  <img
                    className="w-[213px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-38.svg"
                  />
                  <div className="absolute w-[168px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-normal text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    Item List : Widget....
                  </div>
                </div>
                <div className="w-[112px] relative h-[64px]">
                  <img
                    className="w-[112px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-39.svg"
                  />
                  <div className="absolute w-[78px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-semibold text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    8
                  </div>
                </div>
                <div className="w-[153px] relative h-[64px]">
                  <img
                    className="w-[153px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-40.svg"
                  />
                  <OrderStatus className="!absolute !left-[16px] !top-[20px]" property1="pending" />
                </div>
                <div className="w-[220px] relative h-[64px]">
                  <img
                    className="w-[220px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-41.svg"
                  />
                  <div className="absolute w-[168px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-normal text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    BOM-Rizz-0523-001
                  </div>
                </div>
                <div className="w-[122px] relative h-[64px]">
                  <div className="absolute w-[90px] top-[9px] left-[16px] font-paragraph-p2-16 font-[number:var(--paragraph-p2-16-font-weight)] text-lightgrayscale-200 text-[length:var(--paragraph-p2-16-font-size)] tracking-[var(--paragraph-p2-16-letter-spacing)] leading-[var(--paragraph-p2-16-line-height)] [font-style:var(--paragraph-p2-16-font-style)]">
                    24.12.2020
                  </div>
                  <div className="absolute w-[90px] top-[34px] left-[16px] font-paragraph-p3-13 font-[number:var(--paragraph-p3-13-font-weight)] text-lightgrayscale-300 text-[length:var(--paragraph-p3-13-font-size)] tracking-[var(--paragraph-p3-13-letter-spacing)] leading-[var(--paragraph-p3-13-line-height)] [font-style:var(--paragraph-p3-13-font-style)]">
                    11:16 AM
                  </div>
                  <img
                    className="w-[122px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-42.svg"
                  />
                </div>
              </div>
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <img
                  className="w-[56px] relative h-[64px]"
                  alt="Cell icon"
                  src="https://c.animaapp.com/b3MWxVfZ/img/cell-icon-4.svg"
                />
                <div className="w-[55px] relative h-[64px]">
                  <img
                    className="absolute w-[55px] h-px top-[63px] left-0 object-cover"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-36.svg"
                  />
                  <div className="absolute w-[13px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-semibold text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    4
                  </div>
                </div>
                <div className="w-[173px] relative h-[64px]">
                  <div className="absolute w-[141px] top-[19px] left-[16px] [font-family:'Poppins',Helvetica] font-normal text-lightgrayscale-200 text-[16px] tracking-[0] leading-[24px]">
                    0957746KJLY
                  </div>
                  <img
                    className="w-[173px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-37.svg"
                  />
                </div>
                <div className="w-[213px] relative h-[64px]">
                  <img
                    className="w-[213px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-38.svg"
                  />
                  <div className="absolute w-[168px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-normal text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    Item List : Widget....
                  </div>
                </div>
                <div className="w-[112px] relative h-[64px]">
                  <img
                    className="w-[112px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-39.svg"
                  />
                  <div className="absolute w-[78px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-semibold text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    6
                  </div>
                </div>
                <div className="w-[153px] relative h-[64px]">
                  <img
                    className="w-[153px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-40.svg"
                  />
                  <OrderStatus className="!absolute !left-[16px] !top-[20px]" property1="pending" />
                </div>
                <div className="w-[220px] relative h-[64px]">
                  <img
                    className="w-[220px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-41.svg"
                  />
                  <div className="absolute w-[168px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-normal text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    BOM-Rizz-0523-001
                  </div>
                </div>
                <div className="w-[122px] relative h-[64px]">
                  <div className="absolute w-[90px] top-[9px] left-[16px] font-paragraph-p2-16 font-[number:var(--paragraph-p2-16-font-weight)] text-lightgrayscale-200 text-[length:var(--paragraph-p2-16-font-size)] tracking-[var(--paragraph-p2-16-letter-spacing)] leading-[var(--paragraph-p2-16-line-height)] [font-style:var(--paragraph-p2-16-font-style)]">
                    24.12.2020
                  </div>
                  <div className="absolute w-[90px] top-[34px] left-[16px] font-paragraph-p3-13 font-[number:var(--paragraph-p3-13-font-weight)] text-lightgrayscale-300 text-[length:var(--paragraph-p3-13-font-size)] tracking-[var(--paragraph-p3-13-letter-spacing)] leading-[var(--paragraph-p3-13-line-height)] [font-style:var(--paragraph-p3-13-font-style)]">
                    11:16 AM
                  </div>
                  <img
                    className="w-[122px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-42.svg"
                  />
                </div>
              </div>
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <img
                  className="w-[56px] relative h-[64px]"
                  alt="Cell icon"
                  src="https://c.animaapp.com/b3MWxVfZ/img/cell-icon-4.svg"
                />
                <div className="w-[55px] relative h-[64px]">
                  <img
                    className="absolute w-[55px] h-px top-[63px] left-0 object-cover"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-36.svg"
                  />
                  <div className="absolute w-[13px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-semibold text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    5
                  </div>
                </div>
                <div className="w-[173px] relative h-[64px]">
                  <div className="absolute w-[141px] top-[19px] left-[16px] [font-family:'Poppins',Helvetica] font-normal text-lightgrayscale-200 text-[16px] tracking-[0] leading-[24px]">
                    0957746KJLY
                  </div>
                  <img
                    className="w-[173px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-37.svg"
                  />
                </div>
                <div className="w-[213px] relative h-[64px]">
                  <img
                    className="w-[213px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-38.svg"
                  />
                  <div className="absolute w-[168px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-normal text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    Item List : Widget....
                  </div>
                </div>
                <div className="w-[112px] relative h-[64px]">
                  <img
                    className="w-[112px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-39.svg"
                  />
                  <div className="absolute w-[78px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-semibold text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    6
                  </div>
                </div>
                <div className="w-[153px] relative h-[64px]">
                  <img
                    className="w-[153px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-40.svg"
                  />
                  <OrderStatus className="!absolute !left-[16px] !top-[20px]" property1="pending" />
                </div>
                <div className="w-[220px] relative h-[64px]">
                  <img
                    className="w-[220px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-41.svg"
                  />
                  <div className="absolute w-[168px] top-[19px] left-[18px] [font-family:'Poppins',Helvetica] font-normal text-[#403f3f] text-[16px] tracking-[0] leading-[24px]">
                    BOM-Rizz-0523-001
                  </div>
                </div>
                <div className="w-[122px] relative h-[64px]">
                  <div className="absolute w-[90px] top-[9px] left-[16px] font-paragraph-p2-16 font-[number:var(--paragraph-p2-16-font-weight)] text-lightgrayscale-200 text-[length:var(--paragraph-p2-16-font-size)] tracking-[var(--paragraph-p2-16-letter-spacing)] leading-[var(--paragraph-p2-16-line-height)] [font-style:var(--paragraph-p2-16-font-style)]">
                    24.12.2020
                  </div>
                  <div className="absolute w-[90px] top-[34px] left-[16px] font-paragraph-p3-13 font-[number:var(--paragraph-p3-13-font-weight)] text-lightgrayscale-300 text-[length:var(--paragraph-p3-13-font-size)] tracking-[var(--paragraph-p3-13-letter-spacing)] leading-[var(--paragraph-p3-13-line-height)] [font-style:var(--paragraph-p3-13-font-style)]">
                    11:16 AM
                  </div>
                  <img
                    className="w-[122px] top-[63px] object-cover absolute h-px left-0"
                    alt="Horizontal"
                    src="https://c.animaapp.com/b3MWxVfZ/img/horizontal-42.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute w-[1104px] h-[43px] top-[241px] left-[32px]">
              <div className="inline-flex h-[40px] items-start gap-[12px] absolute top-0 left-0">
                <button className="all-[unset] box-border items-start mb-[-0.22px] inline-flex relative flex-[0_0_auto]">
                  <button className="all-[unset] box-border items-center gap-[8px] px-[12px] py-[8px] bg-lightbackgroundprimary rounded-[8px] overflow-hidden border border-solid border-lightgrayscale-400 shadow-light-drop-shadow-1 inline-flex relative flex-[0_0_auto]">
                    <div className="relative w-[20px] h-[20px]">
                      <img
                        className="absolute w-[17px] h-[18px] top-px left-[2px]"
                        alt="Icon"
                        src="https://c.animaapp.com/b3MWxVfZ/img/icon-3.svg"
                      />
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-100 text-[length:var(--heading-h5-16-font-size)] text-center tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] whitespace-nowrap [font-style:var(--heading-h5-16-font-style)]">
                      Last 30 days
                    </div>
                    <img
                      className="relative w-[20px] h-[20px]"
                      alt="Icon"
                      src="https://c.animaapp.com/b3MWxVfZ/img/icon-5.svg"
                    />
                  </button>
                </button>
                <button className="all-[unset] box-border items-start mb-[-0.22px] inline-flex relative flex-[0_0_auto]">
                  <button className="all-[unset] box-border items-center gap-[8px] px-[12px] py-[8px] bg-lightbackgroundprimary rounded-[8px] overflow-hidden border border-solid border-lightgrayscale-400 shadow-light-drop-shadow-1 inline-flex relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-lightgrayscale-100 text-[length:var(--heading-h5-16-font-size)] text-center tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] whitespace-nowrap [font-style:var(--heading-h5-16-font-style)]">
                      Filter by
                    </div>
                    <img
                      className="relative w-[20px] h-[20px]"
                      alt="Icon"
                      src="https://c.animaapp.com/b3MWxVfZ/img/icon-5.svg"
                    />
                  </button>
                </button>
              </div>
              <div className="inline-flex h-[40px] items-start gap-[12px] absolute top-[3px] left-[523px]">
                <div className="relative w-[406px] h-[40px] mb-[-0.22px] bg-[#f7f9fb] rounded-[8px] overflow-hidden">
                  <div className="w-[374px] relative h-[40px]">
                    <div className="absolute w-[20px] h-[20px] top-[10px] left-[12px]">
                      <img
                        className="absolute w-[14px] h-[14px] top-[2px] left-[2px]"
                        alt="Icon"
                        src="https://c.animaapp.com/b3MWxVfZ/img/icon-6.svg"
                      />
                    </div>
                    <div className="w-[334px] absolute h-[24px] top-[8px] left-[40px]">
                      <p className="absolute w-[334px] -top-px left-0 [font-family:'Poppins',Helvetica] font-normal text-lightgrayscale-300 text-[16px] tracking-[0] leading-[24px]">
                        Search or type a command (Ctrl + G)
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/requestOrder">
                  <button className="all-[unset] box-border items-center px-[12px] py-[8px] mb-[-0.22px] bg-[#111111] rounded-[8px] overflow-hidden border border-solid border-lightgrayscale-400 shadow-light-drop-shadow-1 inline-flex relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-[#ffffff] text-[length:var(--heading-h5-16-font-size)] text-center tracking-[var(--heading-h5-16-letter-spacing)] leading-[var(--heading-h5-16-line-height)] whitespace-nowrap [font-style:var(--heading-h5-16-font-style)]">
                      Create Request
                    </div>
                    <img
                      className="relative w-[20px] h-[20px]"
                      alt="Ic round keyboard"
                      src="https://c.animaapp.com/b3MWxVfZ/img/ic-round-keyboard-arrow-right-2.svg"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <NavDashboard
          className="!absolute !left-[264px] !top-0"
          icRoundKeyboard="https://c.animaapp.com/b3MWxVfZ/img/ic-round-keyboard-arrow-right-4.svg"
          icon="https://c.animaapp.com/b3MWxVfZ/img/icon-7.svg"
          icon1="https://c.animaapp.com/b3MWxVfZ/img/icon-8.svg"
          img="https://c.animaapp.com/b3MWxVfZ/img/ic-round-keyboard-arrow-right-4.svg"
          text="Requests"
        />
        <NavBar
          className="!h-[906px] !absolute !left-0 !top-0"
          dashboardMoreWrapperClassName="!top-[715px]"
          fluentDiet="https://c.animaapp.com/b3MWxVfZ/img/fluent-mdl2-diet-plan-notebook-1.svg"
          fluentShop="https://c.animaapp.com/b3MWxVfZ/img/fluent-mdl2-shop-1.svg"
          frameClassName="!bg-[unset]"
          frameClassNameOverride="!bg-[#ebeef0]"
          icSharpEditNote="https://c.animaapp.com/b3MWxVfZ/img/ic-sharp-edit-note-1.svg"
          ionSettingsOutline="https://c.animaapp.com/b3MWxVfZ/img/ion-settings-outline-1.svg"
          materialSymbols="https://c.animaapp.com/b3MWxVfZ/img/material-symbols-space-dashboard-outline-1.svg"
          mdiGraphBellCurve="https://c.animaapp.com/b3MWxVfZ/img/mdi-graph-bell-curve-cumulative-1.svg"
          phShoppingCart="https://c.animaapp.com/b3MWxVfZ/img/ph-shopping-cart-1.svg"
          phUsers="https://c.animaapp.com/b3MWxVfZ/img/ph-users-1.svg"
          to="/inventory-requests"
        />
      </div>
    </div>
  );
};
