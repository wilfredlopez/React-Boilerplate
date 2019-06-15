import React from 'react';
import PropTypes from 'prop-types'
import {
    Collapse,
    Navbar,
    NavbarToggler
} from 'reactstrap';

import { NavLink } from 'react-router-dom'

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavLink className="navbar-brand" to="/">{this.props.brandName}</NavLink>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {this.props.children}
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}


Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    brandName: PropTypes.string
    // pass in custom element to use
}

//CHILDREN ELEMETS SHOULD INCLUDE NAVLINKS. EJ
// <Nav navbar>
// <NavItem>
//    <NavLink href="/">Home</NavLink>
// </NavItem>
// <NavItem>
//      <NavLink href="/about">About</NavLink>
// </NavItem>
// </Nav>