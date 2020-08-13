import React from "react";
import { Container, Navbar, Form, FormControl } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./index.css";

function Header({ showSearch, onSearch }) {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="/" className="mr-auto">
          <img src={logo} className="brand-logo" alt="Delfos Logo" />
        </Navbar.Brand>

        {showSearch && (
          <Form inline>
            <FormControl type="text" placeholder="Search" onChange={onSearch} />
          </Form>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
