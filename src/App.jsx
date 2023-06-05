import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element= { <ItemListContainer/> } />
        <Route path='/categoria/:idCategoria' element= { <ItemListContainer/> } />
        <Route path='/item/:idItem' element= { <ItemDetailContainer/> } />
      </Routes>

      </BrowserRouter>


      <ItemListContainer greeting={"Bienvenidos al Proyecto Final"}/>
      <ItemDetailContainer />
    </>
  );
}

export default App;
