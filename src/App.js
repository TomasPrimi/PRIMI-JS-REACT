import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Accesorios from './paginas/accesorios';
import Coleccionables from './paginas/coleccionables';
import Vestimentas from './paginas/vestimentas';
import Nosotros from './paginas/nosotros';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Bienvenidos D-shop"} />}
          />

          <Route path="/accesorios" element={<Accesorios/>}> </Route>

          <Route path ="/coleccionables" element={<Coleccionables/>}> </Route>

          <Route path="/vestimentas" element={<Vestimentas/>}> </Route>

          <Route path="/nosotros" element={<Nosotros/>}></Route>

        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;