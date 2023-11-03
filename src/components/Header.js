import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Navbar className='bg-primary'>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="https://i.postimg.cc/hv60T604/Contacts-B-W-icon.jpg"
                                width="100"
                                height="80"
                                className="d-inline-block align-top"
                            />{' '}
                            <b className='fs-1 text-light me-4'>Connect</b>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Link>
        </div>
    )
}

export default Header