import React from "react";
import { Container, Navbar, NavItem, NavLink, Row, Col, Nav } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => (
  <header>
    <Container>
      <Navbar
        fixed="top"
        color="light"
        light
        expand="md"
        className="border-bottom border-gray bg-light"
        style={{ height: 50 }}
      >
        <Row noGutters className="position-relative w-100 align-items-center">
          <Col className="d-none d-lg-flex justify-content-end">
            <Nav navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink href="/" active>
                  Login
                </NavLink>
              </NavItem>
            </Nav>

            <Nav navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink href="/">
                  <FontAwesomeIcon icon="user-circle" className="fa-2x" />
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </Container>
  </header>
);

export default Header;
