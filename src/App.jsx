import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Cart from './Componentes/Cart/Cart';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';

function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>

      <NavBar />
      <Routes>
        <Route path='/' element= { <ItemListContainer/> } />
        <Route path='/categoria/:idCategoria' element= { <ItemListContainer/> } />
        <Route path='/item/:idItem' element= { <ItemDetailContainer/> } />
        <Route path='*' element={<h2>Sitio en Contruccion</h2>} />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>

      </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
