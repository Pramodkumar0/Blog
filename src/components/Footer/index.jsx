import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { store } from '../../config/Data';
import './Style.css';

const Footer = () => {

  const [data] = useContext(store);
  return (
<div className='carddContainer'>
       

<Link className='blogItem-link' to={`/technology/${data[13].id}`}>
       <div className='cardd'>
            <img src={data[13].image} alt="not found" className='cardImg' />
            <div className="carddTitle">
                <h3 className="title">
                {data[13].title}    
                </h3>
            </div>
            <p className="carddPara">
                {data[13].content}    
                </p>
        </div>
    </Link>



    <Link className='blogItem-link' to={`/technology/${data[14].id}`}>
       <div className='cardd'>
            <img src={data[14].image} alt="not found" className='cardImg' />
            <div className="cardTitle">
                <h3 className="title">
                {data[14].title}
                </h3>
            </div>
            <p className="cardPara">
                {data[14].content}    
                </p>
        </div>
    </Link>
    

    <Link className='blogItem-link' to={`/technology/${data[15].id}`}>
       <div className='cardd'>
            <img src={data[16].image} alt="not found" className='cardImg' />
            <div className="cardTitle">
                <h3 className="title">
                {data[16].title}
                </h3>
            </div>
            <p className="cardPara">
                {data[13].content}    
                </p>
        </div>
    </Link>

    </div>
  )
}

export default Footer;