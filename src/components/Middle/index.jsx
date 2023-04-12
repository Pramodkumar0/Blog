/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { store } from '../../config/Data';
import './Style.css';

const Middle = () => {
    const [data] = useContext(store);
  return (
    <div className='mainContainer'>
        
        <div className="leftContainer">
        <h1 className="headingArttt">
            The Seekert API Observability Platform
        </h1>
        <p className='headingpara'>The Ultimate foundation for managing and maintaining APIs as they advance through the SDLC and beyond</p>
       

                    
        <Link className='blogItem-link' to={`/technology/${data[8].id}`}>
            <div className="cardArticlede">
                    <img src={data[8].image} alt="image not found" />
                    <div className="discr">
                        <div className="titleDiscc">
                            {data[8].title}
                           
                        </div>
                       
                    </div>
            </div>
        </Link>
        
        <Link className='blogItem-link' to={`/technology/${data[9].id}`}>
            
            <div className="cardArticleedd">
                    <img src={data[9].image} alt="image not found" />
                    <div className="titleeDisccc">
                            {data[9].title}
                           
                        </div>
            </div>
        </Link>

        <Link className='blogItem-link' to={`/technology/${data[9].id}`}>
            
            <div className="cardArticleeeddd">
                    <img src={data[10].image} alt="image not found" />
                    <div className="titleeeDiscccc">
                            {data[10].title}
                           
                        </div>
            </div>
        </Link>
        

        </div>
        <div className="rightContainer">

            <div className="topper"></div>
           
        </div>
        
        
    </div>
  )
}

export default Middle;