import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" expand="lg" sticky='top' variant='dark'>
                <Navbar.Brand href="#home">P for Petunia</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">home</Nav.Link>
                        <Nav.Link href="#about">about</Nav.Link>
                        <Nav.Link href="#contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
