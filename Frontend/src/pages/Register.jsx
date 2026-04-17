import React, { useState } from 'react'
import { Link, Links } from 'react-router-dom';
import Login from './Login';

const Register = () => {
        const [form, setForm] = useState({ email: "", password: "" });
  
      const handleRegister = async (e) => {
      e.preventDefault();
  
    };
  return (
        <form onSubmit={handleRegister} className="p-6 max-w-sm mx-auto">
    <h1 className='text-7xl mb-7'>Stay Organized. <span className='inline whitespace-nowrap   text-amber-400'> Get Hired</span> </h1>
      <input
       placeholder="Username" 
      className="w-full mb-3 border bg-amber-100 px-4 py-2 rounded-md  border-gray-400 focus:outline-none focus:ring-amber-700"
        onChange={(e)=>setForm({...form,email:e.target.value})}/>

         <input
       placeholder="Email" 
      className="w-full mb-3 border bg-amber-100 px-4 py-2 rounded-md  border-gray-400 focus:outline-none focus:ring-amber-700"
        onChange={(e)=>setForm({...form,email:e.target.value})}/>
      
      <input type="password"
       placeholder="Password"
       className="w-full mb-3 border bg-amber-100 px-4 py-2 rounded-md  border-gray-400 focus:outline-none focus:ring-amber-700"
        onChange={(e)=>setForm({...form,password:e.target.value})}/>
      
      <button className="bg-amber-500 text-white w-full mb-3 border px-4 py-2 rounded-md  border-gray-400 focus:outline-none focus:ring-amber-700 ">Login</button>
      <hr  className='mt-7 text-amber-800'/>
            <p className=''>Already have an account ?<span  className='text-amber-600'>Login</span> </p>

    </form>
  )
}

export default Register