//import logo from '../assets/react.svg'
import '../css/NavBar.css'
const NavBar=()=>{
    const style={
        color:'white',
    }
    return(
        <nav class='nav-container'>
            <img alt='logo' src='../logoExi.png' class="logo"/>
            {/*<img alt='logo' src={logo} />*/}
            <a style={style} class="ancho-nav">Nuevos</a>
            <a style={style} class="ancho-nav">Más vendidos</a>
            <a style={style} class="ancho-nav">Ofertas</a>
        </nav>
    )
}


export default NavBar