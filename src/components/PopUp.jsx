import PropertyAdress from "../utils/PropertyAdress";
import PropertyManagement from "../utils/PropertyManagement";

const PopUp = ({ isModalOpen, handleClose, selectedKey, handleSubmit }) => {
  if (!isModalOpen || !selectedKey) return null;

  const renderPopupContent = () => {
    switch (selectedKey) {
      case "propertyAdress":
        return (
          <>
            <PropertyAdress></PropertyAdress>
          </>
        );

      case "petFees":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Pet Fees</h2>
            <input
              type="number"
              placeholder="Enter fee amount"
              className="border w-full px-3 py-2 rounded mb-2"
            />
            <p className="text-sm text-gray-500">Only if pets are allowed.</p>
          </>
        );

      case "parking":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Parking Info</h2>
            <textarea
              placeholder="Describe parking availability"
              className="border w-full px-3 py-2 rounded mb-4"
              rows={3}
            />
          </>
        );

      case "charges":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Charges</h2>
            <input
              type="text"
              placeholder="e.g. Service charge, maintenance"
              className="border w-full px-3 py-2 rounded mb-4"
            />
          </>
        );

      default:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 capitalize">
              {selectedKey.replace(/([A-Z])/g, " $1")}
            </h2>
            <input
              type="text"
              placeholder="Enter information"
              className="border w-full px-3 py-2 rounded mb-4"
            />
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0  bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white  rounded-[12px] relative shadow-lg">
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 rounded-[12px] text-[#6f6c6a]  w-[12px] text-[22px] h-[12px]"
        >
          ×
        </button>

        {renderPopupContent()}

        <div className="flex justify-end mt-4 px-[14px] mb-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-[14px] rounded-[12px]"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
