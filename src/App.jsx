
import './App.css'
import ItemCount from './components/ItemCount'
import BotonMultiuso from './examples/BotonMultiuso'
import ComponenteConChildren from './examples/ComponenteConChildren'
import NavBar from './components/NavBar'


function App() {
 const saludar=()=>{
  alert('Hola chicos')
 }
 const log=()=>{
  console.log('Log')
 }
  return (
    <>
    <NavBar/>
    {/*<ItemCount/>*/}
      <BotonMultiuso color={"red"} padding={"2rem"} borderRadius={'10%'} onclickHandler={saludar}/>
      <BotonMultiuso color={"yellow"} padding={"1rem"} borderRadius={'5%'} onclickHandler={log}/>

      <ComponenteConChildren>
        <p>Hola soy una children</p>
        <BotonMultiuso color={"yellow"} padding={"1rem"} borderRadius={'5%'} onclickHandler={log}/>
        <BotonMultiuso color={"yellow"} padding={"1rem"} borderRadius={'5%'} onclickHandler={log}/>
        <BotonMultiuso color={"yellow"} padding={"1rem"} borderRadius={'5%'} onclickHandler={log}/>
      </ComponenteConChildren>
    </>
  )
}

export default App
