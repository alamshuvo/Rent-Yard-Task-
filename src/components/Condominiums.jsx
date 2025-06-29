import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import plus from "../assets/+.png";
import { useState } from "react";
import PopUp from "./PopUp";
import PropertyGallery from "../utils/Galary";
import Vedios from "../utils/Vedios";
const Condominiums = () => {
  const [add, setAdd] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);

  const path = useLocation();
  const condominiumsInformation = [
    {
      label: "Property adress",
      key: "propertyAdress",
      id: 1,
      required: "(Required)",
      buttonText: "Add",
    },
    {
      label: "Pet fees",
      key: "petFees",
      id: 2,
      required: "(Optional,add fees if you allow pet)",
      buttonText: "Add",
    },
    {
      label: "Leasing info",
      key: "leasingInfo",
      id: 3,
      required: "(Required)",
      buttonText: "Add",
    },
    {
      label: "Parking",
      key: "parking",
      id: 4,
      required: "(Optional)",
      buttonText: "Add",
    },
    {
      label: "Charges",
      key: "charges",
      id: 5,
      required: "(Required)",
      buttonText: "Add",
    },
    {
      label: "Nearest educational institution ",
      key: "nearestEducationalInstitution",
      id: 6,
      required: "(Optional but recommended)",
      buttonText: "Add",
    },
    {
      label: "Rent frequency & payment reminder",
      key: "rentFrequencyPaymentReminder",
      id: 7,
      required: "(Required)",
      buttonText: "Add",
    },
    {
      label: "Nearest stations  ",
      key: "nearestStations",
      id: 8,
      required: "(Optional but recommended)",
      buttonText: "Add",
    },
    {
      label: "Application agreement",
      key: "applicationAgreement",
      id: 9,
      required: "(Optional)",
      buttonText: "Add",
    },

    {
      label: "Nearest landmark ",
      key: "nearestLandmark",
      id: 10,
      required: "(Optional but recommended)",
      buttonText: "Add",
    },
    {
      label: "About the property ",
      key: "aboutTheProperty",
      id: 11,
      required: "(Optional)",
      buttonText: "Add",
    },
    {
      label: "Utilities provider",
      key: "utilitiesProvider",
      id: 12,
      required: "(Optional but recommended)",
      buttonText: "Add",
    },
    {
      label: "Community's amenity/features",
      key: "communityAmenityFeatures",
      id: 13,
      required: "(Optional but recommended)",
      buttonText: "Add",
    },
  ];
  const handleAdd = (key) => {
    setIsModalOpen(true);
    setSelectedKey(key);
    setAdd(true)
  };
  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedKey(null);
  };

  const handleSubmit = () => {
    setAdd(true);
    setIsModalOpen(false);
  };

  console.log(add);
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
                <div className="text-[18px] font-[600] text-[#272b35]">
                  {item.label}{" "}
                  <span
                    className={
                      item.required === "(Required)" ? "text-red-500" : ""
                    }
                  >
                    {item.required}
                  </span>
                </div>

                <button
                  onClick={() => handleAdd(item.key)}
                  className="mt-2 text-[#316ded] px-4 py-2 rounded-[8px] underline text-[16px] flex justify-between items-center gap-[6px]"
                >
                  <span>
                    <img src={plus} alt="+" />
                  </span>{" "}
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
          <PropertyGallery></PropertyGallery>
          <div className=" rounded-[20px]">
            <Vedios></Vedios>
          </div>
        </div>
      </div>
      {path.pathname === "/rent" && (
        <div className="flex justify-between items-center gap-2 my-6">
          <div className="flex-1 h-[3px] bg-black rounded-full"></div>
          {add && <div className="flex-1 h-[3px] bg-black rounded-full"></div>}
          <div className="flex-1 h-[3px] bg-gray-300 rounded-full"></div>
        </div>
      )}
      <div className="max-w-[1440px] px-20 py-4 mx-auto">
        <Footer des={"Next"}></Footer>
      </div>
      <div>
        {isModalOpen && <PopUp setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} handleClose={handleClose} handleSubmit={handleSubmit} selectedKey={selectedKey}></PopUp>}
      </div>
    </div>
  );
};

export default Condominiums;
