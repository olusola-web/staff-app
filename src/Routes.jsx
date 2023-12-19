import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomeLayout from "./Components/HomeLayout";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/ProfilePage";
import ProfileEditPage from "./Pages/ProfileEditPage";
import PurchaseRequestPage from "./Pages/PurchaseRequestPage";
import CreatePurchReqPage from "./Pages/CreatePurchReqPage";
import LeaveOffRequestPage from "./Pages/LeaveOffRequestPage";
import ComplaintsPage from "./Pages/ComplaintsPage";
import ReclaimPage from "./Pages/ReclaimPage";
import ReclaimReqPage from "./Pages/ReclaimReqPage";


const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/edit" element={<ProfileEditPage />} />
          <Route path="Complaints" element={<ComplaintsPage />} />
          <Route path="reclaim" element={<ReclaimPage />} />
          <Route path="reclaim/reclaimrequest" element={<ReclaimReqPage />} />

          <Route path="purchaserequest" element={<PurchaseRequestPage />} />
          <Route
            path="purchaserequest/create"
            element={<CreatePurchReqPage />}
          />
          
          <Route path="leaverequest" element={<LeaveOffRequestPage />} />
          
          
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;
