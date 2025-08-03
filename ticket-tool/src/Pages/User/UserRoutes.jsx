import React from "react";
import { Routes, Route } from "react-router-dom";
import UserPortalLayout from "./UserPortalLayout";
import RequestTracking from "./RequestTracking";
import NewTicket from "./NewTicket";
const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPortalLayout />}>
      
             <Route path="newticket" element={<NewTicket />} />
             <Route path="track" element={<RequestTracking />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
