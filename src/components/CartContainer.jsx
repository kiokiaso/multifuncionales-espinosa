
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import CartView from './CartView'

const CartContainer = () => {
   const {cart}=useContext(CartContext)
    console.log(cart)
  
    return (
      <div>
        <>
        {!cart.length ? <EmptyCart/>:<CartView/>}
        </>
      </div>
    )
}

export default CartContainer
