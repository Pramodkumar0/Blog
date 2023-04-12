import { Toast } from 'bootstrap';
import React,{useState} from 'react'
import './index.css'

function Login() {
    const [username,usernameupdate]=useState('')
    const [password,passwordupdate]=useState('')
    const [firstname,firstusername]=useState('')
    const [lastname,lastusername]=useState('')

    const proceedtologin=(e)=>{
        e.preventDefault();

        if(validate()){
            console.log(username)
            console.log(password)
            console.log(firstname)
            console.log(lastname)

        }
       
    }
    const validate=()=>{
        let result=true;
        if(username==="" || username===null){
            result =false
            Toast.warning('please enter name')
        }
        if(password==="" || password===null){
            result =false
            Toast.warning('please enter password')
        }
        return result
    }
  return (
    <div className='formm'>
        <form onSubmit={proceedtologin}>
            
            <label htmlFor="emailAdress">Email:</label>
            <br/>
            <input value={username} type="name" placeholder='email@gmail.com' id='email' name='email' onChange={(e)=>usernameupdate(e.target.value)} />            
             <br/> 
             <label htmlFor="password">Password:</label> 
             <br/> 
             <input value={password} type="password" placeholder='********' id='password' name='password' onChange={(e)=>passwordupdate(e.target.value)} />
             <br/>
             
             <label htmlFor="FirstNames">FirstName:</label>
            <br/>
            <input value={firstname} type="name" placeholder='FirstName' id='name' name='name' onChange={(e)=>firstusername(e.target.value)} />  
            <br/>
          <label htmlFor="LastName">FirstName</label>
            <br/>
            <input value={lastname} type="name" placeholder='LastName' id='name' name='name' onChange={(e)=>lastusername(e.target.value)} />   
            <br/>     
             <button type="submit" className='bb'>Log In</button>
             <br/> 
             <h1 style={{color:"gold",fontSize:"25px"}}>Data seeing in console</h1>   
        </form>
       

    </div>
  )
}

export default Login