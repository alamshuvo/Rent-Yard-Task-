import { useRef } from "react";

const NearestEducationPopUp = ({ onClose, text, a, b }) => {
  const formRef = useRef();

  const institutionType = ["High school", "Primary school", "College", "University"];
  const distanceFromProperty = ["10km", "5km", "8km"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log("Nearest Education Data:", data);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 px-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="font-fustat lg:w-[780px] w-full bg-white rounded-[8px] shadow-lg"
      >
        {/* Section Header with Close */}
        <div className="bg-[#f4f4f4] px-[16px] py-[14px] rounded-t-[8px] flex justify-between items-center">
          <p className="text-[#6f6c6a] text-[16px] font-semibold">{text}</p>
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
          {/* Institution Type */}
          <div className="col-span-1">
            <label
              htmlFor="institutionType"
              className="block mb-2 text-[14px] font-medium text-[#272B35]"
            >
              {a}
            </label>
            <select
              id="institutionType"
              name="institutionType"
              defaultValue=""
              className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] text-[14px] text-[#272B35] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled hidden>
                {b}
              </option>
              {institutionType.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Distance from Property */}
          <div className="col-span-1">
            <label
              htmlFor="distanceFromProperty"
              className="block mb-2 text-[14px] font-medium text-[#272B35]"
            >
              Distance from property
            </label>
            <select
              id="distanceFromProperty"
              name="distanceFromProperty"
              defaultValue=""
              className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] text-[14px] text-[#272B35] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled hidden>
                Select distance
              </option>
              {distanceFromProperty.map((distance) => (
                <option key={distance} value={distance}>
                  {distance}
                </option>
              ))}
            </select>
          </div>

          {/* Institution Name */}
          <div className="col-span-2">
            <label
              htmlFor="institutionName"
              className="block mb-2 text-[14px] font-medium text-[#272B35]"
            >
              Institution name
            </label>
            <input
              type="text"
              id="institutionName"
              name="institutionName"
              placeholder="Enter institution name"
              className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] text-[14px] text-[#272B35] placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-4 px-[16px] mb-4">
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

export default NearestEducationPopUp;
