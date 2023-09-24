import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';

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
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />

          <Route path="/categoria/:id" element={<ItemListContainer/>} />


        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;