import React, { useState } from "react";
import Footer from "../../Components/Footer";
import EmployeeSideNav from "../../Components/EmployeeSideNav";
import "../../Styles/Dashboard.css"; // Layour CSS yaha import karein
import { Container, Row, Col, Card, Table } from "react-bootstrap";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
      <>
      <div className="dashboard-layout">
        <EmployeeSideNav collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="main-content">
          <div className="dashboard-wrapper d-flex">
            <div className="dashboard-content flex-grow-1">
              <Container fluid className="p-5 pb-5">
                <div className="mb-4">
                  <h2>Employee Dashboard</h2>
                  <p className="text-muted">
                    Welcome back, here's what's happening today.
                  </p>
                </div>

              

               
              </Container>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
