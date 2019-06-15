import React from 'react'
import { NavLink as RouteLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';


const NavLinks = () => {
    return (
        <React.Fragment>
            <Nav navbar>
                <NavItem>
                    <RouteLink to="/" className="nav-link" activeClassName="active" exact>Home</RouteLink>
                </NavItem>
                <NavItem>
                    <RouteLink to="/about" className="nav-link" activeClassName="active" exact>About</RouteLink>
                </NavItem>
            </Nav>
        </React.Fragment>
    )
}

export default NavLinks
