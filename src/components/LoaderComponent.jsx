
import { Spinner } from 'react-bootstrap'

const LoaderComponent = () => {
  return (
    <div style={{with:'100%',height:'85vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Spinner animation="grow" variant='warning'/>
    </div>
  )
}

export default LoaderComponent
