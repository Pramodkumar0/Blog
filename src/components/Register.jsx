// import React, { useState } from 'react'

// function Register(props) {
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const [name,setName]=useState('')
//     const submitt=(e)=>{
//         e.preventDefault();
//         console.log(email)
//     }
//   return (
//     <div>
//         <form onSubmit={submitt}>
//             <label htmlFor='name'>Full Name</label>
//             <input value={name} type="text" name="name" id="name" placeholder='Fullname'/>
//             <label htmlFor="email">Email:</label>
//             <input value={email} type="email" placeholder='email@gmail.com' id='email' name='email' />
//              <label htmlFor="password">Password:</label>
//              <input value={email} type="password" placeholder='********' id='password' name='password' />
//              <button type="submit">Log In</button>
            
//         </form>
// <button onClick={()=>props.onformSwitch('Login')}>Alredy have a account? Login,here</button>
//     </div>
//   )
// }

// export default Register