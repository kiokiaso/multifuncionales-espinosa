
import {GiShoppingCart} from 'react-icons/gi'
import Badge from 'react-bootstrap/Badge';
import {useContext} from 'react'
import { CartContext } from '../context/CartContext';
const CartWidget=()=>{
    const {cart,cartQuantity}=useContext(CartContext)

    const style={
        color:'red',
    }
    return(
        <div>
            <span><GiShoppingCart fontSize={'2rem'}/></span>
            {cart.length>0 && <Badge bg="primary">{cartQuantity()}</Badge>}
        </div>
    )
}

export default CartWidget;