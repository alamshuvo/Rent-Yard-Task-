import AboutPopUp from "../utils/CondominiumsInformationPopup/AboutProperty";
import ApplicationPopUp from "../utils/CondominiumsInformationPopup/ApplicationAgrement";
import ChargesPopUp from "../utils/CondominiumsInformationPopup/ChargesPopUp";
import CommunityPopUp from "../utils/CondominiumsInformationPopup/CommunityPopUp";
import LandmarkPopUp from "../utils/CondominiumsInformationPopup/LandMarkPopUp";
import LeasingInfoPopup from "../utils/CondominiumsInformationPopup/LeasingInfoPopup";
import NearestEducationPopUp from "../utils/CondominiumsInformationPopup/NearestEducationa";
import ParkingPopUp from "../utils/CondominiumsInformationPopup/ParkingPopUp";
import PetFeesPopUp from "../utils/CondominiumsInformationPopup/petFeesPopUp";
import PropertyAdress from "../utils/CondominiumsInformationPopup/PropertyAdress";
import RentFrequencyPayment from "../utils/CondominiumsInformationPopup/RentFrequencyPayment";

const PopUp = ({ isModalOpen, handleClose, selectedKey, setIsModalOpen }) => {
  if (!isModalOpen || !selectedKey) return null;

  const renderPopupContent = () => {
    switch (selectedKey) {
      case "propertyAdress":
        return (
          <>
            {isModalOpen && (
              <PropertyAdress onClose={() => setIsModalOpen(false)} />
            )}
          </>
        );

      case "leasingInfo":
        return (
          <>
            {isModalOpen && (
              <LeasingInfoPopup onClose={() => setIsModalOpen(false)} />
            )}
          </>
        );

      case "rentFrequencyPaymentReminder":
        return (
          <>
            {isModalOpen && (
              <RentFrequencyPayment onClose={() => setIsModalOpen(false)} />
            )}
          </>
        );

      case "charges":
        return (
          <>
            {isModalOpen && (
              <ChargesPopUp onClose={() => setIsModalOpen(false)} />
            )}
          </>
        );
      case "applicationAgreement":
        return (
          <>
            {isModalOpen && (
              <ApplicationPopUp onClose={() => setIsModalOpen(false)} />
            )}
          </>
        );
      case "aboutTheProperty":
        return (
          <>
            {isModalOpen && (
              <AboutPopUp onClose={() => setIsModalOpen(false)} />
            )}
          </>
        );
      case "communityAmenityFeatures":
        return (
          <>
            {isModalOpen && (
              <CommunityPopUp onClose={() => setIsModalOpen(false)} />
            )}
          </>
        );
      case "petFees":
        return (
          <>
            {isModalOpen && (
              <PetFeesPopUp onClose={() => setIsModalOpen(false)} />
            )}
          </>
        );
      case "parking":
        return(
          <>
           {isModalOpen && (
              <ParkingPopUp onClose={() => setIsModalOpen(false)} />
            )}
          </>
        )
        case "nearestEducationalInstitution":
          return(
            <>
            {isModalOpen && (
              <NearestEducationPopUp text={"Add nearest educational institution"} a={"Educaional instution type "} b={"Educational institution name"}  onClose={() => setIsModalOpen(false)} />
            )}
            </>
          )
          case "nearestStations":
            return(
              <>
               {isModalOpen && (
              <NearestEducationPopUp text={"Add nearest station"} a={"Nearest station type"} b={"Nearest station name"} onClose={() => setIsModalOpen(false)} />
            )}
              </>
            )
            case "nearestLandmark":
              return(
                <>
                 <LandmarkPopUp onClose={() => setIsModalOpen(false)} />
                </>
              )
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
      </div>
    </div>
  );
};

export default PopUp;
