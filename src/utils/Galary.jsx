
import img from "../assets/land.svg"; // Make sure the path is correct

const PropertyGallery = () => {


  return (
    <div className="border rounded-md space-y-4 mt-[24px] font-fustat">
      {/* Gallery Label */}
     <div className="p-[20px] border">
     <label className="block text-[14px] font-medium text-[#272B35] text-[18px]">
        Property gallery <span className="text-[#999]">(its not unit photo)*</span>
      </label>
     </div>

      {/* Upload sections */}
      <div className="">
        {/* Flex layout for Featured + More Photos */}
        <div className="flex flex-col lg:flex-row gap-x-6 gap-y-4">
          {/* Featured Photo */}
         <div className="p-[20px]">
         <p className="text-[16px] font-medium text-[#272B35] mb-2">Featured photo *</p>
          <div className="flex gap-[10px]">
          
            <div className="w-[217px] h-[165px] border-2 border-dashed border-blue-300 rounded-md flex flex-col items-center justify-center text-center text-[12px] text-gray-500 cursor-pointer hover:border-blue-500">
              <img src={img} alt="upload" className="w-7 h-6=7 mb-1" />
              <span>Upload cover photo</span>
              <span className="text-[10px] text-gray-400">(JPG, PNG only)</span>
              
            </div>
            <div className="grid grid-cols-2 gap-1">
              {[...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="w-[80px] h-[80px] border-2 border-dashed border-blue-200 rounded-md flex items-center justify-center cursor-pointer hover:border-blue-400"
                >
                  <img src={img} alt="upload" className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
         </div>

          {/* More Photos */}
          <div className="flex-1 p-[20px]">
            <p className="text-[16px] font-medium text-[#272B35] mb-2">
              More photos <span className="text-gray-400">(optional)</span>
            </p>
            <div className="grid grid-cols-4 gap-1">
              {[...Array(8)].map((_, idx) => (
                <div
                  key={idx}
                  className=" h-[80px] border-2 border-dashed border-blue-200 rounded-md flex items-center justify-center cursor-pointer hover:border-blue-400"
                >
                  <img src={img} alt="upload" className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default PropertyGallery;
// some code added 