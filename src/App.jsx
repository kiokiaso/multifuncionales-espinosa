
import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import './css/Estilo.css'
import Error from './components/Error'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer mensaje="Bienvenido"/>} />
        <Route exac path='/producto/:id' element={<ItemDetailContainer/>} />
        <Route exact path='/categories/:filtro' element={<ItemListContainer/>} />
        <Route exact path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
