import { Row,Container,Col,Image,Badge,Button } from 'react-bootstrap';
import ItemCount from './ItemCount'

function ItemDetail({data}){
    console.log(data);
    return(
        <Container>
            <Row className='d-flex justify-content-center align-items-center bg-white'>
                <Col sm={8} className='d-flex justify-content-center align-items-center'><Image src={data.img} rounded style={{height:'500px'}}/></Col>
                <Col sm={4}>
                    <Badge bg="primary">{data.category}</Badge>
                    <h1>{data.name}</h1>
                    <br></br>
                    <p>Precio<br></br><strong style={{fontSize:'2rem'}}>{data.price}</strong><br></br>Sin IVA</p>
                    <ItemCount stock={data.stock}></ItemCount>
                    <Button variant="outline-primary">Comprar</Button>
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