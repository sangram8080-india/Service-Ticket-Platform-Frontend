import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Admin/Dashboard";
import ForgotPassword from "./Pages/ForgetPassword";
import ContactUs from "./Pages/ContactUs";
import EmployeeRoutes from "./Pages/Employee/EmployeeRoutes";
import UserRoutes from "./Pages/User/UserRoutes";
import ServicesPage from "./Pages/ServicePage";
import AboutUsPage from "./Pages/AboutUsPage"; // Adjust relative path accordingly



function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* ---common pages ---- */}

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contactus" element={<ContactUs />} />
<Route path="/aboutus" element={<AboutUsPage />} />


          {/* ---user pages ---- */}
          <Route path="/user-portal/*" element={<UserRoutes />} />
        
          {/*  employee pages ---- */}  
<Route path="/employee-portal/*" element={<EmployeeRoutes />} />

          {/* ---admin pages ---- */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


