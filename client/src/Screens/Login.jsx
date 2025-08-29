import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
   const [credentials, setcredentials] = useState({email: '', password: ''})
   const navigate = useNavigate();
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          const response = await fetch('http://localhost:5000/api/user/loginuser', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body:JSON.stringify({
                  email: credentials.email,
                  password: credentials.password,
              })
          }); 
          const json = await response.json();
          
  
          if(!json.success){
              alert('Enter valid credentials')
          };

          if(json.success){
            localStorage.setItem('token', json.authToken)
            localStorage.setItem('userEmail', credentials.email)
            navigate("/");
          }
      }
  
      const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      }

  return (
     <div className='container'>
            <form onSubmit={handleSubmit}>
               
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <Link to="/signup" className='m-3 btn btn-danger'>New User</Link>
            </form>
        </div>
  )
}

export default Login
