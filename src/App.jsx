import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const path = useLocation();
  return (
    <div>
      <div>
        {
          path.pathname === "/" ? (
            <Nav des={"Exit"} />
          ) : (
            <Nav des={"Save & Exit "} />
          )
        }
      </div>
      <div className={path.pathname !== "/rent" ?"mt-[40px] mb-[32px]":""}>
        <Outlet /> 
      </div>
    </div>
  );
}

export default App;
