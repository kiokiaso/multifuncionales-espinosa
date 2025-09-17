
import Item from './Item'

const ItemList=({data})=>{
    return(
        <div className='d-flex justify-content-between flex-wrap align-items-center p-2'>
            {data.map((prod)=> <Item key={prod.id} prod={prod} />)}
        </div>
    )
}

export default ItemList;