import React, { useState } from "react";
import Footer from "../../Components/Footer";
import EmployeeSideNav from "../../Components/EmployeeSideNav";
import "../../Styles/Dashboard.css";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { Outlet } from "react-router-dom";
export default function EmployeePortalLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="dashboard-layout">
        <EmployeeSideNav collapsed={collapsed} setCollapsed={setCollapsed} />
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
