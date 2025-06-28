import land from "../assets/land.svg";
const Landlord = () => {
  return (
    <div>
      <div className="mt-[32px] border border-[#E0E0E0] rounded-[8px] font-fustat">
        {/* Section Header */}
        <div className="bg-[#f4f4f4] px-[16px] py-[14px] rounded-t-[14px] rounded-l[14px]">
          <p className="font-fustat text-[#6f6c6a] text-[18px] font-semibold">
            Proof of ownership
          </p>
        </div>

        {/* Upload Field */}
        <div className=" py-[14px] px-[16px]">
          <label
            className="block text-[14px] text-[#272B35] font-medium mb-2"
            htmlFor="ownershipDoc"
          >
            Ownership doc<span className="text-black-200">*</span>
          </label>
          <div className="border border-dashed border-[#e0e0e0] rounded-[12px] px-[16px] bg-[#f4f4f4] cursor-pointer hover:border-blue-500 w-[405.33px] h-[48px] flex items-center justify-center">
            <input
              type="file"
              id="ownershipDoc"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => console.log(e.target.files)}
            />
            <label
              htmlFor="ownershipDoc"
              className="text-[#999999] text-[14px] cursor-pointer flex items-center gap-[10px]"
            >
              <span>
                <img src={land} alt="land" />
              </span>
              (PDF only)
            </label>
          </div>
        </div>
      </div>
        {/* Terms Checkbox */}
        <div className="mt-[28.5px]">
            <label className="inline-flex items-start space-x-2">
              <input type="checkbox" className="mt-[2px]" />
              <span className="text-[16px] font-[600px] text-[#272b37] font-fustat ">
                Accept RentYard property adding terms & condition
              </span>
            </label>
          </div>
    </div>
  );
};

export default Landlord;
