
import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import CheckOut from './components/CheckOut'
import './css/Estilo.css'
import Error from './components/Error'
import CartContainer from './components/CartContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'


function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer mensaje="Home"/>} />
        <Route exac path='/producto/:id' element={<ItemDetailContainer/>} />
        <Route exact path='/categories/:filtro' element={<ItemListContainer/>} />
        <Route exact path='/cart' element={<CartContainer/>} />
        <Route exact path='/checkout' element={<CheckOut/>} />
        <Route exact path='*' element={<Error/>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
