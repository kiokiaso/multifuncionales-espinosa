import {useState,useContext} from 'react'
import { Container,Form,Row,Button,Card, Col } from 'react-bootstrap';
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart';
import { addDoc, collection, serverTimestamp, writeBatch,getDoc,updateDoc,doc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { Link } from 'react-router-dom';


const CheckOut=()=>{
    const [validated, setValidated] = useState(false);
    const [secondMail, setSecondMail] = useState('')
    const [orderId, setOrderId] = useState(null)
    const [data, setData] = useState({})
    const {cart, total, clear}= useContext(CartContext)
    const datos = (e) => {
        setData (
            {
                ...data,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity() === false || secondMail!==data.email) {
            event.stopPropagation();
        }else{
            let order = {
                comprador : data,
                compras:cart,
                total: total(),
                date: serverTimestamp()
            }
            actualizarStock(cart)
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
            .then((res)=>{
                setOrderId(res.id)
                
                clear()
            })
            .catch((error)=> console.log(error))
        }
        setValidated(true);
        event.preventDefault();
    };
    const actualizarStock=(cart)=>{
        cart.map((dat)=>{
            const itemRef=doc(db,'multifuncionales',dat.id);
            getDoc(itemRef)
                .then((res)=>{
                    let stock=res.data().stock-dat.quantity;
                    updateDoc(itemRef,{stock:stock})
                    console.log('Stock',stock)
                })
        })
    }

    


if(!cart.length && !orderId){
    return <EmptyCart/>
}
    return(
        <>
        {
            orderId
            ? <Container className='mt-5'>
                <Row className='d-flex justify-content-center align-items-center bg-white text-center'>
                    <Col sm={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Amadeo Espinosa tu compra se ha registrado de forma correcta</Card.Title>
                                <Card.Text>
                                    Con el folio siguiente: {orderId}
                                </Card.Text>
                                <Card.Title>Muchas gracias por tu compra</Card.Title>
                                <Link to="/" variant="primary" className='btn btn-primary'>Seguir comprando</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
            : <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className='d-flex justify-content-center align-items-center bg-white'>
                    <h1>Complete el formulario con sus datos</h1>
                    <Form.Group className="mb-3" controlId="input1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Nombre" required  onChange={datos}/>
                        <Form.Control.Feedback type="invalid">
                            Debes ingresar tu nombre
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="input2">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" name="lastname" placeholder="apellidos" required  onChange={datos}/>
                        <Form.Control.Feedback type="invalid">
                            Debes ingresar tus apellidos
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="textarea1">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control as="textarea" name="address" rows={3} required  onChange={datos}/>
                        <Form.Control.Feedback type="invalid">
                            Debes ingresar tu dirección
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="name@example.com" required  onChange={datos}/>
                        <Form.Control.Feedback type="invalid">
                            Debes ingresar tu email
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="secondemail" placeholder="name@example.com" required
                        isInvalid={secondMail!==data.email}
                        onChange={(e)=> setSecondMail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Los emails deben coincidir
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Enviar</Button>
                </Row>
            </Form>
        </Container>
        }
        </>
        
    );
}

export default CheckOut;