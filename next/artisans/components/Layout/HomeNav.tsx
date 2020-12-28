import React from 'react'
import { Navbar as BootstrapNavbar, Nav, Container, } from 'react-bootstrap';
import Link from 'next/link'
import { useAuth } from '../../context/auth';
import Image from 'next/image';
import styles from '../../styles/Home.module.css'


/*
<BootstrapNavbar.Brand> 
<h1 className={styles.mainHeading}>rtisans</h1>         
</BootstrapNavbar.Brand>
*/

export default function HomeNav() {
    const { isAuthenticated } = useAuth()
    return (
      <div style={{width: "85%", backgroundColor: "#ffffff00", marginLeft: "75px"}}> 
        <BootstrapNavbar expand="lg">
       <BootstrapNavbar.Brand> 
         <Link href='/'>
              <div style={{ cursor: 'pointer', display: 'flex' }}><Image src='/a3.svg' alt='Home' width='100' height='100' className={styles.logo} /><h1 className={styles.mainHeading}>rtisans</h1> </div>    
          </Link> 
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
                <h2 className={styles.navlink}>
                    Logout
                </h2>
            </Nav.Item>
        </>
    )
}

const UnauthenticatedMenu = () => (
    <>
        <Link href={'/login'} >
           <h2  className={styles.navlink}>Login</h2>
        </Link>

        <Link href={'/signup'} >
        <h2 className={styles.navlink}>Signup</h2>
        </Link>
    </>
)
const NavbarLink = ({ href, children }) => (
    <Link href={href}>
        <h2 className={styles.navlink} >
            {children}
        </h2>
    </Link>
)