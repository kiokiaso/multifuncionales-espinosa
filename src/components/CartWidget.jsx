
import {GiShoppingCart} from 'react-icons/gi'
import Badge from 'react-bootstrap/Badge';
const CartWidget=()=>{

    const style={
        color:'red',
    }
    return(
        <div>
            <span><GiShoppingCart fontSize={'2rem'}/></span>
            <Badge bg="primary">10</Badge>
        </div>
    )
}

export default CartWidget;