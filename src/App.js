import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Navbar/Navbar';
import {Itemlist} from './Components/ItemListContainer/ItemListContainer';
import aorus3050 from '../src/img/aorus3050.jpg';
import asus3070ti from '../src/img/asus3070ti.jpg';

function App() {
  return (
    <div className="App">
       <Menu/>
       <Itemlist greeting="RTX 3050 Aorus" imagen={aorus3050} style={'greeting'} stylePlacas={'placas'}/>
       <Itemlist greeting="RTX 3070ti Rog Strix" imagen={asus3070ti} style={'greeting'} stylePlacas={'placas'}/>
    </div>
  );
}

export default App;
