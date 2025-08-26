import { useEffect, useState } from "react"
import {Button,Col,Row,Form,InputGroup} from 'react-bootstrap'
function ItemCount(stock) {
 
    const [count,setCount]=useState(0)
    const [exis,useExis]=useState(stock.stock);
    const sumar=()=>{
      //console.log(stock.stock)
      count===stock.stock ? setCount(stock.stock):setCount(count+1)
    }
    const restar=()=>{
      count===0 ? setCount(0):setCount(count-1)
    }
  return (
    <Form>
      <Row className="align-items-center">
        <Col xs="auto">
          <Button onClick={restar} className="mb-2">
            -
          </Button>
        </Col>
         <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder={count}
            disabled
          />
        </Col>
        <Col xs="auto">
          <Button  onClick={sumar} className="mb-2">
            +
          </Button>
        </Col>
      </Row>
    </Form>
  );
}


export default ItemCount