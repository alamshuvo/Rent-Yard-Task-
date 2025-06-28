const Footer = ({ selectedType ,roleType}) => {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-between items-center font-fustat ">
      <button className="underline cursor-pointer">Back</button>
      <button
        className="bg-[#316ded] px-6 py-3 disabled:opacity-50 text-white rounded-[12px]"
        disabled={!selectedType || !roleType}
      >
        Get Started
      </button>
    </div>
  );
};

export default Footer;
