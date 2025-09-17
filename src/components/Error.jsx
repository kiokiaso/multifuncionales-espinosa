
import {Link} from 'react-router-dom'
const Error=()=>{
    
    return (
        <div >
            <div className="d-flex justify-content-center align-items-center bg-white"> <Link className='btn btn-primary' style={{marginTop:'1rem'}} to='/'>Regresar</Link></div>
             <div className="d-flex justify-content-center align-items-center bg-white">
                <img
                    src="https://i.postimg.cc/FR6DQy56/Error.png"
                    alt="Page not found"
                    style={{ width: '50%'}}
                />
      </div>
           
            
        </div>
    );
}

export default Error;