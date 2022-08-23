import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Navbar/Navbar';
import Itemlist from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
       <Menu/>
       <Itemlist greeting="hola mundo" style={'greeting'}/>
    </div>
  );
}

export default App;
