import { useState } from "react";
import img from "../assets/land.svg";

const Vedios = () => {
  const [showVideos, setShowVideos] = useState(false);

  return (
    <div className="border mt-6 p-[12px] rounded-[20px] space-y-4">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setShowVideos(!showVideos)}
        className="flex items-center text-[18px] text-[#272b35] font-medium"
      >
        Videos (optional)
        <svg
          className={`ml-2 transform transition-transform ${
            showVideos ? "rotate-180" : ""
          }`}
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.855a.75.75 0 011.08 1.04l-4.24 4.405a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Video Upload Slots */}
      {showVideos && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="w-[80px] h-[80px] border-2 border-dashed border-blue-200 rounded-md flex items-center justify-center cursor-pointer hover:border-blue-400"
            >
              <img src={img} alt="upload" className="w-4 h-4" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vedios;
