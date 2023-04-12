import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="heading">
            {/* <h1 className='theSiren'><span className='the'>The</span> Siren</h1> */}
            <div className='navDiv'>
                <NavLink to='/' className='linkD' style={{backgroundColor:"orange",border:"2px solid black",fontSize:"20px",borderRadius:"10px"}}><li> Home </li></NavLink>
                <NavLink to='/AboutPage' className='linkD' style={{backgroundColor:"orange",border:"2px solid black",fontSize:"20px",borderRadius:"10px"}}><li>About us</li></NavLink>
                <NavLink to='/Workingpage'className='linkD' style={{backgroundColor:"orange",border:"2px solid black",fontSize:"20px",borderRadius:"10px"}}><li>How it Works</li></NavLink>
               <NavLink to='/Downloading' className='linkD'><li><button className='btn' style={{backgroundImage:"linear-gradient(tomato,red)", color:"white",border:"2px solid black",fontSize:"20px",borderRadius:"10px"}}>Download Our Brief</button></li></NavLink>
            </div>
        </div>
        
    </>
  )
}

export default Navbar