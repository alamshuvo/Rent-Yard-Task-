import { useState } from "react";
import img1 from "../assets/1.svg";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";
import img4 from "../assets/4.svg";
import img5 from "../assets/5.svg";
import img6 from "../assets/6.svg";
import Footer from "./Footer";
import Landlord from "../utils/Landlord";
import Relator from "../utils/Relator";
import PropertyManagement from "../utils/PropertyManagement";

const PropertyType = () => {
  const properties = [
    {
      value: "single-house",
      label: "Single House Property",
      img: img1,
      descr: "Single unit house for single family",
    },
    {
      value: "apartments",
      label: "Apartments Complex",
      img: img2,
      descr: "Multiple unit house for families",
    },
    {
      value: "condominiums",
      label: "Condominiums",
      img: img3,
      descr: "Multiple unit house for families",
    },
  ];
  const role = [
    {
      value: "Landlord",
      label: "Landlord ",
      img: img4,
      descr: "Owner of the property",
    },
    {
      value: "Realtor",
      label: "Realtor",
      img: img5,
      descr: "Manage property on behalf on owner    ",
    },
    {
      value: "Propertymanagementcompany",
      label: "Property management company",
      img: img6,
      descr: "For management company",
    },
  ];
  const [selectedType, setSelectedType] = useState("");
  const [roleType, setRoleType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected property type:", selectedType);
  };

  return (
    <div className=" max-w-[1440px] px-20 py-4 mx-auto  flex flex-col">
      <div className="">
        <p className="font-fustat text-[#272b35] text-[24px] font-[700]">
          Property type
        </p>
        {/* property type content  */}
        <form onSubmit={handleSubmit} className="">
          <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-6">
            {properties.map((o) => {
              const isActive = o.value === selectedType;
              return (
                <button
                  type="button"
                  key={o.value}
                  onClick={() => setSelectedType(o.value)}
                  className={`p-[20px] border rounded-[12px] flex items-center gap-[16px] cursor-pointer text-left w-full
                  ${
                    isActive ? "border-blue-500 bg-blue-50" : "border-[#e0e0e0]"
                  }`}
                >
                  <div className="p-[14px] bg-[#f9fbff] rounded">
                    <img
                      src={o.img}
                      alt={o.label}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="py-[3.5px] font-fustat">
                    <h5 className="font-semibold text-[16px] text-[#272b35]">
                      {o.label}
                    </h5>
                    <p className="mt-[6px] font-medium text-[14px] text-[#777980]">
                      {o.descr}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* role type content  */}
          <p className="font-fustat text-[#272b35] text-[24px] font-[700] mt-[32px] mb-[24px]">
            Select your role
          </p>
          <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-6">
            {role.map((o) => {
              const isActive = o.value === roleType;
              const isDisabled = !selectedType;
              return (
                <button
                  type="button"
                  key={o.value}
                  onClick={() => !isDisabled && setRoleType(o.value)}
                  className={`p-[20px] border rounded-[12px] flex items-center gap-[16px] text-left w-full
                  ${
                    isDisabled
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  } 
                  ${
                    isActive ? "border-blue-500 bg-blue-50" : "border-[#e0e0e0]"
                  }`}
                >
                  <div className="p-[14px] bg-[#f9fbff] rounded">
                    <img
                      src={o.img}
                      alt={o.label}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="py-[3.5px] font-fustat">
                    <h5 className="font-semibold text-[16px] text-[#272b35]">
                      {o.label}
                    </h5>
                    <p className="mt-[6px] font-medium text-[14px] text-[#777980]">
                      {o.descr}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </form>
      </div>
      <div className="">
        {roleType === "Landlord" && selectedType==="condominiums" && (
          <div className="mt-6">
            <Landlord />
          </div>
        )}
      </div>
      <div className="">
        {roleType === "Realtor" && selectedType==="condominiums" && (
          <div className="mt-6">
            <Relator></Relator>
          </div>
        )}
      </div>
      <div className="">
        {roleType === "Propertymanagementcompany" && selectedType==="condominiums" && (
          <div className="mt-6">
            <PropertyManagement></PropertyManagement>
          </div>
        )}
      </div>
      <div className="">
        <Footer selectedType={selectedType} roleType={roleType} />
      </div>
    </div>
  );
};

export default PropertyType;
