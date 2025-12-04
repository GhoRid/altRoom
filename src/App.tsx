import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import MainLayout from "./layouts/MainLayout";
// import RiumPage from "./pages/RiumPage/RiumPage";
// import SeokwangPage from "./pages/SeokwangPage/SeokwangPage";
// import ToTheTopPage from "./pages/ToTheTopPage/ToTheTopPage";
// import SeokwangBooksPage from "./pages/SeokwangBooksPage/SeokwangBooksPage";
// import CeoCooPage from "./pages/CeoCooPage/CeoCooPage";
// import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
// import EmploymentPage from "./pages/EmploymentPage/EmploymentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/employment" element={<EmploymentPage />} />
          <Route path="/about">
            <Route path="ceo&coo" element={<CeoCooPage />} />
            <Route path="aboutus" element={<AboutUsPage />} /> */}
        </Route>

        {/* <Route path="/brands">
            <Route path="trvs_seokwang" element={<SeokwangPage />} />
            <Route path="trvs_rium" element={<RiumPage />} />
            <Route path="trvs_tothetop" element={<ToTheTopPage />} />
            <Route path="trvs_seokwangbooks" element={<SeokwangBooksPage />} />
          </Route> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
