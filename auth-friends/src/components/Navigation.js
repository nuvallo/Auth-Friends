import React from "react";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Auth Friends</NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Login</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
