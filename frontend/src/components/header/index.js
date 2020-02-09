import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import SearchBar from "../search-bar";
import "./styles.css";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" color="light" light expand="md">
        <NavbarBrand href="/">Git fetcher</NavbarBrand>
        <NavbarToggler className="navbarToggler" onClick={toggle} />
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
