import { useRef } from "react";

const UtilityProviderPopUp = ({ onClose }) => {
  const formRef = useRef();

  const utilityTypes = ["Electricity", "Gas", "Water", "Internet"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log("Utility Provider Data:", data);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 px-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="font-fustat lg:w-[780px] w-full bg-white rounded-[8px] shadow-lg"
      >
        {/* Header with Close Button */}
        <div className="bg-[#f4f4f4] px-[16px] py-[14px] rounded-t-[8px] flex justify-between items-center">
          <p className="text-[#6f6c6a] text-[16px] font-semibold">Utilities provider</p>
          <button
            type="button"
            onClick={onClose}
            className="text-[#999999] hover:text-[#333] text-xl font-bold"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Form Fields */}
        <div className="p-[16px] grid grid-cols-2 gap-[16px] border-b">
          {/* Utility Type Select */}
          <div className="col-span-1">
            <label
              htmlFor="utilityType"
              className="block mb-2 text-[14px] font-medium text-[#272B35]"
            >
              Utility type
            </label>
            <select
              id="utilityType"
              name="utilityType"
              defaultValue=""
              className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] text-[14px] text-[#272B35] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled hidden>
                Select utility type
              </option>
              {utilityTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Provider Company Name Input */}
          <div className="col-span-1">
            <label
              htmlFor="providerCompany"
              className="block mb-2 text-[14px] font-medium text-[#272B35]"
            >
              Provider company name
            </label>
            <input
              type="text"
              id="providerCompany"
              name="providerCompany"
              placeholder="Enter name"
              className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] text-[14px] text-[#272B35] placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-6 px-[16px] mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-[14px] rounded-[12px] font-semibold text-sm hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default UtilityProviderPopUp;
