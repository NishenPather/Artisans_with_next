import React from 'react'
import { Navbar as BootstrapNavbar, Nav, Container, } from 'react-bootstrap';
import Link from 'next/link'
import { useAuth } from '../../context/auth';
import Image from 'next/image';
import styles from '../../styles/Home.module.css'
import classNames from 'classnames'




export default function Navbar() {
    const { isAuthenticated } = useAuth()
    return (
      <div style={{width: "85%", backgroundColor: "#ffffff00", marginLeft: "75px"}}> 
        <BootstrapNavbar expand="lg">
       <BootstrapNavbar.Brand> 
         <Link href='/'>
              <a className={styles.logo}><Image src='/a.svg' alt='Home' width='130' height='130'/></a>
          </Link> 
        </BootstrapNavbar.Brand> 
                 <BootstrapNavbar.Brand> 
                     <h1 className={styles.mainHeading}> Artisans</h1>         
       </BootstrapNavbar.Brand> 
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {isAuthenticated ?
                            <AuthenticatedMenu /> :
                            <UnauthenticatedMenu />
                        }
                    </Nav>
                </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
        </div>
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
                <h2 style={{ cursor: 'pointer', padding: '30px', marginTop: '8px',  fontSize: '40px', fontFamily: 'Marck Script, cursive'}} className={styles.link}>
                    Logout
                </h2>
            </Nav.Item>
        </>
    )
}

const UnauthenticatedMenu = () => (
    <>
        <Link href={'/login'} >
           <h2 style={{ cursor: 'pointer', padding: '30px', marginTop: '8px',  fontSize: '40px', fontFamily: 'Marck Script, cursive'}} className={styles.link}>Login</h2>
        </Link>

        <Link href={'/signup'} >
        <h2 style={{ cursor: 'pointer', padding: '30px', marginTop: '8px',  fontSize: '40px', fontFamily: 'Marck Script, cursive'}} className={styles.link}>Signup</h2>
        </Link>
    </>
)
const NavbarLink = ({ href, children }) => (
    <Link href={href}>
        <h2 style={{ cursor: 'pointer', padding: '30px', marginTop: '8px',  fontSize: '40px', fontFamily: 'Marck Script, cursive'}} className={styles.link} >
            {children}
        </h2>
    </Link>
)