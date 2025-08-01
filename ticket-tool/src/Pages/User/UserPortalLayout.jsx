import React, { useState } from "react";
import Footer from "../../Components/Footer";
import UserSideNav from "../../Components/UserSideNav"; // Make sure this path is correct
import "../../Styles/Dashboard.css";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function UserPortalLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="dashboard-layout">
        <UserSideNav collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="main-content">
          <div className="dashboard-wrapper d-flex">
            <div className="dashboard-content flex-grow-1">
              <Container fluid className="p-5 pb-5">
                <Outlet />
              </Container>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
