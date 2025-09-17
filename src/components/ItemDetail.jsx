import { Row,Container,Col,Image,Badge } from 'react-bootstrap';
import ItemCount from './ItemCount'
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function ItemDetail({data}){
    const [quantity,setQuantity]=useState(0)
    const {addItem,itemQuantity}=useContext(CartContext)
    const onAdd=(cantidad)=>{
        setQuantity(cantidad)
        addItem(data,cantidad)
    }
    const stock = data.stock - itemQuantity(data.id)
    return(
        <Container>
            <Row className='d-flex justify-content-center align-items-center bg-white'>
                <Col sm={8} className='d-flex justify-content-center align-items-center'><Image src={data.img} rounded style={{height:'500px'}}/></Col>
                <Col sm={4}>
                    <Badge bg="primary">{data.category}</Badge>
                    <h1>{data.name}</h1>
                    <br></br>
                    <p>Precio<br></br><strong style={{fontSize:'2rem'}}>${data.price}.00</strong><br></br>Sin IVA</p>
                    <p className="fw-semibold">Stock disponible: {stock}</p>
                    {quantity !==0 ? <Link to="/cart" className='btn btn-dark'>Ir al carrito</Link>
                    : stock >0 ?<ItemCount stock={stock} onAdd={onAdd}></ItemCount>: <Badge bg="danger">No disponible</Badge>}
                </Col>
            </Row>
            <Row className='bg-white mt-5 p-2 boder-box mb-5'>
                <Col>
                    <h4>Descripción</h4>
                    {data.description}
                </Col>
            </Row>
        </Container>
       
    )
}
export default ItemDetail;