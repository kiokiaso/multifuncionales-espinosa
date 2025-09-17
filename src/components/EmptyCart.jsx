
import {Row, Card, Button, Container, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EmptyCart = () => {

  return (
    <>
      <Container className='mt-5'>
                <Row>
                  <Card className='d-flex justify-content-center align-items-center bg-white text-center'>
                    <Col sm={4}>
                      <Card.Body>
                        <Card.Title>Carrito vacio</Card.Title>
                        <Card.Text>
                          Tu carrito se encuentra vacio, por favor, sigue comprando 
                        </Card.Text>
                        <Link to="/" variant="primary" className='btn btn-primary'>Seguir comprando</Link>
                      </Card.Body>
                    </Col>
                  </Card>
                </Row>
            </Container>
    </>
  )
}

export default EmptyCart
