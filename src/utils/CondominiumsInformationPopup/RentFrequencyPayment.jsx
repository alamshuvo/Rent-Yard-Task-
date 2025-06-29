import { useRef } from "react";

const RentFrequencyPayment = ({onClose}) => {
  const formRef = useRef();

  const propertyFields = [
    {
        id: "rentPaymentFrequency",
        label: "Rent payment frequency",
        required:true,
        type: "select",
        options: ["Monthly","Weekly","daily"],
        colSpan: 1,
        defaultValue:100
      },
    {
      id: "rentReminder",
      label: "Rent Reminder / Statement date",
      required: true,
      defaultValue: "25th Everymonth",
      colSpan: 1,
      type: "date",
    },
    {
        id: "rentDueDate",
        label: "Rent Due Date",
        required: true,
        defaultValue: "5th Everymonth",
        colSpan: 1,
        type: "date",
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
    <div className="font-fustat">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="border rounded-[8px]">
          {/* Section Header */}
          <div className="bg-[#f4f4f4] px-[16px] py-[14px]">
            <p className="text-[#6f6c6a] text-[16px] font-semibold">
              Rent frequency and payment reminder
            </p>
          </div>

          {/* Form Fields */}
          <div className="p-[16px] grid grid-cols-3 gap-[16px]">
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
              if (field.type === "date") {
                return (
                  <div key={field.id} className={`col-span-${field.colSpan || 1}`}>
                    <label className="block text-[14px] text-[#272B35] font-medium mb-2">
                      {field.label}
                      {field.required && (
                        <span className="text-black-200 ml-1">*</span>
                      )}
                    </label>
                    <input
                      type="date"
                      name={field.id}
                      defaultValue={field.defaultValue || ""}
                      className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-transparent h-[48px] text-[14px] text-[#999999]"
                    />
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
        <div className="flex justify-end items-center mt-4 px-[14px] mb-4">
       
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

export default RentFrequencyPayment;
