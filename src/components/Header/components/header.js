import React from 'react'
import {
  Nav,
  Navbar,
  NavItem,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  NavLink
} from 'reactstrap'

const Header = ({toggle, isDropdownOpen}) => (
  <Navbar color="faded" light toggleable style={{position: 'fixed', zIndex: 1000, width: 100+'%'}}>
    <NavbarToggler right onClick={toggle} />
    <NavbarBrand href="/">Logo</NavbarBrand>
    <Collapse isOpen={isDropdownOpen} navbar>
      <Nav className="d-flex justify-content-start" navbar>
        <NavItem>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/other">Other</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
)

export default Header