import React from "react";
import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {  ReactComponent as PLogo  } from './PFPLogo.svg';
import bgimage from "./DSC_0001.JPG";
import rose from './Rose_1.png';


export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" expand="lg" sticky='top' variant='dark'>
                <Navbar.Brand href="#home">
                    <PLogo id='logo' className="d-inline-block align-top" height={65} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">home</Nav.Link>
                        <Nav.Link href="#about">about</Nav.Link>
                        <Nav.Link href="#contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <img src={rose} className='rose-image' alt=""/>
            </Navbar>
        </>
    );
}
