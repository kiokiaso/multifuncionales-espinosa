//import logo from '../assets/react.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/NavBar.css'
import {Link, NavLink} from 'react-router-dom'

import CartWidget from './CartWidget';
const NavBar=()=>{
    return (
    <Navbar collapseOnSelect expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand as={NavLink} to='/'><img className='logo' alt='logo' src='../logo.png' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/categories/multifuncionales'>Multifuncionales</Nav.Link>
            <Nav.Link as={NavLink} to='/categories/consumibles'>Consumibles</Nav.Link>
            <Nav.Link as={NavLink} to='/categories/refacciones'>Refacciones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          <Nav>
            <CartWidget/>
          </Nav>
      </Container>
    </Navbar>
  );
}


export default NavBar