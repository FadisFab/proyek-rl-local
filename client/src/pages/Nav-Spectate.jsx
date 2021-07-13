import React from "react";
import {Link} from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap';
import '../css/Nav.css';

function navspectate() {
  const navStyle={
    color: 'black'
  };
  return (
    <nav>
        <Navbar.Brand style={navStyle} href="/home">MARBOT</Navbar.Brand>
        <ul className="nav-links">
            <Link style={navStyle} to="/explaination">
                <li>Explaination</li>
            </Link>
            <Link style={navStyle} to="/about-us">
                <li>About Us</li>
            </Link>
            <Link to="/dashboard-spectator">
                <Button variant="dark" size="sm">WATCH</Button>
            </Link>
        </ul>
    </nav>
  );
}

export default navspectate;