import { Link, Route, Routes } from "react-router-dom";
import VishnudasBhaveVashi from "./VishnudasBhaveVashi";

import logo from "../../assets/img/abi_logo_png.png";
import Index from "../Index";
import TheaterHeader from "../../components/Navbars/TheaterHeader";

const Theater = () => {
  return (
    <>
      <TheaterHeader/>
      <main className="w-full">
        <Routes>
          <Route
            path="vishnudas-bhave-vashi"
            element={<VishnudasBhaveVashi />}
          />
        </Routes>
      </main>
    </>
  );
};

export default Theater;
