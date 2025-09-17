
import { useEffect,useState } from 'react';
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import LoaderComponent from './LoaderComponent';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';

const ItemListContainer=({mensaje})=>{
    const [data,setData]=useState([]);
    const {filtro}=useParams();
    const [loader,setLoader]=useState(false)
    const [msj,setMsj]=useState(mensaje);

    useEffect(()=>{
        setLoader(true);
        const productsCollection=filtro ?
        query(collection(db,"multifuncionales"),where("category","==",filtro)) 
        :collection(db,"multifuncionales");
        getDocs(productsCollection)
            .then((res)=>{
                const lista=res.docs.map((doc)=>{
                    return{
                        id:doc.id,
                        ...doc.data()
                    }
                })
                setData(lista)
                setMsj(filtro);
            })
            .catch((error)=>console.error(error))
            .finally(()=>setLoader(false))
    },[filtro]);
    
    return (
        <>
        {loader ? <LoaderComponent/>
        :<div className='container'>
            <h1>{msj}</h1>
            <ItemList data={data} />
        </div>}
        </>
    );
}

export default ItemListContainer;