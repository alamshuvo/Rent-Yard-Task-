import { useLocation } from "react-router-dom";
import Footer from "./Footer";


const Condominiums = () => {
    const path = useLocation()
    return (
        <div className="max-w-[1440px] px-20 py-4 mx-auto flex flex-col  font-fustat">
            <div >
                <h2 className="text-[24px] font-bold text-[#272b37]">Condominiums information</h2>
            </div>
            <div className="">
                <Footer des={"Next"}></Footer>
            </div>
        </div>
    );
};

export default Condominiums;