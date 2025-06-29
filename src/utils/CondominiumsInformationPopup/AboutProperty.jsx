import { useRef } from "react";

const AboutPopUp = ({ onClose }) => {
  const formRef = useRef();

  const propertyFields = [
    {
      id: "message",
      defaultValue: "Type message here",
      type: "textarea",
      colSpan: 1,
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
    onClose?.();
  };

  return (
    <div className="font-fustat lg:w-[780px]">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="border rounded-[8px]">
          {/* Section Header */}
          <div className="bg-[#f4f4f4] px-[16px] py-[14px]">
            <p className="text-[#6f6c6a] text-[16px] font-semibold">
              About the property (optional)
            </p>
          </div>

          {/* Form Fields */}
          <div className="p-[16px] grid grid-cols-1 gap-[16px]">
            {propertyFields.map((field) => (
              <div
                key={field.id}
                className={`col-span-${field.colSpan || 1}`}
              >
                <label className="block text-[14px] text-[#272B35] font-medium mb-2">
                  {field.label}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    name={field.id}
                    defaultValue={field.defaultValue || ""}
                    rows={6}
                    className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[14px] text-[#999999] resize-none"
                  ></textarea>
                ) : (
                  <input
                    name={field.id}
                    type={field.type}
                    defaultValue={field.defaultValue || ""}
                    className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[14px] text-[#999999]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end items-center mt-4 px-[14px] mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-[14px] rounded-[12px]"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AboutPopUp;
