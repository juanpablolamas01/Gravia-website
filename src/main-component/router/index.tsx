import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WowInit from "../../components/wowInit/wowInit";

// ✅ Home Pages
import Homepage from "../HomePage";
import ScrollToTop from "./ScrollToTop";
import ErrorPage from "../ErrorPage/ErrorPage";

// ✅ Router Component
const AllRoute: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <WowInit />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
