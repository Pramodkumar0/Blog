import React from 'react'
import Login from '../Login';






const Firstpage = () => {
	
  return (
    <div className='bannerContainer'>
      
        <div className="leftBanner">
           <h1 className='head'><span>Mission Control</span><span className='thee'> for Your APIs</span></h1>
           {/* <h1 ><span className='the'>The</span> Siren</h1> */}
           <p className='con'>Seekret's cutting-edge API observability platform provides developers and engineering managers with the insights and resources needed to build test, and publish APIsfaster than ever before</p>
           <button className='btn' style={{backgroundImage:"linear-gradient(tomato,red)", color:"white",border:"2px solid black",fontSize:"20px",borderRadius:"10px"}} >Download our Brief</button>

           <Login/>
        
           
        </div>

        
    
      
          </div>
  )
}

export default Firstpage;