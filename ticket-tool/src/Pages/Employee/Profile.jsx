import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ProfileSection = () => {
  // Sample user data - in real use, you might fetch this
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    department: "Engineering",
    position: "Software Engineer",
    location: "New York",
  };

  return (
    <Container className="my-4">
      <h2>👤 Employee Profile</h2>

      <div className="mb-4">
        <h4>Profile Details</h4>
        <p className="text-muted">
          Welcome back, here you can view your personal details.
        </p>
      </div>

      <Row className="justify-content-center">
        <Col lg={6} md={8} sm={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <Row>
                <Col xs={5} className="fw-semibold">
                  Name:
                </Col>
                <Col xs={7}>{user.name}</Col>
              </Row>
              <hr />
              <Row>
                <Col xs={5} className="fw-semibold">
                  Email:
                </Col>
                <Col xs={7}>{user.email}</Col>
              </Row>
              <hr />
              <Row>
                <Col xs={5} className="fw-semibold">
                  Phone:
                </Col>
                <Col xs={7}>{user.phone}</Col>
              </Row>
              <hr />
              <Row>
                <Col xs={5} className="fw-semibold">
                  Department:
                </Col>
                <Col xs={7}>{user.department}</Col>
              </Row>
              <hr />
              <Row>
                <Col xs={5} className="fw-semibold">
                  Position:
                </Col>
                <Col xs={7}>{user.position}</Col>
              </Row>
              <hr />
              <Row>
                <Col xs={5} className="fw-semibold">
                  Location:
                </Col>
                <Col xs={7}>{user.location}</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSection;
