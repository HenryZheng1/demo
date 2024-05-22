import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RequestOrder = () => {
  const [requestorsName, setRequestorsName] = useState("");
  const [requestorsDepartment, setRequestorsDepartment] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantityRequested, setQuantityRequested] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [uom, setUom] = useState("");
  const [requestedDeliveryDate, setRequestedDeliveryDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [signature, setSignature] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      !!(
        requestorsName &&
        requestorsDepartment &&
        itemName &&
        quantityRequested &&
        itemDescription &&
        uom &&
        requestedDeliveryDate &&
        deliveryDate &&
        signature
      )
    );
  }, [
    requestorsName,
    requestorsDepartment,
    itemName,
    quantityRequested,
    itemDescription,
    uom,
    requestedDeliveryDate,
    deliveryDate,
    signature,
  ]);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted with data:", {
      requestorsName,
      requestorsDepartment,
      itemName,
      quantityRequested,
      itemDescription,
      uom,
      requestedDeliveryDate,
      deliveryDate,
      signature,
    });
  };

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/"); // Routes back to the root path ('/')
  };

  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-[#ffffff] w-[1319px] h-[1134px] relative">
        <div className="absolute w-[1128px] h-[964px] top-[78px] left-[128px] bg-lightbackgroundprimary rounded-[12px_0px_0px_0px] overflow-hidden shadow-light-drop-shadow-2">
          <img
            className="absolute w-[1128px] h-px top-[136px] left-0"
            alt="Horizontal"
            src="horizontal.svg"
          />
          <div className="absolute w-[1079px] h-[773px] top-[145px] left-[32px]">
            <div className="inline-flex flex-col items-start gap-[64px] relative">
              <div className="flex w-[1079px] items-center relative flex-[0_0_auto]">
                <div className="flex w-[199px] items-center justify-center gap-[8px] px-[24px] py-[8px] relative bg-lightbackgroundprimary shadow-[inset_0px_-2px_0px_#0084ff]">
                  <div className="font-body-1-medium font-[number:var(--body-1-medium-font-weight)] text-lightbluebase leading-[var(--body-1-medium-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-1-medium-font-size)] text-center tracking-[var(--body-1-medium-letter-spacing)] whitespace-nowrap [font-style:var(--body-1-medium-font-style)]">
                    Overview
                  </div>
                </div>
                <div className="flex w-[384px] items-center gap-[8px] px-[60px] py-[8px] relative bg-lightbackgroundprimary shadow-[inset_0px_-1px_0px_#e8e8e8]">
                  <div className="font-body-1 font-[number:var(--body-1-font-weight)] text-lightgrayscale-200 leading-[var(--body-1-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-1-font-size)] text-center tracking-[var(--body-1-letter-spacing)] whitespace-nowrap [font-style:var(--body-1-font-style)]">
                    Additional Information
                  </div>
                </div>
              </div>
              <div className="flex w-[1079px] items-start gap-[120px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-[32px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-[32px] relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                      <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                        <div className="inline-flex items-center relative flex-[0_0_auto]">
                          <div className="relative w-fit font-body-3-bold font-[number:var(--body-3-bold-font-weight)] text-[#161616] text-[length:var(--body-3-bold-font-size)] text-center tracking-[var(--body-3-bold-letter-spacing)] leading-[var(--body-3-bold-line-height)] whitespace-nowrap [font-style:var(--body-3-bold-font-style)]">
                            Requestors Name
                          </div>
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#9d0303] text-[12px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
                            *
                          </div>
                        </div>
                        <input
                          type="text"
                          className="flex-[0_0_auto] relative w-[395px] bg-[#f9fafa] px-4 py-2 border border-gray-300 rounded-md"
                          value={requestorsName}
                          onChange={(e) => setRequestorsName(e.target.value)}
                        />
                      </div>
                      <p className="relative w-fit font-body-4 font-[number:var(--body-4-font-weight)] text-grey text-[length:var(--body-4-font-size)] text-center tracking-[var(--body-4-letter-spacing)] leading-[var(--body-4-line-height)] whitespace-nowrap [font-style:var(--body-4-font-style)]">
                        Item to be manufactured or repacked
                      </p>
                    </div>
                    <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit font-body-3-bold font-[number:var(--body-3-bold-font-weight)] text-[#161616] text-[length:var(--body-3-bold-font-size)] text-center tracking-[var(--body-3-bold-letter-spacing)] leading-[var(--body-3-bold-line-height)] whitespace-nowrap [font-style:var(--body-3-bold-font-style)]">
                          Requestors Department
                        </div>
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#9d0303] text-[12px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
                          *
                        </div>
                      </div>
                      <input
                        type="text"
                        className="relative w-[395px] flex-[0_0_auto] bg-[#f9fafa] px-4 py-2 border border-gray-300 rounded-md"
                        value={requestorsDepartment}
                        onChange={(e) =>
                          setRequestorsDepartment(e.target.value)
                        }
                      />
                    </div>
                    <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-body-3-bold font-[number:var(--body-3-bold-font-weight)] text-[#161616] text-[length:var(--body-3-bold-font-size)] text-center tracking-[var(--body-3-bold-letter-spacing)] leading-[var(--body-3-bold-line-height)] whitespace-nowrap [font-style:var(--body-3-bold-font-style)]">
                          Item Name/ Number
                        </div>
                      </div>
                      <input
                        type="text"
                        className="relative w-[395px] flex-[0_0_auto] bg-[#f9fafa] px-4 py-2 border border-gray-300 rounded-md"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                      />
                    </div>
                    <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-body-3-bold font-[number:var(--body-3-bold-font-weight)] text-[#161616] text-[length:var(--body-3-bold-font-size)] text-center tracking-[var(--body-3-bold-letter-spacing)] leading-[var(--body-3-bold-line-height)] whitespace-nowrap [font-style:var(--body-3-bold-font-style)]">
                          Quantity Requested
                        </div>
                      </div>
                      <input
                        type="number"
                        className="flex items-start gap-[8px] px-[8px] py-[4px] flex-[0_0_auto] relative w-[395px] bg-[#f9fafa] px-4 py-2 border border-gray-300 rounded-md"
                        value={quantityRequested}
                        onChange={(e) => setQuantityRequested(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start gap-[32px] relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                      <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                        <div className="inline-flex items-center relative flex-[0_0_auto]">
                          <div className="relative w-fit font-body-3-bold font-[number:var(--body-3-bold-font-weight)] text-[#161616] text-[length:var(--body-3-bold-font-size)] text-center tracking-[var(--body-3-bold-letter-spacing)] leading-[var(--body-3-bold-line-height)] whitespace-nowrap [font-style:var(--body-3-bold-font-style)]">
                            Item Description
                          </div>
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#9d0303] text-[12px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
                            *
                          </div>
                        </div>
                        <textarea
                          className="h-[103px] relative w-[395px] bg-[#f9fafa] px-4 py-2 border border-gray-300 rounded-md resize-none"
                          value={itemDescription}
                          onChange={(e) => setItemDescription(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-body-3-bold font-[number:var(--body-3-bold-font-weight)] text-[#161616] text-[length:var(--body-3-bold-font-size)] text-center tracking-[var(--body-3-bold-letter-spacing)] leading-[var(--body-3-bold-line-height)] whitespace-nowrap [font-style:var(--body-3-bold-font-style)]">
                          Unit of Measure (UOM)
                        </div>
                      </div>
                      <input
                        type="text"
                        className="relative w-[395px] flex-[0_0_auto] bg-[#f9fafa] px-4 py-2 border border-gray-300 rounded-md"
                        value={uom}
                        onChange={(e) => setUom(e.target.value)}
                      />
                    </div>
                    <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-body-3-bold font-[number:var(--body-3-bold-font-weight)] text-[#161616] text-[length:var(--body-3-bold-font-size)] text-center tracking-[var(--body-3-bold-letter-spacing)] leading-[var(--body-3-bold-line-height)] whitespace-nowrap [font-style:var(--body-3-bold-font-style)]">
                          Quantity Requested
                        </div>
                      </div>
                      <input
                        type="number"
                        className="flex items-start gap-[8px] px-[8px] py-[4px] flex-[0_0_auto] relative w-[395px] bg-[#f9fafa] px-4 py-2 border border-gray-300 rounded-md"
                        value={quantityRequested}
                        onChange={(e) => setQuantityRequested(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[48px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                      <input
                        type="checkbox"
                        className="relative w-[14px] h-[14px]"
                      />
                      <div className="relative w-fit mt-[-1.00px] font-body-3 font-[number:var(--body-3-font-weight)] text-[#161616] text-[length:var(--body-3-font-size)] text-center tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)] whitespace-nowrap [font-style:var(--body-3-font-style)]">
                        Is Active
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                      <input
                        type="checkbox"
                        className="relative w-[14px] h-[14px]"
                      />
                      <div className="relative w-fit mt-[-1.00px] font-body-3 font-[number:var(--body-3-font-weight)] text-[#161616] text-[length:var(--body-3-font-size)] text-center tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)] whitespace-nowrap [font-style:var(--body-3-font-style)]">
                        Is Default
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                      <input
                        type="checkbox"
                        className="relative w-[14px] h-[14px]"
                      />
                      <p className="relative w-fit mt-[-1.00px] font-body-3 font-[number:var(--body-3-font-weight)] text-[#161616] text-[length:var(--body-3-font-size)] text-center tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)] whitespace-nowrap [font-style:var(--body-3-font-style)]">
                        Set rate of sub-assembly item based on BOM
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start gap-[32px] relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-body-3-bold font-[number:var(--body-3-bold-font-weight)] text-[#161616] text-[length:var(--body-3-bold-font-size)] text-center tracking-[var(--body-3-bold-letter-spacing)] leading-[var(--body-3-bold-line-height)] whitespace-nowrap [font-style:var(--body-3-bold-font-style)]">
                          Requested Delivery Date
                        </div>
                      </div>
                      <input
                        type="date"
                        className="relative w-[395px] flex-[0_0_auto] bg-[#f9fafa] px-4 py-2 border border-gray-300 rounded-md"
                        value={requestedDeliveryDate}
                        onChange={(e) =>
                          setRequestedDeliveryDate(e.target.value)
                        }
                      />
                    </div>
                    <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-body-3-bold font-[number:var(--body-3-bold-font-weight)] text-[#161616] text-[length:var(--body-3-bold-font-size)] text-center tracking-[var(--body-3-bold-letter-spacing)] leading-[var(--body-3-bold-line-height)] whitespace-nowrap [font-style:var(--body-3-bold-font-style)]">
                          Delivery Date
                        </div>
                      </div>
                      <input
                        type="date"
                        className="relative w-[395px] flex-[0_0_auto] bg-[#f9fafa] px-4 py-2 border border-gray-300 rounded-md"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                      />
                    </div>
                    <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                      <div className="inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
                        <div className="inline-flex items-center relative flex-[0_0_auto]">
                          <div className="relative w-fit font-body-3-bold font-[number:var(--body-3-bold-font-weight)] text-[#161616] text-[length:var(--body-3-bold-font-size)] text-center tracking-[var(--body-3-bold-letter-spacing)] leading-[var(--body-3-bold-line-height)] whitespace-nowrap [font-style:var(--body-3-bold-font-style)]">
                            Signature
                          </div>
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#9d0303] text-[12px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
                            *
                          </div>
                        </div>
                        <input
                          type="text"
                          className="relative w-[395px] flex-[0_0_auto] bg-[#f9fafa] px-4 py-2 border border-gray-300 rounded-md"
                          value={signature}
                          onChange={(e) => setSignature(e.target.value)}
                        />
                      </div>
                      <p className="relative w-fit font-body-4 font-[number:var(--body-4-font-weight)] text-grey text-[length:var(--body-4-font-size)] tracking-[var(--body-4-letter-spacing)] leading-[var(--body-4-line-height)] whitespace-nowrap [font-style:var(--body-4-font-style)]">
                        Signature of the Requestor is necessary for the order to
                        be approved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-[680px] absolute top-[48px] left-[32px]">
            <div className="inline-flex items-center gap-[397px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[387px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-h5-semi-bold font-[number:var(--h5-semi-bold-font-weight)] text-lightgrayscale-100 text-[length:var(--h5-semi-bold-font-size)] tracking-[var(--h5-semi-bold-letter-spacing)] leading-[var(--h5-semi-bold-line-height)] whitespace-nowrap [font-style:var(--h5-semi-bold-font-style)]">
                    Add Inventory Request
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center">
              {" "}
              {/* Container for Submit and X buttons */}
              <button
                className={`all-[unset] box-border inline-flex items-center px-[12px] py-[8px] relative flex-[0_0_auto] rounded-[8px] overflow-hidden border border-solid border-lightgrayscale-400 shadow-light-drop-shadow-1 ${
                  isFormValid
                    ? "bg-black text-white"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
                onClick={handleSubmit}
              >
                <div className="font-heading-h5-16 font-[number:var(--heading-h5-16-font-weight)] text-[#ffffff] leading-[var(--heading-h5-16-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--heading-h5-16-font-size)] text-center tracking-[var(--heading-h5-16-letter-spacing)] whitespace-nowrap [font-style:var(--heading-h5-16-font-style)]">
                  Submit
                </div>
              </button>
              <button
                className="bg-black p-[8px] rounded-md ml-2"
                onClick={handleGoBack}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-[1316px] h-[78px] top-0 left-0 bg-[#ffffff]">
          <div className="inline-flex items-center gap-[24px] absolute top-[21px] left-[1065px]">
            <div className="relative w-[28px] h-[24px]">
              <div className="relative h-[24px]">
                <div className="absolute w-[24px] h-[24px] top-0 left-0">
                  <img
                    className="absolute w-[17px] h-[21px] top-[2px] left-[4px]"
                    alt="Icon"
                    src="icon.svg"
                  />
                </div>
                <div className="inline-flex items-center px-[4px] py-0 absolute top-0 left-[13px] bg-lightredbase rounded-[96px]">
                  <div className="relative w-fit mt-[-1.00px] font-caps-caps-3-10-semi-bold font-[number:var(--caps-caps-3-10-semi-bold-font-weight)] text-white text-[length:var(--caps-caps-3-10-semi-bold-font-size)] text-center tracking-[var(--caps-caps-3-10-semi-bold-letter-spacing)] leading-[var(--caps-caps-3-10-semi-bold-line-height)] whitespace-nowrap [font-style:var(--caps-caps-3-10-semi-bold-font-style)]">
                    2
                  </div>
                </div>
              </div>
            </div>
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
          <div className="inline-flex items-center gap-[4px] absolute top-[23px] left-[34px]">
            <div className="inline-flex flex-col items-start gap-[6.3px] p-[7.88px] relative flex-[0_0_auto] bg-[#1d0202] rounded-[1.58px]">
              <div className="relative w-fit mt-[-0.79px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ffffff] text-[14.2px] tracking-[0.57px] leading-[12.6px] whitespace-nowrap">
                A
              </div>
            </div>
            <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
              <img
                className="relative w-[20px] h-[20px]"
                alt="Ic round keyboard"
                src="ic-round-keyboard-arrow-right.svg"
              />
              <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#130101] text-[16px] tracking-[0.64px] leading-[16px] whitespace-nowrap">
                Manufacturing
              </div>
              <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                <img
                  className="relative w-[20px] h-[20px]"
                  alt="Ic round keyboard"
                  src="ic-round-keyboard-arrow-right-2.svg"
                />
                <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#130101] text-[16px] tracking-[0.64px] leading-[16px] whitespace-nowrap">
                  Requests
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
