
import { useEffect,useState } from 'react';
import { getProducts } from '../mock/AsyncMock';
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
const ItemListContainer=({mensaje})=>{
    const [data,setData]=useState([]);
    const {filtro}=useParams();
    const [msj,setMsj]=useState(mensaje);
    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(filtro){
                setMsj('Categoria: '+filtro);
                let articulos=res.filter((item)=>item.category===filtro)
                setData(articulos)
            }else{
                setData(res)
                setMsj(mensaje)
            }
        })
        .catch((error)=>console.error(error))
    },[filtro]);
    
    return (
        <div>
            <h1>{msj}</h1>
            <ItemList data={data} />
        </div>
    );
}

export default ItemListContainer;