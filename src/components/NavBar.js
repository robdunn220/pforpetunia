import React from "react";
import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {  ReactComponent as PLogo  } from './PFPLogo.svg';


export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" expand="lg" sticky='top' variant='dark'>
                <Navbar.Brand href="#home">
                    <PLogo id='logo' className="d-inline-block align-top" height={70} viewbox='0 0 16 16' />
                </Navbar.Brand>
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
