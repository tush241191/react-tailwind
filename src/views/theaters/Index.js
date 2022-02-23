import { Route, Routes } from "react-router-dom";
import VishnudasBhaveVashi from "./VishnudasBhaveVashi";

import TheaterHeader from "../../components/Navbars/TheaterHeader";
import AdyaKrantiveerVasudevBalwantPhadkePanvel from "./AdyaKrantiveerVasudevBalwantPhadkePanvel";

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
          <Route
            path="adya-krantiveer-vasudev-balwant-phadke-panvel"
            element={<AdyaKrantiveerVasudevBalwantPhadkePanvel />}
          />
        </Routes>
      </main>
    </>
  );
};

export default Theater;
