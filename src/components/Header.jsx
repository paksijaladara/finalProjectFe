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
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/actions";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const userName = useSelector(state => state.LoginRegister.userName); //memnggil reducers username dari redux
  const role = useSelector(state => state.LoginRegister.role); //memnggil reducers role dari redux
  const login = useSelector(state => state.LoginRegister.loginstatus); //memanggil reducers sekaligus statenya
  const { dataCart } = useSelector(state => state.TransaksiReducers); //manggil reducers dengan cara destructuring

  const dispatch = useDispatch();

  const btnLogout = () => {
    localStorage.removeItem("id");
    dispatch(logOut());
  };

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

            <div className="Logo" a href="/">
              AQUA DAVIDA
            </div>

            <div className="cart">
              <Link to="/Cart">
                <FaCartArrowDown />
                {dataCart.length}
              </Link>
            </div>
          </div>
        </div>
      </Navbar>

      <Navbar className="header-bawah mx-auto" light expand="md">
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          {login && role === "user" ? (
            <Dropdown
              onMouseEnter={() => setDropdownOpen1(true)}
              onMouseLeave={() => setDropdownOpen1(false)}
              isOpen={dropdownOpen1}
              toggle={() => setDropdownOpen1(!dropdownOpen)}
              style={{ position: "absolute" }}
            >
              <DropdownToggle nav className="d-flex">
                <a
                  className="nav-link nav-home"
                  style={{
                    fontFamily: "bold",
                    // fontSize: "17px",
                    margin: "left"
                  }}
                >
                  <span style={{ color: "black", textAlign: "left" }}>
                    Hello, {userName} <FaCaretDown />
                  </span>
                </a>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/Checkout">Payment</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : login && role === "admin" ? (
            <Dropdown
              onMouseEnter={() => setDropdownOpen1(true)}
              onMouseLeave={() => setDropdownOpen1(false)}
              isOpen={dropdownOpen1}
              toggle={() => setDropdownOpen1(!dropdownOpen)}
              style={{ position: "absolute" }}
            >
              <DropdownToggle nav className="d-flex">
                <a
                  className="nav-link nav-home"
                  style={{
                    fontFamily: "bold",
                    // fontSize: "17px",
                    margin: "left"
                  }}
                >
                  <span style={{ color: "black", textAlign: "left" }}>
                    Hello, {userName} <FaCaretDown />
                  </span>
                </a>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/manageAdmin">Manage Admin</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : null}

          <Nav
            // className="mx-auto"
            navbar
            style={{
              textAlign: "center",
              margin: "auto"
            }}
          >
            <NavItem className="mt-2 mx-auto  d-flex">
              <NavLink
                className="nav-home"
                href="/"
                style={{ color: "black", fontSize: "16px" }}
              >
                Home
              </NavLink>
            </NavItem>
            <Dropdown
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              isOpen={dropdownOpen}
              toggle={() => setDropdownOpen(!dropdownOpen)}
            >
              <DropdownToggle nav className=" mx-auto  d-flex">
                <a
                  className="nav-link nav-home"
                  style={{ fontFamily: "bold", fontSize: "17px" }}
                >
                  <span>
                    Fish Collections
                    <FaCaretDown />
                  </span>
                </a>
              </DropdownToggle>
              <DropdownMenu
                right
                className="nav-homeItem"
                style={{ fontFamily: "bold", fontSize: "17px" }}
              >
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
                <a className="nav-link nav-home" style={{ fontFamily: "bold" }}>
                  Equipments
                  <span>
                    <FaCaretDown />
                  </span>
                </a>
              </DropdownToggle>
              <DropdownMenu
                right
                className="nav-homeItem"
                style={{ fontFamily: "bold" }}
              >
                <DropdownItem href="/aquarium">Aquarium</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/utilities">Utilities</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem
              className="mt-2 mx-auto  d-flex"
              style={{ fontSize: "16px" }}
            >
              {login === true ? (
                <NavLink className="nav-home" href="/login" onClick={btnLogout}>
                  Logout
                </NavLink>
              ) : (
                <NavLink className="nav-home" href="/login">
                  Login
                </NavLink>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
