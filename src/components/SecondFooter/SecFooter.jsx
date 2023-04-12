import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
// import './Style.css';
import './Style.css';
import { store } from '../../config/Data';

const SecFooter = () => {

  const [data]=useContext(store)
  return (

<div className='cardsContainer'>
     
     <Link className='blogItem-link' to={`/technology/${data[17].id}`}>
       <div className='cards'>
            <img src={data[17].image} alt="not found" className='cardImg' />
            <div className="cardsTitle">
                <h3 className="title">
                {data[17].title}    
                </h3>
            </div>
           
        </div>
    </Link>

    <Link className='blogItem-link' to={`/technology/${data[19].id}`}>
       <div className='cards'>
            <img src={data[19].image} alt="not found" className='cardImg' />
            <div className="cardsTitle">
                <h3 className="title">
                {data[19].title}    
                </h3>
            </div>
            
        </div>
    </Link>

    <Link className='blogItem-link' to={`/technology/${data[13].id}`}>
       <div className='cards'>
            <img src={data[20].image} alt="not found" className='cardImg' />
            <div className="cardsTitle">
                <h3 className="title">
                {data[20].title}    
                </h3>
            </div>
           
        </div>
    </Link>

    

    </div>
  

  )
}

export default SecFooter