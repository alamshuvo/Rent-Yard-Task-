import land from "../assets/land.svg";

const Relator = () => {
  const ownershipDocs = [
    {
      id: "LenienceNumber",
      label: "Lenience number",
      required: true,
    },
    {
      id: "AdditionalDocuments",
      label: "Additional documents for realtor",
      required: true,
    },
    {
      id: "AgreementWithLandlord",
      label: "Agreement with landlord",
      required: true,
    },
  ];

  return (
    <div>
      <div className="mt-[32px] border border-[#E0E0E0] rounded-[8px] font-fustat">
        {/* Section Header */}
        <div className="bg-[#f4f4f4] px-[16px] py-[14px] rounded-t-[14px]">
          <p className="font-fustat text-[#6f6c6a] text-[18px] font-semibold">
            Realtor Verification
          </p>
        </div>

        {/* Upload Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ownershipDocs.map((doc) => (
            <div key={doc.id} className="py-[14px] px-[16px]">
              <label
                htmlFor={doc.id}
                className="block text-[14px] text-[#272B35] font-medium mb-2"
              >
                {doc.label}
                {doc.required && <span className="text-black-200 ml-1">*</span>}
              </label>

              <div
                className={`border border-dashed border-[#e0e0e0] rounded-[12px] px-[16px] 
    ${doc.id === "LenienceNumber" ? "bg-white" : "bg-[#f4f4f4]"} 
    cursor-pointer hover:border-blue-500 h-[48px] 
    flex items-center justify-center w-full max-w-[405px]`}
              >
                {/* If not LenienceNumber, show file input */}
                {doc.id !== "LenienceNumber" && (
                  <>
                    <input
                      type="file"
                      id={doc.id}
                      accept="application/pdf"
                      className="hidden"
                      onChange={(e) => console.log(e.target.files)}
                    />
                    <label
                      htmlFor={doc.id}
                      className="text-[#999999] text-[14px] cursor-pointer flex items-center gap-[10px]"
                    >
                      <span>
                        <img src={land} alt="land" />
                      </span>
                      (PDF only)
                    </label>
                  </>
                )}

                {/* If LenienceNumber, show text input */}
                {doc.id === "LenienceNumber" && (
                  <input
                    type="text"
                    id={doc.id}
                    placeholder="000000000000000"
                    className="w-full bg-transparent outline-none text-[14px] text-[#999999]"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="mt-[28.5px]">
        <label className="inline-flex items-start space-x-2">
          <input type="checkbox" className="mt-[2px] border-2 border-[#272b37]" />
          <span className="text-[16px] font-[600] text-[#272b37] font-fustat">
            Accept RentYard property adding terms & condition
          </span>
        </label>
      </div>
    </div>
  );
};

export default Relator;
