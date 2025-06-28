import img1 from "../assets/1.svg";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";

const PropertyType = () => {
  return (
    <div className=" max-w-[1440px] px-20 py-4 mx-auto">
      <p className="font-fustat text-[#272b35] text-[24px] font-[700]">
        Property type
      </p>
      {/* property type content  */}
      <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="p-[20px] border border-[#e0e0e0] rounded-[12px] flex items-center gap-[16px] cursor-pointer">
            <div className="p-[14px] bg-[#f9fbff]">
            <img src={img1} alt="home" />
            </div>
            <div className="py-[3.5px] font-fustat">
               <h5 className="font-fustat font-semibold text-[16px] text-[#272b35]">Single House Property</h5> 
               <p className="mt-[6px] font-[500px] text-[14px] text-[#777980]">Single unit house for single family</p>
            </div>
        </div>


        <div className="p-[20px] border border-[#e0e0e0] rounded-[12px] flex items-center gap-[16px] cursor-pointer">
            <div className="p-[14px] bg-[#f9fbff]">
            <img src={img2} alt="home" />
            </div>
            <div className="py-[3.5px] font-fustat">
               <h5 className="font-fustat font-semibold text-[16px] text-[#272b35]">Apartments complex</h5> 
               <p className="mt-[6px] font-[500px] text-[14px] text-[#777980]">Multiple unit house for families</p>
            </div>
        </div>


        <div className="p-[20px] border border-[#e0e0e0] rounded-[12px] flex items-center gap-[16px] cursor-pointer">
            <div className="p-[14px] bg-[#f9fbff]">
            <img src={img3} alt="home" />
            </div>
            <div className="py-[3.5px] font-fustat">
               <h5 className="font-fustat font-semibold text-[16px] text-[#272b35]">
               Condominiums</h5> 
               <p className="mt-[6px] font-[500px] text-[14px] text-[#777980]">Multiple unit house for families</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
