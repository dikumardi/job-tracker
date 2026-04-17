import {useState}  from 'react'

const Login = () => {
      const [form, setForm] = useState({ email: "", password: "" });

    const handleLogin = async (e) => {
    e.preventDefault();

  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-sm mx-auto">
    <h1 className='text-6xl mb-7'>Welcome <span className='text-amber-400'>, Back</span> </h1>
      <input
       placeholder="Email" 
      className="w-full mb-3 border bg-amber-100 px-4 py-2 rounded-md  border-gray-400 focus:outline-none focus:ring-amber-700"
        onChange={(e)=>setForm({...form,email:e.target.value})}/>
      
      <input type="password"
       placeholder="Password"
       className="w-full mb-3 border bg-amber-100 px-4 py-2 rounded-md  border-gray-400 focus:outline-none focus:ring-amber-700"
        onChange={(e)=>setForm({...form,password:e.target.value})}/>
      
      <button className="bg-amber-500 text-white w-full py-2 rounded-md">Login</button>
      <hr  className='mt-7 text-amber-800'/>
            <p> Create an account. <a href="" className='text-amber-600'>Register</a></p>

    </form>

)
}

export default Login