import { useRef } from "react";
import land from "../../assets/land.svg";
const ApplicationPopUp = ({ onClose }) => {
  const formRef = useRef();

  const propertyFields = [
    {
      id: "agreement",
      label: "Upload Agreement",
      type: "file",
      colSpan: 3,
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
              Application agreement (optional)
            </p>
          </div>

          {/* Form Fields */}
          <div className="p-[16px] grid grid-cols-1 gap-[16px]">
            {propertyFields.map((field) => {
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
                <div
                  key={field.id}
                  className={`col-span-${field.colSpan || 3}`}
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
          <div className="mt-[16px] p-[16px]">
            <label className="inline-flex items-start space-x-2">
              <input
                type="checkbox"
                className="mt-[2px] border-2 border-[#272b37]"
              />
              <span className="text-[16px] font-[600] text-[#272b37]">
              Accept immigrant & international student application
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end items-center mt-4 px-[14px] mb-4">
          <button className="bg-blue-500 text-white px-4 py-[14px] rounded-[12px]">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationPopUp;
