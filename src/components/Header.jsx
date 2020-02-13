/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavLink,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
  // NavbarText
} from "reactstrap";
import { FaCaretDown, FaCartArrowDown } from "react-icons/fa";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ height: "15vh" }}>
        <div>
          <div className="header-atas-kontent">
            <input
              className="Searchbar form-control mr-auto "
              placeholder="Search"
              style={{ width: "300px" }}
            ></input>
            <div className="Logo">AQUA DAVIDA</div>
            <div className="cart">
              <FaCartArrowDown />
            </div>
          </div>
        </div>
      </Navbar>

      <Navbar className="header-bawah mx-auto" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem className="mt-2 mx-4  d-flex">
              <NavLink className="nav-home" to="/">
                Home
              </NavLink>
            </NavItem>
            <Dropdown
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              isOpen={dropdownOpen}
              toggle={() => setDropdownOpen(!dropdownOpen)}
            >
              <DropdownToggle nav className=" mx-4  d-flex">
                <a className="nav-link nav-home">
                  <span>
                    Fish Collections
                    <FaCaretDown />
                  </span>
                </a>
              </DropdownToggle>
              <DropdownMenu right className="nav-homeItem">
                <DropdownItem href="/ikanAirTawar">Ikan Air Tawar</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/ikanAirLaut">Ikan Laut</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown
              onMouseEnter={() => setDropdownOpen2(true)}
              onMouseLeave={() => setDropdownOpen2(false)}
              isOpen={dropdownOpen2}
              toggle={() => setDropdownOpen2(!dropdownOpen2)}
            >
              <DropdownToggle nav className=" mx-auto  d-flex">
                <a className="nav-link nav-home">
                  Equipments
                  <span>
                    <FaCaretDown />
                  </span>
                </a>
              </DropdownToggle>
              <DropdownMenu right className="nav-homeItem">
                <DropdownItem>Aquarium</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Utilities</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem className="mt-2 mx-4  d-flex">
              <NavLink className="nav-home" to="/login">
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
