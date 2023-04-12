import { Routes, Route} from 'react-router-dom';
import './App.css';
import './components/Styling.css';
import Home from './pages/HomePage';
import Navbar from './components/Navbar';
import Data from './config/Data';
import Login from './Login';
// import Login from './Login';
// import Register from './components/Register';
// import { useState } from 'react';


function App() {
	// const [currentForm,setCurrentForm]=useState('Login')
	// const toggleForm=(FormName)=>{
	// 	setCurrentForm(FormName)
	// }
  return (
    <>
      <div className="app">

        <Navbar />
		
		
		
        
        <Data>

        <Routes>

          <Route path='/' element={<Home />} />

        </Routes>

      </Data>

      </div>

    </>
  );
}

export default App;

