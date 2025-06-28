import { Link } from "react-router-dom";

const Footer = ({ selectedType ,roleType,des}) => {

  return (
    <div className="max-w-[1440px] mx-auto flex justify-between items-center font-fustat ">
      <button className="underline cursor-pointer">Back</button>
    <Link to={"/rent"}>
    <button
        className="bg-[#316ded] px-6 py-3 disabled:opacity-50 text-white rounded-[12px]"
        disabled={des !== "Next" && (!selectedType || !roleType)}
      >
       {
        !des ? "Get Started" : "Next"
       }
      </button>
    </Link>
    </div>
  );
};

export default Footer;
