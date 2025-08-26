
import { useEffect,useState } from 'react';
import { getMultifuncionales } from '../mock/AsyncMock';
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'

const Multifuncionales=()=>{
 //function Multifuncionales(){
    const [data,setData]=useState([]);
    const {filtro}=useParams();
    //console.log("filtro",filtro);
    useEffect(()=>{
        //console.log("Multifuncionales")
        getMultifuncionales(filtro)
        .then((res)=>setData(res))
        .catch((error)=>console.error(error))
    },[filtro]);
    //console.log(data);
    return(
        <div>
            <h1>{}</h1>
            <ItemList data={data} />
        </div>
    )
}


export default Multifuncionales;