import React from "react";
import { NavLink } from "react-router-dom";
import "./browser.css";

function Browser() {
  return (
    <div>
      <nav className="container-fluid browser">
        <div className="container nav_bar_header">
          <ul className="nav_list">
            <li>
              <NavLink className="link_header" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="link_header" to="/About">About Us</NavLink>
            </li>
            <li>
              <NavLink className="link_header" to="/Menu">Menu</NavLink>
            </li>
            <li>
              <NavLink className="link_header" to="/Booking">Booking</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* React-Bootstrap Nav Bar
      <div className="container navbar_bootstrap">
        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">About us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Menu</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Booking</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      */}
    </div>
  );
}

export default Browser;
