import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../img/k_perfil.jpg';
import CartWidget from '../../Components/CartWidget/CartWidget';
import Carritoimg from '../../img/carrito.png';

function Menu(){
    return(
        <div>
            
            <Navbar bg='dark' variant='dark'>
            <Navbar.Brand>
                <CartWidget imagen={logo} style={'logo'}/>
                  
            </Navbar.Brand>  
            <Navbar.Brand>
              Informática Knoll
            </Navbar.Brand>
          <Nav>
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#Promociones">Promociones</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
            <Nav.Link href="#Politicas">Politicas</Nav.Link>
            <Nav.Link href="#"><CartWidget imagen={Carritoimg} style={'carrito'}/></Nav.Link>
          </Nav>
        </Navbar>
        </div>
    )
}

export default Menu;