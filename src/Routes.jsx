import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomeLayout from "./Components/HomeLayout";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/ProfilePage";
import PurchaseRequestPage from "./Pages/PurchaseRequestPage";
import CreatePurchReqPage from "./Pages/CreatePurchReqPage";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="purchaserequest" element={<PurchaseRequestPage />} />
          <Route
            path="purchaserequest/create"
            element={<CreatePurchReqPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;
