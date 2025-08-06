//import logo from '../assets/react.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/NavBar.css'

import CartWidget from './CartWidget';
const NavBar=()=>{
    /*return(
        <nav class='nav-container'>
            <img alt='logo' src='../logoExi.png' class="logo"/>
            {/*<img alt='logo' src={logo} />
            <a style={style} class="ancho-nav">Nuevos</a>
            <a style={style} class="ancho-nav">Más vendidos</a>
            <a style={style} class="ancho-nav">Ofertas</a>
        </nav>
    )*/
    return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img className='logo' alt='logo' src='../logo.png' class="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#multifuncionales">Multifuncionales</Nav.Link>
            <Nav.Link href="#consumibles">Consumibles</Nav.Link>
            <Nav.Link href="#refacciones">Refacciones</Nav.Link>
           
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