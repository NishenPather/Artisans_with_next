import React from 'react'
import { Navbar as BootstrapNavbar, Nav, Container, } from 'react-bootstrap';

import Link from 'next/link'
import { useAuth } from '../../context/auth';

export default function Navbar() {
    const { isAuthenticated } = useAuth()
    return (
        <BootstrapNavbar bg="light" expand="lg">
            <Container>
                <Link href="/">
                    <a>
                        <BootstrapNavbar.Brand>Home</BootstrapNavbar.Brand>
                    </a>
                </Link>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {isAuthenticated ?
                            <AuthenticatedMenu /> :
                            <UnauthenticatedMenu />
                        }
                    </Nav>

                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

const AuthenticatedMenu = () => {
    const { user, logout } = useAuth()
    return (
        <>
            <NavbarLink href={'/dashboard'} >
                Hello {user.username}
            </NavbarLink>
            <Nav.Item onClick={logout}>
                <a style={{ cursor: 'pointer' }} className="nav-link">
                    Logout
                </a>
            </Nav.Item>
        </>
    )
}

const UnauthenticatedMenu = () => (
    <>
        <NavbarLink href={'/login'} >
            Login
        </NavbarLink>

        <NavbarLink href={'/signup'} >
            Signup
        </NavbarLink>
    </>
)
const NavbarLink = ({ href, children }) => (
    <Link href={href}>
        <a className="nav-link" >
            {children}
        </a>
    </Link>
)