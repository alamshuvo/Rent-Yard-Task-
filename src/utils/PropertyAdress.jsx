import { useRef } from "react";

const PropertyAdress = () => {
  const formRef = useRef();

  const propertyFields = [
    {
      id: "propertyName",
      label: "Property name as identifier",
      required: true,
      defaultValue: "Dallas apartments complex",
      colSpan: 1,
      type: "text",
    },
    {
      id: "totalappartment",
      label: "Total apartment unit",
      required: true,
      defaultValue: "50",
      colSpan: 1,
      type: "text",
    },
    {
      id: "propertyWebsite",
      label: "Property website (optional)",
      required: false,
      defaultValue: "https://www.example.com",
      colSpan: 1,
      type: "text",
    },
    {
      id: "country",
      label: "Country/Region",
      type: "select",
      options: ["Choose country", "United States", "Bangladesh", "UK", "India", "Pakistan", "Canada"],
      colSpan: 1,
    },
    {
      id: "street",
      label: "Street address",
      required: true,
      defaultValue: "ITI Austin Ave",
      colSpan: 1,
      type: "text",
    },
    {
      id: "apt",
      label: "Apt, suite, unit (if applicable)",
      defaultValue: "123",
      required: false,
      colSpan: 1,
      type: "text",
    },
    {
      id: "city",
      label: "City/Town",
      required: true,
      defaultValue: "Dallas",
      colSpan: 1,
      type: "text",
    },
    {
      id: "state",
      label: "State/Territory",
      type: "select",
      options: ["Choose state", "Texas"],
      colSpan: 1,
    },
    {
      id: "code",
      label: "Zip code",
      required: true,
      defaultValue: "75061",
      colSpan: 1,
      type: "text",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};

    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    console.log("Form Data:", data);
  };

  return (
    <div className="font-fustat">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="border rounded-[8px]">
          {/* Section Header */}
          <div className="bg-[#f4f4f4] px-[16px] py-[14px]">
            <p className="text-[#6f6c6a] text-[16px] font-semibold">
              Property address
            </p>
          </div>

          {/* Form Fields */}
          <div className="p-[16px] grid grid-cols-3 gap-[16px]">
            {propertyFields.map((field) => {
              if (field.type === "select") {
                return (
                  <div key={field.id} className={`col-span-${field.colSpan || 1}`}>
                    <label className="block text-[14px] text-[#272B35] font-medium mb-2">
                      {field.label}
                      {field.required && <span className="text-black-200 ml-1">*</span>}
                    </label>
                    <select
                      name={field.id}
                      className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-500 h-[48px] focus:border-blue-500 text-[14px]"
                      defaultValue={field.options[0]}
                    >
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              return (
                <div key={field.id} className={`col-span-${field.colSpan || 1}`}>
                  <label className="block text-[14px] text-[#272B35] font-medium mb-2">
                    {field.label}
                    {field.required && <span className="text-black-200 ml-1">*</span>}
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
        <div className="flex justify-end mt-4 px-[14px] mb-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-[14px] rounded-[12px]"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyAdress;
