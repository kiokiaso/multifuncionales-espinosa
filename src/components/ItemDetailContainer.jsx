
import { useEffect,useState } from 'react';
import { getItem } from '../mock/AsyncMock';
import ItemDetail from './ItemDetail'
import {Container,Row} from 'react-bootstrap'
import {useParams} from 'react-router-dom'


function ItemDetailContainer(){
    const [item,setItem]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        getItem(id)
        .then((res)=>setItem(res))
        .catch((error)=>console.error(error))
    },[id]);
    //console.log(data);
    return(
        <Container>
            <Row className='d-flex justify-content-center align-items-center'>
                <ItemDetail data={item} />
            </Row>
        </Container>
    )
}


export default ItemDetailContainer;