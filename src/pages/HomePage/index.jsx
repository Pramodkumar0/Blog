import React from 'react'
import Firstpage from '../../components/Firstpage';
import Footer from '../../components/Footer';
import Middle from '../../components/Middle';
import SecondFooter from '../../components/SecondFooter/SecFooter';
import SecFooter from '../../components/SecondFooter/SecFooter';
import Contact from '../../Contact/Contact';
import Seccondmiddle from '../../components/Seccondmiddle';

const Home = () => {
  return (
    <div className='home'>

        <Firstpage/>
        {/* <h1 className="headLine">API development today takes place in the dark</h1> */}
        {/* <Latest/> */}

        <Seccondmiddle/>

        
        <h1 className="headLine">API development today takes place in the dark</h1>
        <p className='para'>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Ducimus, minima.ipsum dolor sit amet consectetur, adipisicing elit. Ducimus adipisicing elit. Ducimus minima.ipsum dolor sit amet <br /> consectetur, adipisicing elit. adipisicing elit. Ducimus, minima.ipsum dolor sit amet consectetur, adipisicing elit. Ducimus minima elit. Ducimus elit. Ducimus melit. Ducimus melit. Ducimus</p>
        <br />

        <Footer/>  

        <h2 className="scndLine">A Glimpse Into the Future</h2>
        <p className='paraa'>Seekers Cutting-edge API observality platform levarages your application traffic simlify API management,automatically detects breaking changes and improves Engineering velocity with context and automation to the API development Lifecycle </p>

        <SecFooter/>

        <Middle />

    <Contact/>

    </div>
  )
}

export default Home