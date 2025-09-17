
import { useEffect,useState } from 'react';
import ItemDetail from './ItemDetail'
import {Col, Container,Row,Card} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import LoaderComponent from './LoaderComponent';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

function ItemDetailContainer(){
    const [item,setItem]=useState({});
    const [cargando,setCargando]=useState(false)
    const {id}=useParams();
    const [invalid,setInvalid]=useState(false)

    useEffect(()=>{
        setCargando(true)
        const docRef=doc(db,"multifuncionales",id)
        getDoc(docRef)
        .then((res)=>{
                if(res.data()){
                    setItem({id:res.id,...res.data()})
                }else{
                    setInvalid(true)
                }
            }
        )
        .catch((error)=>console.error(error))
        .finally(setCargando(false));
    },[id])

     if(invalid){
      return(
        <Container className='mt-5'>
            <Row className='d-flex justify-content-center align-items-center text-center'>
                 <Col sm={8}>
                    <Card>
                            <Card.Body>
                                <Card.Title>El artículo no se ha encontrado</Card.Title>
                                <Link to="/" variant="primary" className='btn btn-primary'>Seguir comprando</Link>
                            </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
      )
    }
    return(
        <>
        {cargando?<LoaderComponent/>
        : <Container>
            <Row className='d-flex justify-content-center align-items-center'>
                <ItemDetail data={item} />
            </Row>
        </Container>}
        </>
    )
}

export default ItemDetailContainer;