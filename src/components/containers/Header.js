import React from 'react'
import NavLinks from './NavLinks'
import StrapNavbar from '../Utils/StrapNavbar'

const Header = () => {
    return (
        <header>
            <StrapNavbar brandName="WilfredPlate" dark={true}>
                <NavLinks />
            </StrapNavbar>
        </header>
    )
}

export default Header
