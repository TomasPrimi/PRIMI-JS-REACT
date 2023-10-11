import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Index from './components/CartContainer/index';
import { CartContextProvider } from './components/context/CartContext';
import FinalizarCompra from './components/CartContainer/FinalizarCompra';


function App() {
  return (
    <div className="App">
          <CartContextProvider>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Bienvenidos D-shop"} />}
          />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />

          <Route path="/finalizar-compra" component={ <FinalizarCompra/> } />

          <Route path="/checkout" element={< Index />} />

          <Route path="/categoria/:id" element={<ItemListContainer/>} />

        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    
    </div>
  );
}
export default App;