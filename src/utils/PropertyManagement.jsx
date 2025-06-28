import land from "../assets/land.svg";
const PropertyManagement = () => {
  const propertyFields = [
    {
      id: "companyName",
      label: "Company name",
      required: true,
      defaultValue: "Runven trade center",
      colSpan: 1,
      type: "text",
    },
    {
      id: "companyIdentifier",
      label: "Company identifier (EN/TRV)",
      required: true,
      defaultValue: "Name",
      colSpan: 1,
      type: "text",
    },
    {
      id: "jobTitle",
      label: "Your job title",
      required: true,
      defaultValue: "Manager",
      colSpan: 1,
      type: "text",
    },
    {
      id: "agreement",
      label: "Agreement with landlord/owner (of only)",
      type: "file",
      colSpan: 1,
    },
    {
      id: "country",
      label: "Country/Region",
      type: "select",
      options: ["Choose country", "United States","Bangladesh","Uk","India","Pakistan","Canada"],
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
      label: "Apt, suite, unit",
      required: false,
      colSpan: 1,
      type: "text",
    },
    {
      id: "phone",
      label: "Phone number",
      required: true,
      type: "phone",
      colSpan: 1,
    },
    {
      id: "email",
      label: "Contact email",
      required: true,
      defaultValue: "majaru2020@gmail.com",
      colSpan: 1,
      type: "email",
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

  return (
    <div className="font-fustat">
      <div className="mt-[32px] border border-[#E0E0E0] rounded-[8px]">
        {/* Section Header */}
        <div className="bg-[#f4f4f4] px-[16px] py-[14px] rounded-t-[14px]">
          <p className="text-[#6f6c6a] text-[18px] font-semibold">
            Company & Office Information
          </p>
        </div>

        {/* Form Fields */}
        <div className="p-[16px] grid grid-cols-4 gap-[16px]">
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

            if (field.type === "phone") {
              return (
                <div key={field.id} className="col-span-1">
                  <label className="block text-[14px] text-[#272B35] font-medium mb-2">
                    {field.label}
                    {field.required && (
                      <span className="text-black-200 ml-1">*</span>
                    )}
                  </label>
                  <div className="flex rounded-[8px] overflow-hidden">
                    <input
                      type="tel"
                      defaultValue="3050"
                      className="w-20 px-3 py-2 border border-[#E0E0E0] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[14px]"
                      placeholder="Area code"
                    />
                    
                    <input
                      type="tel"
                      defaultValue="880"
                      className="flex-1 px-3 py-2 border-t border-r border-b border-[#E0E0E0] focus:outline-none focus:ring-1 focus:ring-blue-500 h-[48px] focus:border-blue-500 text-[14px]"
                      placeholder="Main number"
                    />
                  </div>
                </div>
              );
            }
            if (field.id === "agreement") {
              return (
                <div key={field.id} className="col-span-1">
                  <label className="block text-[14px] text-[#272B35] font-medium mb-2">
                    {field.label}
                    {field.required && (
                      <span className="text-black-200 ml-1">*</span>
                    )}
                  </label>
                  <input
                    type="file"
                    id={field.id}
                    accept="application/pdf"
                    className="hidden"
                    onChange={(e) => console.log(e.target.files)}
                  />
                  <label
                    htmlFor={field.id}
                    className="border border-dashed border-[#e0e0e0] rounded-[12px] px-[16px] bg-[#f4f4f4] text-center cursor-pointer hover:border-blue-500 w-full h-[48px] flex justify-center items-center gap-[10px]"
                  >
                    <span>
                      <img src={land} alt="land" />
                    </span>
                    <span className="text-[#999999] text-[14px]">
                      (PDF only)
                    </span>
                  </label>
                </div>
              );
            }

            return (
              <div key={field.id} className={`col-span-${field.colSpan || 1}`}>
                <label className="block text-[14px] text-[#272B35] font-medium mb-2">
                  {field.label}
                  {field.required && (
                    <span className="text-black-200 ml-1">*</span>
                  )}
                </label>
                
                <input
                  type={field.type}
                  defaultValue={field.defaultValue || ""}
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-transparent h-[48px] text-[14px] text-[#999999]"
                  
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="mt-[28.5px]">
        <label className="inline-flex items-start space-x-2">
          <input
            type="checkbox"
            className="mt-[2px] border-2 border-[#272b37]"
          />
          <span className="text-[16px] font-[600] text-[#272b37]">
            Accept RentYard property adding terms & condition
          </span>
        </label>
      </div>
    </div>
  );
};

export default PropertyManagement;
