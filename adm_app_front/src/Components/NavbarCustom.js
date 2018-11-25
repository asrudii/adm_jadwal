import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarCustom.css';


class NavbarCustom extends Component {
    render() {
        return (
            <Navbar default collapsOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Cathlab Schedule</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/" to="/ajukan">
                            Ajukan Pasien
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/" to="/jadwal">
                            Jadwal
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/" to="/statistik">
                            Statistik
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarCustom;