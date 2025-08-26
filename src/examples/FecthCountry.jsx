import React, {useEffect,useState} from 'react'

const FecthCountry = () => {
    const [list,setList]=useState([]);
    useEffect(()=>{
        fetch('https://dragonball-api.com/api/characters')
        .then((response)=>response.json())
        .then((data)=>setList(data.items))
        .catch((error)=>console.log(error))
    },[]);
    console.log(list,'Listado de personajes')
    /*useEffect(()=>{
        fetch('https://restcountries.com/v3.1/name/mexico')
        .then((response)=>response.json())
        .then((data)=>console.log(data))
        .catch((error)=>console.log(error))
    },[]);*/
  return (
    <div>
      <h1>Personajes</h1>
      {/*list.map((personaje)=> <p key={personaje.id}>{personaje.name}</p>)*/}
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
            {list.map((personaje)=> (
                <div className='card' style={{width:'18rem'}} key={personaje.id}>
                    <img src={personaje.image} className="card-img-top"  alt={personaje.name}/>
                    <div className='card-body'>
                        <h5 className='card-title'>{personaje.name}</h5>
                        <p className='card-text'>{personaje.race}</p>
                    </div>

                </div>
            ))}
      </div>
    </div>
  )
}

export default FecthCountry
