
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Container,Row, Col, Card } from 'react-bootstrap'

const CartView = () => {
    const {cart,removeItem,clear,total,subTotal}=useContext(CartContext)
  return (
    <>
    <Container className='mt-5'>
      <h1>Tu carrito</h1>
            <Row className='d-flex justify-content-center align-items-center'>
                <Col sm={10}></Col>
                {
                  cart.map((compra)=>(
                    <Card className='mb-2'>
                            <Card.Body key={compra.id} style={{display:'flex', justifyContent:'space-between',alignItems:'center',width:'100%',padding:'2rem'}}>
                                <img src={compra.img} alt={compra.name} style={{width:'9rem'}}/>
                                <span>{compra.name}</span>
                                <span>${compra.price.toLocaleString()}.00</span>
                                <span>Cantidad: {compra.quantity}</span>
                                <span>Precio total: ${subTotal(compra.quantity,compra.price).toLocaleString()}.00</span>
                                <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
                            </Card.Body>
                        </Card>
                  ))
                }
            </Row>
            <Row className='d-flex justify-content-end align-items-center'>
            <Col sm={4} >
              <Col sm={10} className='mt-3 text-end'>
                <span>Total a pagar: ${total().toLocaleString()}.00</span>
              </Col>
              <Col sm={10} className='mt-2' style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <button className='btn btn-danger' onClick={()=>clear()}>Vaciar Carrito</button>
                <Link className='btn btn-success' to="/checkout">Terminar Compra</Link>
              </Col>
            </Col>
            </Row>
        </Container>
    </>
  )
}

export default CartView

