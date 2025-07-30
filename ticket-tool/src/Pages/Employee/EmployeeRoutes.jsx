// src/routes/EmployeeRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import EmployeePortalLayout from "./EmployeePortalLayout";
import Ticket from "./Ticket";
import Profile from "./Profile";
import TicketMonitoring from "./TicketMonitoring";
import LocationTracking from "./LocationTracking";
const EmployeeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeePortalLayout />}>
        <Route path="tickets" element={<Ticket />} />
        <Route path="profile" element={<Profile />} />
        <Route path="ongoing" element={<TicketMonitoring/>} /> 
        <Route path="location-tracking" element={<LocationTracking />} />
      </Route>
    </Routes>
  );
};

export default EmployeeRoutes;
