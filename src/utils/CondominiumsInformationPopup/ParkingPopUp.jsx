import { useRef, useState } from "react";

const ParkingPopUp = ({ onClose }) => {
  const formRef = useRef();
  const [overviewLength, setOverviewLength] = useState(0);

  const parkingTimes = ["30m", "1H", "2H", "4H", "All Day"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log("Parking Form Data:", data);
    onClose?.();
  };

  const handleOverviewChange = (e) => {
    setOverviewLength(e.target.value.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 px-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="font-fustat lg:w-[780px] w-full bg-white rounded-[8px] shadow-lg relative"
      >
        {/* Section Header */}
        <div className="bg-[#f4f4f4] px-[16px] py-[14px] rounded-t-[8px] flex justify-between items-center">
          <p className="text-[#6f6c6a] text-[16px] font-semibold">Parking</p>
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
          {/* Parking Time Select */}
          <div className="col-span-1">
            <label
              htmlFor="guestVehicleParkingTime"
              className="block mb-2 text-[14px] font-medium text-[#272B35]"
            >
              Guest vehicle parking time
            </label>
            <select
              id="guestVehicleParkingTime"
              name="guestVehicleParkingTime"
              defaultValue=""
              className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] text-[14px] text-[#272B35] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled hidden>
                Select parking time
              </option>
              {parkingTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Empty for layout balance */}
          <div></div>

          {/* Parking Overview */}
          <div className="col-span-2">
            <label
              htmlFor="parkingOverview"
              className="block mb-2 text-[14px] font-medium text-[#272B35]"
            >
              Parking overview
            </label>
            <textarea
              id="parkingOverview"
              name="parkingOverview"
              placeholder="Write parking overview"
              maxLength={200}
              rows={5}
              onChange={handleOverviewChange}
              className="w-full border border-[#E0E0E0] rounded-[8px] p-3 text-[14px] text-[#272B35] placeholder:text-[#999999] resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="text-right text-xs text-gray-400 mt-1">
              {overviewLength}/200
            </div>
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

export default ParkingPopUp;
