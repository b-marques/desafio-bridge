import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import SearchBar from "../search-bar";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" style={{ marginBottom: "1rem" }}>
        <NavbarBrand href="/">Git fetcher</NavbarBrand>
        <NavbarToggler onClick={toggle} style={{ margin: "0.5rem" }} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <SearchBar {...props} />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
