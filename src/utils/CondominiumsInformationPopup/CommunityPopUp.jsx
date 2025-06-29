import { useRef } from "react";
import a from "../../assets/community/1.png"
import b from "../../assets/community/2.svg"
import c from "../../assets/community/3.svg"
import d from "../../assets/community/4.svg"
import e from "../../assets/community/5.svg"
import f from "../../assets/community/6.svg"
import g from "../../assets/community/7.svg"
import h from "../../assets/community/8.svg"
import i from "../../assets/community/9.png"
import j from "../../assets/community/10.svg"
import k from "../../assets/community/11.svg"
import l from "../../assets/community/12.svg"
import m from "../../assets/community/13.svg"
import n from "../../assets/community/14.svg"
import o from "../../assets/community/15.svg"
import p from "../../assets/community/16.svg"
const CommunityPopUp = ({onClose}) => {
  const formRef = useRef();

  const communityFields = [
    {
        id: "air",
        text: "Air conditioning",
        img:b
      },
      {
        id: "cable",
        text: "Cable ready",
        img:c
      },
      {
        id: "fan",
        text: "Ceiling fan ",
        img:d
      },
      {
        id: "ceilings",
        text: "High ceilling",
        img:e
      },
      {
        id: "balcony",
        text: "Private balcony",
        img:f
      },
      {
        id: "refrigerator",
        text: "Refrigerator",
        img:g
      },
      {
        id: "wood",
        text: "Wooded views",
        img:h
      },
      {
        id: "wd",
        text: "W/D hookup",
        img:i
      },
      {
        id: "home",
        text: "Hardwood floor (home)",
        img:j
      },
      {
        id: "homee",
        text: "Hardwood floor (home)",
        img:j
      },
      {
        id: "fire",
        text: "Fireplace(home)",
        img:k
      },
      {
        id: "kit",
        text: "first aid kit",
        img:l
      },
      {
        id: "alarm",
        text: "Carbon monoxide alarm ",
        img:m
      },
      {
        id: "patios",
        text: "Expanded patios(home)",
        img:n
      },
      {
        id: "parking",
        text: "Free parking on premises",
        img:o
      },
      {
        id: "extinguisher",
        text: "Fire extinguisher",
        img:p
      },
  ];


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {};
        for (let [key, value] of formData.entries()) {
          data[key] = value;
        }
        console.log("Leasing Form Data:", data);
    
        // ✅ Close modal AFTER processing if needed
        onClose?.(); 
  };

  return (
    <div className="font-fustat lg:w-[780px]">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="border rounded-[8px]">
          {/* Section Header */}
          <div className="bg-[#f4f4f4] px-[16px] py-[14px]">
            <p className="text-[#6f6c6a] text-[16px] font-semibold">
              Charges
            </p>
          </div>

          {/* Form Fields */}
          <div className="p-[16px] grid grid-cols-2 gap-[16px]">
            {propertyFields.map((field) => {
              if (field.type === "select") {
                return (
                  <div
                    key={field.id}
                    className={`col-span-${field.colSpan || 1}`}
                  >
                    <label className="block text-[14px] text-[#272B35] font-medium mb-2">
                      {field.label}
                      {field.required && (
                        <span className="text-black-200 ml-1">*</span>
                      )}
                    </label>
                    <select className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-500 h-[48px] focus:border-blue-500 text-[14px]">
                      {field.options.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                );
              }
  
              return (
                <div
                  key={field.id}
                  className={`col-span-${field.colSpan || 1}`}
                >
                  <label className="block text-[14px] text-[#272B35] font-medium mb-2">
                    {field.label}
                    {field.required && (
                      <span className="text-black-200 ml-1">*</span>
                    )}
                  </label>
                  <input
                    name={field.id}
                    type={field.type}
                    defaultValue={field.defaultValue || ""}
                    className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-transparent h-[48px] text-[14px] text-[#999999]"
                  />
                </div>
              );
            })}
           
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-between items-center mt-4 px-[14px] mb-4">
        <div className="mt-[28.5px]">
              <label className="inline-flex items-start space-x-2">
                <input
                  type="checkbox"
                  className="mt-[2px] border-2 border-[#272b37]"
                />
                <span className="text-[16px] font-[600] text-[#272b37]">
                Type 0 if charges not applicable
                </span>
              </label>
            </div>
          <button
         
            className="bg-blue-500 text-white px-4 py-[14px] rounded-[12px]"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommunityPopUp;
