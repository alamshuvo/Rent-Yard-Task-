import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Condominiums = () => {
  const path = useLocation();
  const condominiumsInformation = [
    {
      label: "Property adress",
      id: 1,
      required: "(Required)",
      buttonText: "Add",
    },
    {
      label: "Pet fees",
      id: 2,
      required: "(Optional,add fees if you allow pet)",
      buttonText: "Add",
    },
    {
      label: "Leasing info",
      id: 3,
      required: "(Required)",
      buttonText: "Add",
    },
    {
      label: "Parking",
      id: 4,
      required: "(Optional)",
      buttonText: "Add",
    },
    {
      label: "Charges",
      id: 5,
      required: "(Required)",
      buttonText: "Add",
    },
    {
      label: "Nearest educational institution ",
      id: 6,
      required: "(Optional but recommended)",
      buttonText: "Add",
    },
    {
      label: "Rent frequency & payment reminder",
      id: 7,
      required: "(Required)",
      buttonText: "Add",
    },
    {
      label: "Nearest educational stations  ",
      id: 8,
      required: "(Optional but recommended)",
      buttonText: "Add",
    },
    {
      label: "Application agreement",
      id: 9,
      required: "(Optional)",
      buttonText: "Add",
    },

    {
      label: "Nearest landmark ",
      id: 10,
      required: "(Optional but recommended)",
      buttonText: "Add",
    },
    {
      label: "About the property ",
      id: 11,
      required: "(Optional)",
      buttonText: "Add",
    },
    {
      label: "Utilities provider",
      id: 12,
      required: "(Optional but recommended)",
      buttonText: "Add",
    },
    {
      label: "Community's amenity/features",
      id: 13,
      required: "(Optional but recommended)",
      buttonText: "Add",
    },
  ];
  return (
    <div>
      <div className="max-w-[1440px] px-20 py-4 mx-auto flex flex-col font-fustat">
        <div>
          <h2 className="text-[24px] font-bold text-[#272b37]">
            Condominiums information
          </h2>
        </div>
        <div className="mt-[32px]">
          <div className="grid grid-cols-2 gap-4">
            {condominiumsInformation.map((item) => (
              <div
                key={item.id}
                className="border border-[#E0E0E0] rounded-[8px] p-4 flex justify-between items-center"
              >
                <div className="text-[18px] font-[600] text-[#272b35]">{item.label} <span className={item.required === "(Required)"?"text-red-500":""}>{item.required}</span></div>

                <button className="mt-2  text-[#316ded] px-4 py-2 rounded-[8px] underline text-[16px]">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {path.pathname === "/rent" && (
        <div className="flex justify-between items-center gap-2 my-6">
          <div className="flex-1 h-[3px] bg-black rounded-full"></div>
          <div className="flex-1 h-[3px] bg-gray-300 rounded-full"></div>
        </div>
      )}
      <div className="max-w-[1440px] px-20 py-4 mx-auto">
        <Footer des={"Next"}></Footer>
      </div>
    </div>
  );
};

export default Condominiums;
