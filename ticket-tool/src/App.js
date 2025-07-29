import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ServiceRequestForm from "./Pages/User/ServiceRequestForm";
import Dashboard from "./Pages/Admin/Dashboard";
import EmployeePortal from "./Pages/Employee/EmployeePortal";
import RequestTracking from "./Pages/User/RequestTracking";
import ForgotPassword from "./Pages/ForgetPassword";
import ContactUs from "./Pages/ContactUs";
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
          <Route path="/contactus" element={<ContactUs />} />
          {/* ---user pages ---- */}
          <Route path="/newticket" element={<ServiceRequestForm />} />
          <Route path="/track" element={<RequestTracking />} />
          {/* ---admin and employee pages ---- */}  
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee-portal" element={<EmployeePortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


