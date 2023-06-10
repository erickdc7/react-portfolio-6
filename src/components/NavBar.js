import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setscrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setscrolled(true);
            } else {
                setscrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="#">
                                <img src="" alt="" />
                            </a>

                            <a href="#">
                                <img src="" alt="" />
                            </a>

                            <a href="#">
                                <img src="" alt="" />
                            </a>
                        </div>

                        <button className='vvd' onClick={() => console.log('connect')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar