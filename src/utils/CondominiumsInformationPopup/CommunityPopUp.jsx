import { useRef, useState } from "react";
import a from "../../assets/community/1.png"
import b from "../../assets/community/2.svg";
import c from "../../assets/community/3.svg";
import d from "../../assets/community/4.svg";
import e from "../../assets/community/5.svg";
import f from "../../assets/community/6.svg";
import g from "../../assets/community/7.svg";
import h from "../../assets/community/8.svg";
import i from "../../assets/community/9.png";
import j from "../../assets/community/10.svg";
import k from "../../assets/community/11.svg";
import l from "../../assets/community/12.svg";
import m from "../../assets/community/13.svg";
import n from "../../assets/community/14.svg";
import o from "../../assets/community/15.svg";
import p from "../../assets/community/16.svg";

const CommunityPopUp = ({ onClose }) => {
  const formRef = useRef();
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchText, setSearchText] = useState("");

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const communityFields = [
    { id: "air", text: "Air conditioning", img: b },
    { id: "cable", text: "Cable ready", img: c },
    { id: "fan", text: "Ceiling fan", img: d },
    { id: "ceilings", text: "High ceiling", img: e },
    { id: "balcony", text: "Private balcony", img: f },
    { id: "refrigerator", text: "Refrigerator", img: g },
    { id: "wood", text: "Wooded views", img: h },
    { id: "wd", text: "W/D hookup", img: i },
    { id: "home", text: "Hardwood floor (home)", img: j },
    { id: "homee", text: "Hardwood floor (home)", img: j },
    { id: "fire", text: "Fireplace(home)", img: k },
    { id: "kit", text: "First aid kit", img: l },
    { id: "alarm", text: "Carbon monoxide alarm", img: m },
    { id: "patios", text: "Expanded patios(home)", img: n },
    { id: "parking", text: "Free parking on premises", img: o },
    { id: "extinguisher", text: "Fire extinguisher", img: p },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    data.selectedAmenities = selectedIds;
    console.log("Community Data:", data);
    onClose?.();
  };

  // Filter fields based on search text
  const filteredFields = communityFields.filter((field) =>
    field.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="font-fustat lg:w-[780px]">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="border rounded-[8px]">
          {/* Section Header */}
          <div className="bg-[#f4f4f4] px-[16px] py-[14px]">
            <p className="text-[#6f6c6a] text-[16px] font-semibold">
              Community's amenity/features
            </p>
          </div>

          {/* Search Input */}
          <div className="px-[16px] pt-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={a} alt="Search" className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search amenities..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[14px]"
              />
            </div>
          </div>

          {/* Amenity Cards */}
          <div className="p-[16px] grid grid-cols-3 gap-[16px]">
            {filteredFields.length > 0 ? (
              filteredFields.map((field) => {
                const isSelected = selectedIds.includes(field.id);
                return (
                  <div key={field.id} className="col-span-1">
                    <div
                      onClick={() => toggleSelect(field.id)}
                      className={`relative w-full h-[48px] border-2 rounded-[8px] px-3 flex items-center gap-2 cursor-pointer transition ${
                        isSelected
                          ? "bg-[#eaf1ff] border-blue-500"
                          : "border-[#E0E0E0] hover:border-blue-500"
                      }`}
                    >
                      <img
                        src={field.img}
                        alt=""
                        className="w-[20px] h-[20px] object-contain"
                      />
                      <span className="text-[#272B35] text-[16px] font-medium truncate flex-1">
                        {field.text}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                No amenities match your search.
              </p>
            )}
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

export default CommunityPopUp;
