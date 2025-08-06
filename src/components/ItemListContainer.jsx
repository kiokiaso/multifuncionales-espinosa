import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemListContainer=({mensaje})=>{
    return (
        <Container>
        <Row>
            <Col>{mensaje}</Col>
        </Row>
        </Container>
    );
}

export default ItemListContainer;