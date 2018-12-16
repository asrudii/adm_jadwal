import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './NavbarCustom.css';


class NavbarCustom extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    
    render() {
        const loginRegLink = (
            <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                    Home
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} href="/" to="/login">
                    Login
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} href="/" to="/register">
                    Register
                </NavItem>
            </Nav>
        )
        const UserLink = (
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
                <NavItem eventKey={5} componentClass={Link} href="/" to="/profil">
                    User
                </NavItem>
                <NavItem eventKey={6} componentClass={Link} href="/" to="/">
                    <a href='/' onClick={this.logOut.bind(this)} className='nav-link'>
                        Logout
                    </a>
                </NavItem>
            </Nav>
        )

        return (
            <Navbar default collapsOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Cathlab Schedule</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {localStorage.usertoken ? UserLink : loginRegLink}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(NavbarCustom);