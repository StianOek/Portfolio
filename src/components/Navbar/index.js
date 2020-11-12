import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink } from './NavbarElements'


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="#">STH</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about">about</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="portfolio">portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact">Contact</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/resume">Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
