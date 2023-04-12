/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { store } from '../../config/Data';
import './Style.css';

const Seccondmiddle = () => {
    const [data] = useContext(store);
  return (
    <div className='mainContainer'>
        
        <div className="leftContainer">
        <h1 className="headingArt">
           In This solution,brief we share how seekert is tackling API management and howyour R&D teams can:
        </h1>
        

                    
        <Link className='blogItem-link' to={`/technology/${data[8].id}`}>
            <div className="cardAarticle">
                    <img src={data[0].image} alt="image not found" />
                    <div className="discr">
                        <div className="titlDisc">
                            {data[0].title}
                           
                        </div>
                       
                    </div>
            </div>
        </Link>
        
        <Link className='blogItem-link' to={`/technology/${data[1].id}`}>
            
            <div className="cardArticlee">
                    <img src={data[1].image} alt="image not found" />
                    <div className="titleeDisc">
                            {data[1].title}
                           
                        </div>
            </div>
        </Link>

        <Link className='blogItem-link' to={`/technology/${data[2].id}`}>
            
            <div className="cardArticleee">
                    <img src={data[2].image} alt="image not found" />
                    <div className="titleeeDisc">
                            {data[2].title}
                           
                        </div>
            </div>
        </Link>

        <Link className='blogItem-link' to={`/technology/${data[2].id}`}>
            
            <div className="cardArticleeee">
                    <img src={data[3].image} alt="image not found" />
                    <div className="titleeeeDisc">
                            {data[3].title}
                           
                        </div>
            </div>
        </Link>
        

        </div>
        <div className="rightContainer">

            <div className="top"></div>
           
        </div>
        
        
    </div>
  )
}

export default Seccondmiddle