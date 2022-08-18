import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Menu(){
    return(
        <div>
            <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>
            Informatica Knoll
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#Promociones">Promociones</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
            <Nav.Link href="#Politicas">Politicas</Nav.Link>
          </Nav>
        </Navbar>
        </div>
    )
}

export default Menu;